const express = require("express");
const pgsql = require('pg');
const { Pool, Client } = pgsql

const app = express();
app.use(express.json());

app.post('/auth/login', userLogin);
app.post('/auth/logout', userLogout);
app.post('/auth/register', userRegister);

app.post('/customer', customerCreate);
app.post('/order', orderCreate);
app.post('/product', productCreate);

app.post('/user/:userId', getUser);
app.post('/users', getUsers);
app.put('/user/:userId', updateUser);

const pool = pgConnect();

async function pgConnect()
{
    return new Pool({
        user: 'root',
        password: 'root123',
        host: '127.0.0.1',
        port: 5432,
        database: 'postgres',
        max:20,
        connectionTimeoutMillis: 3000,
    });
    // console.log(await pool.query('SELECT NOW()'))
    //
    // const client = new Client({
    //     user: 'root',
    //     password: 'root123',
    //     host: '127.0.0.1',
    //     port: 5432,
    //     database: 'postgres',
    // })
    //
    // await client.connect()
    //
    // console.log(await client.query('SELECT NOW()'))
    //
    // await client.end()
    // return 'connected to pg server';
}

async function userLogin(req, res)
{
    res.status(200).json({ message: 'user logged in'});
}

async function userRegister(req, res)
{
    const { email, password } = req.body;

    if (!email || email.length < 1 || email.length > 255 || typeof email !== 'string') {
        return res.status(400).json({message: 'email is required and have at least 3 characters long'});
    }

    if (!password || password.length < 1 || password.length > 255 || typeof password !== 'string') {
        return res.status(400).json({message: 'password is required and have at least 3 characters long'});
    }

    const query = `INSERT INTO users (firstname, lastname, username, email, password) VALUES ($1, $2, $3, $4, $5) RETURNING *;`;

    const userValues = ["John", "Doe", email, email, password];

    try {
        const response = await pool.query(query, userValues);

        // 1. Grab the first user row from the results array
        const user = response.rows[0];

        // 2. Destructure to extract the password, and group everything else into 'userWithoutPassword'
        const { password, ...userWithoutPassword } = user;

        // 3. Send back the clean object safely
        return res.status(200).json(userWithoutPassword);


    } catch (error) {
        if (error.code === '23505') {
            return res.status(400).json({message: 'user already exists'});
        } else if (error.code === 'ENOENT') {
            console.log(error.message);
        } else {
            return  res.status(500).json({error: error.message});
        }
    } finally {
        console.log(`User registration executed: ${userValues}`);
    }

    return  res.status(200).json({message: 'user registered in', data: {
        email: email ?? null,
        }});
}

async function userLogout(req, res)
{
    res.status(200).json({message: 'user logged out'});
}

async function customerCreate(req, res)
{
    res.status(200).json({message: 'customer created'});
}

async function orderCreate(req, res)
{
    res.status(200).json({message: 'order created'});
}

async function productCreate(req, res)
{
    const errors = [];
    const { name, sku, price, quality } = req.body;
    if (!name || typeof name !== 'string') {
        errors.push('name is required and have at least 3 characters long');
    }

    if (!sku || typeof sku !== 'string') {
        errors.push('sku is required and have at least 3 characters long');
    }

    if(!price || isNaN(price)) {
        errors.push('price is required and have at least 3 characters long');
    }

    if(!quality || isNaN(quality)) {
        errors.push('quality is required and have at least 3 characters long');
    }

    if(errors.length > 0) {
        res.status(200).json({
            message: 'validation failed',
            errors: errors,
        });
    }

    res.status(200).json({
        message: 'product received',
        data: {
            name: name,
            sku: sku,
            price: price,
            quality:quality,
        }
    });
}

async function getUser(req, res)
{
    const { userId } = req.params;

    if (!userId) {
        return res.status(404).json({ error: 'validation errors', message: 'user does not exist'});
    }

    const userQuery = `SELECT * FROM users WHERE user_id = ${userId}`;

    const result = await pool.query(userQuery);

    if(!result || !result.rows || !result.rows.length) {
        return res.status(404).json({ error: 'user does not exist'});
    }
    const { password, ...safeResult} = result?.rows[0];
    return res.status(200).json(safeResult);

}

async function getUsers(req, res)
{
    const email = req?.query?.email ?? null;

    const userQuery = `SELECT * FROM users where email = $1 OR NOT EXISTS(SELECT 1 FROM users WHERE email = $1)`;

    const result = await pool.query(userQuery, [email]);

    if(!result || !result.rows || !result.rows.length) {
        return res.status(404).json({ error: 'user does not exist'});
    }

    const cleanRows = result.rows.map(({ password, ...userWithoutPassword }) => userWithoutPassword);

    return res.status(200).json(cleanRows);

}

async function updateUser(req, res)
{
    let userId = req.params.userId;
    const email = req.body.email;
    const errors = [];
    if (!email || typeof email !== 'string') {
        errors.push('email is required and have at least 3 characters long');
    }

    if (userId) {
        userId = parseInt(userId, 10);

        if (userId < 0 || Number.isNaN(userId)) {
            errors.push('userId is required and have at least 3 characters long');
        }
    } else {
        errors.push('userId is required');
    }

    if (errors.length > 0) {
        return res.status(200).json({message: "validation errors", errors: errors})
    }

    const query = `update users SET email = $1, username = $1 where user_id = $2 RETURNING user_id, firstname, lastname, username, email, created_at, updated_at;`;

    try {

        const result = await pool.query(query, [email, userId]);

        console.log(result);
        if (query.length > 0 && result.rowCount > 0) {
            const {password, ...formattedResult} = result.rows[0];
            return res.status(200).json({status: "success", data: formattedResult});
        }
    } catch (error) {
        if (error.code === '23505') {
            return res.status(400).json({error: "user exists with that email address"});
        }
        return res.status(500).json({error: error.message});
    }

}

app.listen(3000, () => console.log('Listening on port 3000'));
