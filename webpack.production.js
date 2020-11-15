const {merge} = require('webpack-merge');
const common = require('./webpack.config.js');

const TerserPlugin = require("terser-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");


module.exports = merge(common, {
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    plugins: [
        new CompressionWebpackPlugin(),
    ]
});