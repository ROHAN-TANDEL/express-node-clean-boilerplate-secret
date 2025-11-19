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

