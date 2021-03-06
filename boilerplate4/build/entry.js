'use strict';
const { resolve }= require('./utils');

const data = [
    {
        title: '访问目录',
        name: 'index',
        type: 'h5'
    },
    {
        title: 'todo',
        name: 'todo',
        type: 'h5'
    }
];
/*
 {
        title: '访问目录',
        name: 'index',
        type: 'h5'
    },
    {
        title: 'todo',
        name: 'todo',
        type: 'h5'
    }{{#if useRouter}},
    {
        title: 'todo-router',
        name: 'todo-router',
        type: 'h5'
    }{{/if}}
 */

const getEntry = prod => {
    /*
    * @params prod: boolean, if true , the entry will get rid of index.js which is useless in production mode
    */

    const realData = prod ? data.filter(item => item.name !== 'index') : data;
    let entry = {};
    realData.forEach(item => {
        const _path = resolve('src/pages', item.name + '/index.jsx');
        entry[item.name] = item.type === 'h5' ? ['babel-polyfill', _path] : _path;
    });
    return entry;
};

module.exports = getEntry;

module.exports.data = data;