const watchTree = require('chokidar').watch;
const path = require('path');
const build = require('./../build');
const open = require('./../open');

const start = (name) => {
    const componentsPath = path.resolve('components/desktop/new');
    const stylesPath = path.resolve('styles/desktop/css-new');

    build(name).
        then(() => open(name)).
        then(() => {
            console.log('Watching changes');

            watchTree(
                [
                    componentsPath,
                    stylesPath
                ],
                {
                    ignored: /rendered/
                }
            ).on('change', (file) => {
                console.log(`change at ${file}`);

                build(name).then(() => {
                    console.log('Reload browser here! Continue watching');
                });
            });
        });
};

module.exports = start;
