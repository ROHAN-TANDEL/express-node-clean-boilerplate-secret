import { container } from "./container.js";
import { startServer } from "../infrastructure/http/express/server.js";

(async () => {
    await startServer(container);
})();
