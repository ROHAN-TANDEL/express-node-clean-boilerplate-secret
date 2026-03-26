const userService = require('../services/user.service');

async function getUser(req, res) {
    try {
        const { userId } = req.query;

        if (!userId) {
            return res.status(400).json({ error: 'userId required' });
        }

        const { schema, database } = req.client;

        const user = await userService.getUserDetails({
            userId,
            schema,
            database,
        });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(user);
    } catch (err) {
        console.error('Controller error:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = { getUser };