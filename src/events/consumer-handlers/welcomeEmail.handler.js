export async function welcomeEmailHandler(event, { mailProvider, processedRepository }) {
    // idempotency check
    const already = await processedRepository.findByEventId(event.eventId);
    if (already) return;

    const payload = event.payload;
    await mailProvider.send(payload.email, 'Welcome', `<p>Welcome ${payload.name}</p>`);
    await processedRepository.markProcessed(event.eventId);
}
