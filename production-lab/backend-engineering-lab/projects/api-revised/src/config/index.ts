import "./env";

const config = {

    port: Number(

        process.env.PORT ?? 3000

    )

};

export default config;