const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin(),
    ],
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        hot: true,
    },
});
