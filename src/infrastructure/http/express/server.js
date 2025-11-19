const app = require('./app');

const env = require('../../config/env');

const PORT = env.app.PORT || 3000;

app.get("/test", (req, res) => {
    debugger;
    res.send("ok");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


// import { createApp } from "./app.js";
//
// export const startServer = async (container) => {
//     const app = createApp(container);
//     const PORT = process.env.PORT || 3000;
//
//     app.listen(PORT, () => {
//         console.log(`Server running on port ${PORT}`);
//     });
// };
