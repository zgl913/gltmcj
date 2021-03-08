// const path = require('path');
//
// function resolve(dir) {
//     return path.join(__dirname, '.', dir);
// }
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
    // transpileDependencies: [],
    // chainWebpack: config => {
    //     config.module.rule('compile')
    //         .test(/\.js$/)
    //         .include
    //         .add(resolve('src'))
    //         .add(resolve('test'))
    //         .add(resolve('node_modules/webpack-dev-server/client'))
    //         .add(resolve('node_modules'))
    //         .end()
    //         .use('babel')
    //         .loader('babel-loader')
    //         .options({
    //             presets: [
    //                 ['@babel/preset-env', {
    //                     modules: false
    //                 }]
    //             ]
    //         });
    // }
    // chainWebpack: config => {
    //     config.module.rule('iview')
    //         .test(/\.js$/)
    //         .use('babel')
    //         .loader('babel-loader')
    //         .end()
    // }
}