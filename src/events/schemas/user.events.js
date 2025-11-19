export const USER_CREATED = "user.created.v1";

export function userCreatedEvent({ id, email, name, createdAt }) {
    return {
        eventId: `${id}-${Date.now()}`, // uuid recommended
        eventType: USER_CREATED,
        aggregateId: id,
        occurredAt: createdAt || new Date().toISOString(),
        payload: { id, email, name }
    };
}
