export function workers() {

    /** */
    async function process(job: string, payload: unknown)
    {
        console.log( "Worker started", job, payload);


        await new Promise(
            resolve =>
                setTimeout( resolve, 3000 ) );

        console.log( "Worker finished", job );
    }

    return { process };
}