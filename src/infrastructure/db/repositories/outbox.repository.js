// using knex or sequelize; example pseudo-implementation with knex-like API
export class OutboxRepository {
    constructor({ db }) { this.db = db; }

    async saveOutboxEvent(event) {
        return this.db('outbox_events').insert({
            event_id: event.eventId,
            event_type: event.eventType,
            aggregate_id: event.aggregateId,
            payload: JSON.stringify(event.payload),
            occurred_at: event.occurredAt,
            published: false,
            attempts: 0,
        });
    }

    async fetchUnpublished(limit = 50) {
        return this.db('outbox_events').where({ published: false }).limit(limit).forUpdate();
    }

    async markPublished(eventId) {
        return this.db('outbox_events').where({ event_id: eventId }).update({ published: true, published_at: new Date() });
    }

    async incrementAttempts(eventId) {
        return this.db('outbox_events').where({ event_id: eventId }).increment('attempts', 1);
    }
}
