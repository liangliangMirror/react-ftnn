const express = require('express');
const Router = express.Router();
const proxy = require('http-proxy-middleware');
Router.use(express.urlencoded({ extended: false }), express.json());
Router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    if (req.method === "OPTIONS") {
        res.sendStatus(200);
    } else {
        next();
    }
})

Router.use('/my/*', proxy({
    target: "https://news.futunn.com",
    changeOrigin: true,
    pathRewrite: {
        "^/my": "/",
    }
}))
module.exports = Router;