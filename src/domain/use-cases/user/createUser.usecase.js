export class CreateUserUseCase {
    constructor({ userRepository, outboxRepository }) {
        this.userRepository = userRepository;
        this.outboxRepository = outboxRepository;
    }

    async execute(data, trx) {
        // Example using sequelize transaction or knex transaction
        const created = await this.userRepository.create(data, { trx });
        const event = {
            eventId: `user-created-${created.id}-${Date.now()}`,
            eventType: 'user.created.v1',
            aggregateId: created.id,
            payload: { id: created.id, email: created.email, name: created.name },
            occurredAt: new Date().toISOString()
        };
        // Save outbox event in same transaction as user create
        await this.outboxRepository.saveOutboxEvent(event, { trx });
        return created;
    }
}
