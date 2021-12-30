const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { EnvironmentPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let config = {
    entry: './src/app.js',
    output: {
        filename: 'script.js',
        path: path.resolve(path.resolve(), 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
        ],
    },
};

module.exports = (_, argv) => {
    const mode = argv.mode || 'production';
    console.log('mode:', mode);

    const environment = {
        development: {
            S3_CONFIGURATIONS: 'https://login-popup-dev-configs.s3.amazonaws.com',
        },
        production: {
            S3_CONFIGURATIONS: 'https://login-popup-prod-configs.s3.amazonaws.com',
        },
    };

    config.plugins = [
        new HtmlWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: 'main.css' }),
        new EnvironmentPlugin({
            NODE_ENV: mode,
            ...environment[mode],
        }),
    ];
    return config;
};
