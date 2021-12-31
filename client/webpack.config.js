const path = require('path');
const { EnvironmentPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
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

const environment = {
    development: {
        APP_API: 'https://localhost:8080',
    },
    production: {
        APP_APIs: 'https://localhost:8080',
    },
};

module.exports = (_, argv) => {
    const mode = argv.mode || 'production';
    console.log('mode:', mode);

    config.plugins = [
        new HtmlWebpackPlugin(),
        new EnvironmentPlugin({
            NODE_ENV: mode,
            ...environment[mode],
        }),
    ];
    return config;
};
