// vue.config.js 配置说明
// 这里只列一部分，具体配置惨考文档啊
module.exports = {
    devServer: {
        open: true,
        host: 'localhost',
        port: 3666,
        https: false,
        proxy: {
            '^/api': {
                target: 'http://127.0.0.1:3333/',
                ws: true,
                changeOrigin: true
            }
        }
    }
}