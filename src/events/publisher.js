import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";

export class EventPublisher {
    constructor({ config, outboxRepository }) {
        this.client = new SNSClient({ region: config.aws.region, endpoint: config.aws.endpoint }); // endpoint for localstack
        this.outboxRepo = outboxRepository;
        this.topicArn = config.aws.userTopicArn; // create via infra or localstack
    }

    async publishPending(limit = 20) {
        const events = await this.outboxRepo.fetchUnpublished(limit);
        for (const row of events) {
            const event = {
                eventId: row.event_id,
                eventType: row.event_type,
                payload: row.payload,
                aggregateId: row.aggregate_id,
            };
            try {
                await this.client.send(new PublishCommand({
                    TopicArn: this.topicArn,
                    Message: JSON.stringify(event),
                    MessageAttributes: {
                        eventType: { DataType: "String", StringValue: row.event_type }
                    }
                }));
                await this.outboxRepo.markPublished(row.event_id);
            } catch (err) {
                console.error('publish failed', row.event_id, err);
                await this.outboxRepo.incrementAttempts(row.event_id);
            }
        }
    }
}
