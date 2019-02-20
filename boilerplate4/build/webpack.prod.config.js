'use strict';
const { resolve } = require('./utils');
const pkg = require('../package.json');
const baseConfig = require('./webpack.base.config');
const merge = require('webpack-merge');
const getEntry = require('./entry');
const webpack = require('webpack');

const realEnv = process.env.NODE_ENV === 'production' ? 'prod' : 'test';
const { buildPath } = require('./utils');

module.exports = merge(baseConfig, {
    entry: getEntry(true),
    mode: 'production',
    output: {
        path: resolve('dist'),
        publicPath: buildPath(realEnv),
        filename: `${pkg.version}/[name].js?v=[hash:7]`
    },
    performance: {
        hints: false
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ]
});