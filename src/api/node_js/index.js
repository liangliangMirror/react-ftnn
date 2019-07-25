const express = require('express');
const proxy = require('http-proxy-middleware');
const app = express();
const allRouter = require('./allrouer')
app.use(express.static('./'))
app.use(allRouter);
app.use('/api/*', proxy({
    target: "https://www.futunn.com",
    changeOrigin: true,
    pathRewrite: {
        "^/api": "/",
    }
}))

app.listen(3100, () => {
    console.log('3100 success!!!')
})