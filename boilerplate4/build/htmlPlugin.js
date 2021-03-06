'use strict';
const data = require('./entry').data;
const HTMLPlugin = require('html-webpack-plugin');
const { resolve } = require('./utils');
const htmlPlugin = data.map(item => new HTMLPlugin(
    {
        favicon: 'favicon.ico',
        template: resolve('templates/index_' + item.type + '.html'),
        filename: item.name + '.html',
        title: item.title,
        minify: {
            removeComments: true,
            collapseWhitespace: false,
            removeAttributeQuotes: true //压缩 去掉引号
        },
        chunks: [item.name]
    }
));

module.exports = htmlPlugin;
