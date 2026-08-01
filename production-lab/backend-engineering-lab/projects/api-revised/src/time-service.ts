import type { ApplicationContext } from "./context";
import {getCurrentDatabaseTime} from "./repositories/time-repository";

export async function getDatabaseTime(

    context: ApplicationContext

) {

    return getCurrentDatabaseTime(
        context
    );

}