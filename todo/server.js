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

async function pgConnect()
{
    return new Pool({
        user: 'root',
        password: 'root123',
        host: '127.0.0.1',
        port: 5432,
        database: 'postgres',
        max:20,
        _connectionTimeoutMillis: 3000,
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
    const pool = await pgConnect();
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

app.listen(3000, () => console.log('Listening on port 3000'));
