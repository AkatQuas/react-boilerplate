const getEntry = require('./entry');
const entryKey = Object.keys(getEntry(true));
const { buildPath } = require('./utils');
const pkg = require('../package.json');

const env = ['prod', 'test'];
const path = (env, name) => buildPath(env, `${pkg.version}/${name}.js`);

env.forEach(en => {
    console.log(`In ${en} environment:`);
    entryKey.forEach(entry => console.log(path(en, entry)));
    console.log('\n');
});

