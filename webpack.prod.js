const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new ForkTsCheckerWebpackPlugin({
            async: false,
        }),
    ],
    devtool: 'source-map',
    optimization: {
        minimizer: [new TerserJSPlugin({}), new CssMinimizerPlugin({})],
    },
});