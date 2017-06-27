const watchTree = require('chokidar').watch;
const path = require('path');
const build = require('./../build');

const start = (name) => {
    const componentsPath = path.resolve('components/desktop/new');

    console.log('watching...');

    watchTree(
        componentsPath,
        {
            ignored: /rendered/
        }
    ).on('change', (file) => {
        console.log(`change at ${file}`);

        build(name).then(() => {
            console.log('Reload browser here!');
        });
    });
};

module.exports = start;
