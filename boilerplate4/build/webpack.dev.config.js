'use strict';
const webpack = require('webpack');
const PruifyCSSPlugin = require('purifycss-webpack');
const merge = require('webpack-merge');
const os = require('os');
const pkg = require('../package.json');
const htmlPlugin = require('./htmlPlugin');
const baseConfig = require('./webpack.base.config');
const { resolve } = require('./utils');
const getEntry = require('./entry');

const host = (_ => {
    const ifaces = os.networkInterfaces();
    const ips = Object.values(ifaces).reduce((x, y) => x.concat(y), []);
    for (let i = 0; i < ips.length; i++) {
        const details = ips[i];
        if (details.family === 'IPv4' && details.address !== '127.0.0.1') {
            return details.address;
        }
    }
    return '127.0.0.1';
})();

module.exports = merge(baseConfig, {
    entry: getEntry(),
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: resolve('dist'),
        filename: pkg.version + '/[name].js?v=[hash:7]'
    },
    devServer: {
        host: host,
        inline: true,
        quiet: true,
        hot: true,
        open: true,
        compress: true,
        proxy: {
            '/activity': {
                target: 'dev_proxy_host_todo',
                secure: false
            }
        },
        clientLogLevel: 'warning',
        port: '8021',
        historyApiFallback: true
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 500,
        poll: 1000
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        ...htmlPlugin,
        new webpack.HotModuleReplacementPlugin()
    ]
});
