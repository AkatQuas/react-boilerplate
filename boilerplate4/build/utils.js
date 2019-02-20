const path = require('path');
const pkg = require('../package.json');
const toYear = new Date().getFullYear();
const buildDomain = {
    prod: 'production_host_tod',
    test: 'test_host_to'
}

module.exports = {
    resolve: (...dir) => path.resolve(__dirname, '../', ...dir),
    buildPath: (env, rest = '') => buildDomain[env].concat(`/${toYear}/${pkg.name}/${env}/`, rest)
};