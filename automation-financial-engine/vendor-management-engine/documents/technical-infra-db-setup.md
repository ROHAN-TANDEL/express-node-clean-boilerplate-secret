PRIMARY DECISION:
1. data seperation - user vaults
2. 

├── package.json
├── .env
├── prisma/
│   ├── vault/
│   │   ├── schema.prisma
│   │   └── seed.js
│   ├── master/
│   │   ├── schema.prisma
│   │   └── seed.js
│   └── clients/
│       ├── schema.prisma
│       └── seed.js
└── src/
├── core/
│   └── dbEngine.js
└── app.js

