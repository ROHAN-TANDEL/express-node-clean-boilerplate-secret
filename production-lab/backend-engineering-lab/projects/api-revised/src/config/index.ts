import { env } from "./env";

const config = {

    port: Number(

        env.PORT ?? 3000

    )

};

export default config;