const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    // devtool: 'source-map',
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     use: ["source-map-loader"],
            //     exclude: [
            //         path.resolve(__dirname, 'node_modules/excalibur')
            //     ],
            //     enforce: "pre",
            // },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|bmp)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        emitFile: true
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        // sourceMapFilename: '[file].map',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        open: true,
        port: 9000
    },
    plugins: [
        new CleanWebpackPlugin({}),
        new HtmlWebPackPlugin({
            title: 'Excalibur Webpack Sample'
        })
    ]
}