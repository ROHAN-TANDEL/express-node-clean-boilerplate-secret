# CORE SETUP

## Commands:

### Folders:
```shell
mkdir -p backend-engineering-lab/{docs/{api,architecture,decisions,diagrams,playbooks,scenarios},gateway/{load-balancer,nginx,traefik},infrastructure/{aws,docker/{compose,images,volumes},github-actions,kubernetes,scripts,terraform},monitoring/{alertmanager,grafana,loki,prometheus,tempo},platform/{database/postgres/{primary,replica-1,replica-2,migrations,seeds},database/pgadmin,cache/redis/{master,replica},cache/redisinsight,messaging/{rabbitmq,kafka,sqs},storage/{minio,uploads},mail/mailhog},shared/{cache,clients,config,constants,contracts,database,errors,events,logger,middleware,queue,telemetry,types,utils,validators},projects/{api/{src,tests},worker/{src,tests},admin/{src,tests},scheduler/{src,tests},report/{src,tests}},storage/{logs,temp,uploads},load-test/{jmeter,k6,scenarios},tests/{chaos,e2e,integration,performance}}
```

### Files:

```shell
touch \
backend-engineering-lab/README.md \
backend-engineering-lab/Makefile
```

### Project files:
```shell
touch \
backend-engineering-lab/projects/api/{Dockerfile,package.json,.env,.env.example,README.md} \
backend-engineering-lab/projects/worker/{Dockerfile,package.json,.env,.env.example,README.md} \
backend-engineering-lab/projects/admin/{Dockerfile,package.json,.env,.env.example,README.md} \
backend-engineering-lab/projects/scheduler/{Dockerfile,package.json,.env,.env.example,README.md} \
backend-engineering-lab/projects/report/{Dockerfile,package.json,.env,.env.example,README.md}
```
### Project structure:

```text
.
└── backend-engineering-lab
├── configs
├── docs
│   ├── api
│   ├── architecture
│   │   └── setup.md
│   ├── decisions
│   ├── diagrams
│   ├── playbooks
│   └── scenarios
├── gateway
│   ├── load-balancer
│   ├── nginx
│   └── traefik
├── infrastructure
│   ├── aws
│   ├── docker
│   │   ├── compose
│   │   ├── images
│   │   └── volumes
│   ├── github-actions
│   ├── kubernetes
│   ├── scripts
│   └── terraform
├── load-test
│   ├── jmeter
│   ├── k6
│   └── scenarios
├── Makefile
├── monitoring
│   ├── alertmanager
│   ├── grafana
│   ├── loki
│   ├── prometheus
│   └── tempo
├── platform
│   ├── cache
│   │   ├── redis
│   │   │   ├── master
│   │   │   └── replica
│   │   └── redisinsight
│   ├── database
│   │   ├── pgadmin
│   │   └── postgres
│   │       ├── migrations
│   │       ├── primary
│   │       ├── replica-1
│   │       ├── replica-2
│   │       └── seeds
│   ├── mail
│   │   └── mailhog
│   ├── messaging
│   │   ├── kafka
│   │   ├── rabbitmq
│   │   └── sqs
│   └── storage
│       ├── minio
│       └── uploads
├── projects
│   ├── admin
│   │   ├── Dockerfile
│   │   ├── package.json
│   │   ├── README.md
│   │   ├── src
│   │   └── tests
│   ├── api
│   │   ├── Dockerfile
│   │   ├── package.json
│   │   ├── README.md
│   │   ├── src
│   │   └── tests
│   ├── report
│   │   ├── Dockerfile
│   │   ├── package.json
│   │   ├── README.md
│   │   ├── src
│   │   └── tests
│   ├── scheduler
│   │   ├── Dockerfile
│   │   ├── package.json
│   │   ├── README.md
│   │   ├── src
│   │   └── tests
│   └── worker
│       ├── Dockerfile
│       ├── package.json
│       ├── README.md
│       ├── src
│       └── tests
├── README.md
├── shared
│   ├── cache
│   ├── clients
│   ├── config
│   ├── constants
│   ├── contracts
│   ├── database
│   ├── errors
│   ├── events
│   ├── logger
│   ├── middleware
│   ├── queue
│   ├── telemetry
│   ├── types
│   ├── utils
│   └── validators
├── storage
│   ├── logs
│   ├── temp
│   └── uploads
└── tests
├── chaos
├── e2e
├── integration
└── performance

98 directories, 18 files
```

### Readme.md files for each folder

