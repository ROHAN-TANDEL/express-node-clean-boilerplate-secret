# CORE SETUP

## commands:

### folders:
```
mkdir -p backend-engineering-lab/{docs/{api,architecture,decisions,diagrams,playbooks,scenarios},gateway/{load-balancer,nginx,traefik},infrastructure/{aws,docker/{compose,images,volumes},github-actions,kubernetes,scripts,terraform},monitoring/{alertmanager,grafana,loki,prometheus,tempo},platform/{database/postgres/{primary,replica-1,replica-2,migrations,seeds},database/pgadmin,cache/redis/{master,replica},cache/redisinsight,messaging/{rabbitmq,kafka,sqs},storage/{minio,uploads},mail/mailhog},shared/{cache,clients,config,constants,contracts,database,errors,events,logger,middleware,queue,telemetry,types,utils,validators},projects/{api/{src,tests},worker/{src,tests},admin/{src,tests},scheduler/{src,tests},report/{src,tests}},storage/{logs,temp,uploads},load-test/{jmeter,k6,scenarios},tests/{chaos,e2e,integration,performance}}
```

### files:

```bashscript
touch \
backend-engineering-lab/README.md \
backend-engineering-lab/Makefile
```

### project files:
```bashscript
touch \
backend-engineering-lab/projects/api/{Dockerfile,package.json,.env,.env.example,README.md} \
backend-engineering-lab/projects/worker/{Dockerfile,package.json,.env,.env.example,README.md} \
backend-engineering-lab/projects/admin/{Dockerfile,package.json,.env,.env.example,README.md} \
backend-engineering-lab/projects/scheduler/{Dockerfile,package.json,.env,.env.example,README.md} \
backend-engineering-lab/projects/report/{Dockerfile,package.json,.env,.env.example,README.md}
```

```bashscript
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


