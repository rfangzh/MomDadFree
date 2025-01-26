//const { createProxyMiddleware } = require('http-proxy-middleware')
//module.exports = function (app) {
//    app.use(
//        createProxyMiddleware('/ebookproxy', {
//            target: 'https://book.pep.com.cn/',
//            changeOrigin: true,
//            pathRewrite: { '^/ebookproxy': '' },
//        })
//    )
//}