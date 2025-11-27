const express = require('express');
const { createClient } = require('redis');
const { v4: uuid } = require('uuid');

const app = express();
app.use(express.json());


const redis = createClient();
redis.connect().catch(console.error);

redis.on('connect', () => console.log('Connected to Redis'));
redis.on('error', (err) => console.error('Redis error:', err));


const TODOS_KEY = 'todos';


app.post('/todos', async (req, res) => {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: "Title required" });

    const id = uuid();
    const todo = { id, title, completed: false };

    await redis.hSet(TODOS_KEY, id, JSON.stringify(todo));

    res.json(todo);
});


app.get('/todos', async (req, res) => {
    const todos = await redis.hGetAll(TODOS_KEY);

    const formatted = Object.values(todos).map(JSON.parse);

    res.json(formatted);
});


app.put('/todos/:id', async (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;

    const todoStr = await redis.hGet(TODOS_KEY, id);
    if (!todoStr) return res.status(404).json({ error: "Todo not found" });

    const todo = JSON.parse(todoStr);

    if (title !== undefined) todo.title = title;
    if (completed !== undefined) todo.completed = completed;

    await redis.hSet(TODOS_KEY, id, JSON.stringify(todo));

    res.json(todo);
});


app.delete('/todos/:id', async (req, res) => {
    const { id } = req.params;

    const removed = await redis.hDel(TODOS_KEY, id);
    if (!removed) return res.status(404).json({ error: "Todo not found" });

    res.json({ message: "Deleted successfully" });
});


app.listen(3001, () => console.log("Server running on port 3001"));

