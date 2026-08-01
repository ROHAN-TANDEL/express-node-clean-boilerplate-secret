import type {

    ApplicationContext

} from "./context/context";

export async function getDatabaseTime(

    context: ApplicationContext

) {

    const result = await context.database.query(

        "SELECT NOW()"
    );

    return result.rows[0];

}