```shell
touch \
backend-engineering-lab/docs/README.md \
backend-engineering-lab/docs/api/README.md \
backend-engineering-lab/docs/architecture/README.md \
backend-engineering-lab/docs/decisions/README.md \
backend-engineering-lab/docs/diagrams/README.md \
backend-engineering-lab/docs/playbooks/README.md \
backend-engineering-lab/docs/scenarios/README.md \
\
backend-engineering-lab/gateway/README.md \
backend-engineering-lab/gateway/load-balancer/README.md \
backend-engineering-lab/gateway/nginx/README.md \
backend-engineering-lab/gateway/traefik/README.md \
\
backend-engineering-lab/infrastructure/README.md \
backend-engineering-lab/infrastructure/aws/README.md \
backend-engineering-lab/infrastructure/docker/README.md \
backend-engineering-lab/infrastructure/docker/compose/README.md \
backend-engineering-lab/infrastructure/docker/images/README.md \
backend-engineering-lab/infrastructure/docker/volumes/README.md \
backend-engineering-lab/infrastructure/github-actions/README.md \
backend-engineering-lab/infrastructure/kubernetes/README.md \
backend-engineering-lab/infrastructure/scripts/README.md \
backend-engineering-lab/infrastructure/terraform/README.md \
\
backend-engineering-lab/monitoring/README.md \
backend-engineering-lab/monitoring/alertmanager/README.md \
backend-engineering-lab/monitoring/grafana/README.md \
backend-engineering-lab/monitoring/loki/README.md \
backend-engineering-lab/monitoring/prometheus/README.md \
backend-engineering-lab/monitoring/tempo/README.md \
\
backend-engineering-lab/platform/README.md \
backend-engineering-lab/platform/database/README.md \
backend-engineering-lab/platform/database/postgres/README.md \
backend-engineering-lab/platform/database/postgres/primary/README.md \
backend-engineering-lab/platform/database/postgres/replica-1/README.md \
backend-engineering-lab/platform/database/postgres/replica-2/README.md \
backend-engineering-lab/platform/database/postgres/migrations/README.md \
backend-engineering-lab/platform/database/postgres/seeds/README.md \
backend-engineering-lab/platform/database/pgadmin/README.md \
backend-engineering-lab/platform/cache/README.md \
backend-engineering-lab/platform/cache/redis/README.md \
backend-engineering-lab/platform/cache/redis/master/README.md \
backend-engineering-lab/platform/cache/redis/replica/README.md \
backend-engineering-lab/platform/cache/redisinsight/README.md \
backend-engineering-lab/platform/messaging/README.md \
backend-engineering-lab/platform/messaging/rabbitmq/README.md \
backend-engineering-lab/platform/messaging/kafka/README.md \
backend-engineering-lab/platform/messaging/sqs/README.md \
backend-engineering-lab/platform/storage/README.md \
backend-engineering-lab/platform/storage/minio/README.md \
backend-engineering-lab/platform/storage/uploads/README.md \
backend-engineering-lab/platform/mail/README.md \
backend-engineering-lab/platform/mail/mailhog/README.md \
\
backend-engineering-lab/shared/README.md \
backend-engineering-lab/shared/cache/README.md \
backend-engineering-lab/shared/clients/README.md \
backend-engineering-lab/shared/config/README.md \
backend-engineering-lab/shared/constants/README.md \
backend-engineering-lab/shared/contracts/README.md \
backend-engineering-lab/shared/database/README.md \
backend-engineering-lab/shared/errors/README.md \
backend-engineering-lab/shared/events/README.md \
backend-engineering-lab/shared/logger/README.md \
backend-engineering-lab/shared/middleware/README.md \
backend-engineering-lab/shared/queue/README.md \
backend-engineering-lab/shared/telemetry/README.md \
backend-engineering-lab/shared/types/README.md \
backend-engineering-lab/shared/utils/README.md \
backend-engineering-lab/shared/validators/README.md \
\
backend-engineering-lab/projects/README.md \
backend-engineering-lab/projects/api/src/README.md \
backend-engineering-lab/projects/api/tests/README.md \
backend-engineering-lab/projects/worker/src/README.md \
backend-engineering-lab/projects/worker/tests/README.md \
backend-engineering-lab/projects/admin/src/README.md \
backend-engineering-lab/projects/admin/tests/README.md \
backend-engineering-lab/projects/scheduler/src/README.md \
backend-engineering-lab/projects/scheduler/tests/README.md \
backend-engineering-lab/projects/report/src/README.md \
backend-engineering-lab/projects/report/tests/README.md \
\
backend-engineering-lab/storage/README.md \
backend-engineering-lab/storage/logs/README.md \
backend-engineering-lab/storage/temp/README.md \
backend-engineering-lab/storage/uploads/README.md \
\
backend-engineering-lab/load-test/README.md \
backend-engineering-lab/load-test/jmeter/README.md \
backend-engineering-lab/load-test/k6/README.md \
backend-engineering-lab/load-test/scenarios/README.md \
\
backend-engineering-lab/tests/README.md \
backend-engineering-lab/tests/chaos/README.md \
backend-engineering-lab/tests/e2e/README.md \
backend-engineering-lab/tests/integration/README.md \
backend-engineering-lab/tests/performance/README.md
```