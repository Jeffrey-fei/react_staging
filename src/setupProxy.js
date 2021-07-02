// 写commonJS代码
const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        // 如果地址中出现api1就走代理
        proxy('api1', {
            target: 'http://localhost:5000',
            changeOrigin: true,
            pathRewrite: {
                '^api1': ''
            }
        })
    )
}