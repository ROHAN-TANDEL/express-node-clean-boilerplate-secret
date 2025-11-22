import { SQSClient, ReceiveMessageCommand, DeleteMessageCommand } from "@aws-sdk/client-sqs";

export class SQSConsumer {
    constructor({ config, handlers }) {
        this.client = new SQSClient({ region: config.aws.region, endpoint: config.aws.endpoint });
        this.queueUrl = config.aws.userQueueUrl;
        this.handlers = handlers; // map eventType -> handler function
        this.running = false;
    }

    async start() {
        this.running = true;
        while (this.running) {
            const resp = await this.client.send(new ReceiveMessageCommand({
                QueueUrl: this.queueUrl,
                MaxNumberOfMessages: 10,
                WaitTimeSeconds: 10,
                MessageAttributeNames: ['All']
            }));
            const messages = resp.Messages || [];
            for (const m of messages) {
                try {
                    const body = JSON.parse(m.Body);
                    const event = JSON.parse(body.Message || m.Body); // if SNS->SQS, message is wrapped
                    const handler = this.handlers[event.eventType];
                    if (handler) {
                        await handler(event);
                    } else {
                        console.warn('no handler for', event.eventType);
                    }
                    // delete on success
                    await this.client.send(new DeleteMessageCommand({ QueueUrl: this.queueUrl, ReceiptHandle: m.ReceiptHandle }));
                } catch (err) {
                    console.error('message processing failed', err);
                    // let SQS handle visibility timeout and retries -> DLQ on failure
                }
            }
        }
    }

    stop() { this.running = false; }
}
