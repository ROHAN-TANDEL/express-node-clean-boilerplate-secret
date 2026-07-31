import { bootstrap } from "./bootstrap";

import { config } from "./config";

const app = bootstrap();

app.listen(

    config.app.port,

    () => {

        console.log(

            ` ${config.app.name} running on port ${config.app.port}`

        );

    }

);