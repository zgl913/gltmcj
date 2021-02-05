module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://116.62.203.227:9001/qndata/qnbasedata/',
                // 允许跨域
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    outputDir: process.env.outputDir,
}