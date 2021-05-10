const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "../packages/vue-repo/index.js"),
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "js/[name].[hash:8].js",
        chunkFilename: 'js/[name].[hash:8].js',
        publicPath: '/'
    },
    devServer: {
        hot: true,
        port: 3000,
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
        })
    ]
}