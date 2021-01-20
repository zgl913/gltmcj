module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://datainfo.hzqnkj.com/uni/UniData/',
                // 允许跨域
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}