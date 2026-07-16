const http = require("http");

// pain 1
/**
const server = http.createServer((req, res) => {

    if (req.method === "GET" && req.url === "/users") {

        res.end("Users");

    }

    else if (req.method === "GET" && req.url === "/products") {

        res.end("Products");

    }

    else if (req.method === "POST" && req.url === "/login") {

        res.end("Login");

    }

    else {

        res.statusCode = 404;

        res.end("Not Found");

    }

});
**/
const routes = {
    GET: {
        "/users" : getUsers,
        "/products" : getProducts,
    },
    POST: {
        "/login" : login,
    }
};

const middlewares = [
    logs,
    cors,
]

const server =
    http.createServer((
        req,
        res) => {

        const handler = routes[req.method]?.[req.url];

        if(handler) {
            for(let middleware of middlewares) {
                middleware(req, res, handler);
            }
            handler(req,res);

        }
        else{

            res.statusCode = 404;

            res.end("Not Found");

        }
});

// refactor - 1

function getUsers(req, res) {
    res.end("user");
}

function getProducts(req, res) {
    res.end("products");
}

function login(req, res) {
    res.end("login");
}

function logs(req, res) {
    res.end("logs");
}

function cors(req, res) {
    res.end("cors");
}

function next() {

}

server.listen(3000);