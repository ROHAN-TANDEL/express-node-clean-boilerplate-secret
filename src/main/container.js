import { createContainer, asClass, asFunction, asValue } from 'awilix';

import { UserRepository } from '../infrastructure/db/repositories/user.repository.js';
import { OutboxRepository } from '../infrastructure/db/repositories/outbox.repository.js';
import { CreateUserUseCase } from '../domain/use-cases/user/createUser.usecase.js';
import { EventPublisher } from '../events/publisher.js';
import { SQSConsumer } from '../infrastructure/providers/queue/consumer.js';
import { welcomeEmailHandler } from '../events/consumer-handlers/welcomeEmail.handler.js';

import db from '../infrastructure/db/index.js';
import config from '../infrastructure/config/env.js';
import RedisProvider from '../infrastructure/providers/cache/redis.provider.js';
import SQSProvider from '../infrastructure/providers/queue/sqs.provider.js';

export const container = createContainer();

container.register({
    db: asValue(db),
    config: asValue(config),
    userRepository: asClass(UserRepository).singleton(),
    outboxRepository: asClass(OutboxRepository).singleton(),
    createUserUseCase: asClass(CreateUserUseCase).scoped(),
    eventPublisher: asClass(EventPublisher).singleton(),
    sqsConsumer: asClass(SQSConsumer).singleton(),
    mailProvider: asClass(RedisProvider).singleton(), // placeholder
    // handlers map
    handlers: asValue({ 'user.created.v1': welcomeEmailHandler }),
});
