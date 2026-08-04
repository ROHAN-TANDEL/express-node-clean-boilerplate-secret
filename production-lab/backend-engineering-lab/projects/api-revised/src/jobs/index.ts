import {workers} from "../workers";


export function jobs(
    workersProvider: ReturnType<typeof workers>
)
{

    async function enqueue( job: string, payload: unknown )
    {
        console.log("Queued",job,payload);
        setTimeout(async () => {

            await workersProvider.process( job, payload );

        }, 0);
    }

    return {
        enqueue
    };

}