const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        //new CleanWebpackPlugin(['build']),
        new HtmlWebpackPlugin({
            title: 'React Starter',
            template: 'index.ejs'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
/*                 query: {
                    presets: ['es2015', 'react']
                } */
            }
        ]
    }

}