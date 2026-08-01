import { database } from "./index";

export async function checkDatabaseHealth() {

    try {

        await database.query(

            "SELECT NOW()"

        );

        return true;

    }

    catch {

        return false;

    }

}