const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
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
        path: path.resolve(__dirname, "../dist"),
        filename: "static/js/[name].[fullhash:8].js",
        chunkFilename: 'static/js/[name].[fullhash:8].js',
        publicPath: '/dist/'
    },
    optimization: {
      runtimeChunk: 'single',
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                loader: "file-loader",
                options: {
                  limit: 10,
                  name: 'static/img/[name].[hash:8].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
        })
    ]
}