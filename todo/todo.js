
// initial
const express = require('express');
const { createClient } = require('redis');
const { v4: uuid } = require('uuid');

const app = express();
app.use(express.json());

const redis = createClient();
redis.connect().catch(console.error);

redis.on('connect', () => console.log('Connected to Redis'));
redis.on('error', (err) => console.error('Redis error:', err));

/**
 * redist key
 * @type {string}
 */
const TODOS_KEY = 'todos';

/**
 * configuration file
 * handle configuration for todos crud API
 *
 * @type
 */
const apis = {
    'todos': {
        'getAll' : {
            "api" : '/todo/all',
            "name" : "get_all_todos"
        },
        'getTodo' : {
            "api" : "/todo/:id",
            "name" : "get_todo"
        },
        'updateTodo' : {
            "api" : "/todo/:id",
            "name" : "update_todo"
        },
        'deleteTodo' : {
            "api" : "/todo/:id",
            "name" : "delete_todo"
        }
    }
};

/**
 * apis for todos operations
 */
app.get(apis.todos.getAll.api, getAllTodo);
app.get(apis.todos.getTodo.api, getTodo);
app.put(apis.todos.updateTodo.api, updateTodo);
app.delete(apis.todos.deleteTodo.api, deleteTodo);

/**
 * redisUtil
 * handle redis operations CRUD
 *
 * @param key
 * @param input
 * @returns {Promise<null|{}>}
 */
async function redisUtil(key, input=null)
{
    let data = {};

    switch (key) {

        case apis.todos.getAll.name:
            data = await redis.hGetAll(TODOS_KEY);
            break;

        case apis.todos.getTodo.name:
            data = await redis.hGet(TODOS_KEY, input.id);
        break;

        case apis.todos.deleteTodo.name:
            data = await redis.hGet(TODOS_KEY, input.id);
            data = JSON.parse(data);
            if (data) data = await redis.hDel(TODOS_KEY, data.id);
            if (!data) data.error = "todo not found.";
        break;

        case apis.todos.updateTodo.name:

            let todo = await redis.hGet(TODOS_KEY, input.id);
            if (!todo) { data.error = "todo not found."; }
            if (todo) {
                todo = JSON.parse(todo);
                data = await redis.hSet(TODOS_KEY, todo.id, JSON.stringify(input));
               if (!data) { data = input; }
            }
        break;
    }
    return data;
}

/**
 * formatUtil
 * format raw data input readable format example: json
 *
 * @param key
 * @param input
 * @returns {{}}
 */
function formatUtil(key, input=null)
{
    let data = {};

    switch (key) {

        case apis.todos.getTodo.name:
            data = JSON.parse(input);
        break;

        case apis.todos.getAll.name:
            data = Object.values(input).map(JSON.parse);
        break;

    }

    return data;
}

/**
 * getTodo
 * get todos details with id, completed, title
 *
 * @param request
 * @param response
 * @returns {Promise<*>}
 */
async function getTodo(request, response)
{
    const params = request.params;
    const key = apis.todos.getTodo.name;

    let todo = await redisUtil(key, params);

    todo = formatUtil(key, todo);

    return response.json(todo);
}

/**
 * getAllTodo
 * get all todos list
 *
 * @param request
 * @param response
 * @returns {Promise<*>}
 */
async function getAllTodo(request, response)
{
    const key = apis.todos.getAll.name;

    let todos = await redisUtil(key);

    todos = formatUtil(key, todos);

    return await response.json(todos);
}

/**
 * updateTodo
 * update title and status of todos
 *
 * @param request
 * @param response
 * @returns {Promise<*>}
 */
async function updateTodo(request, response)
{
    const data = {};

    data.id = request.params.id;
    const completed = request.body?.completed;
    const title = request.body?.title;

    if (!title && !completed) {
        return response.json({"error": "no data to update"});
    }

    if (title) {
        data.title = title;
    }

    if (completed) {
        data.completed = completed;
    }

    const key = apis.todos.updateTodo.name;

    let todo = await redisUtil(key, data);

    if (!todo) {
        return response.json({"error" : "error updating data"});
    }

    return response.json({"success" : true , "data" : todo});
}

/**
 * deleteTodo
 * delete a specific todos
 *
 * @param request
 * @param response
 * @returns {Promise<*>}
 */
async function deleteTodo(request, response)
{
    const data = request.params;

    const key = apis.todos.deleteTodo.name;

    const deletedTodo = await redisUtil(key, data);

    if (!deletedTodo) {
        return response.status(404).json({ error: "Todo not found" });
    }

    return response.json({ message: "Deleted successfully" });
}


app.listen(3002, () => console.log("Server running on port 3002"));
