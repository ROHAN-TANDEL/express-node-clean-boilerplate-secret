const express = require("express");
const pgsql = require('pg');

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
    return 'connected to pg server';
}

async function userLogin(req, res)
{
    res.status(200).json({ message: 'user logged in'});
}

async function userRegister(req, res)
{
    const { email } = req.body;

    if (!email || !email.length < 1 || email.length > 255 || typeof email !== 'string') {
        res.status(400).json({message: 'email is required and have at least 3 characters long'});
    }

    res.status(200).json({message: 'user registered in', data: {
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
