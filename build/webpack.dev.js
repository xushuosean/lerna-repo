const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: {
        vue: {
            import: path.resolve(__dirname, "../packages/vue-repo/index.js"),
            dependOn: "shared"
        },
        react: {
            import: path.resolve(__dirname, "../packages/react-repo/index.js"),
            dependOn: "shared"
        },
        shared: './packages/ddi-assets'
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "js/[name].[hash:8].js",
        chunkFilename: 'js/[name].[hash:8].js',
        publicPath: '/',
        assetModuleFilename: "static/[name].[hash:8].[etx]"
    },
    optimization: {
        runtimeChunk: 'single',
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: "javascript/auto",
                loader: "url-loader",
                options: {
                    limit: 1,
                    name: "img/[name].[contentHash:8].[etx]"
                }
            }
        ]
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