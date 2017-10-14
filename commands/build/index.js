const childProcess = require('child_process');
const openCommand = require('../open/index');

const build = function(name, commander) {
    return new Promise((resolve) => {
        if (name) {
            const buildComp = childProcess.spawn('npm', [
                'run',
                'build',
                name
            ]);

            buildComp.stdout.on('data', (data) => {
                console.log(`${data}`);
            });

            buildComp.stderr.on('data', (data) => {
                console.log(`${data}`);
            });

            buildComp.on('close', () => {
                if (commander && commander.open) {
                    resolve(openCommand(name));
                }

                resolve();
            });
        } else {
            const buildAll = childProcess.spawn('npm', [
                'run',
                'build'
            ]);

            buildAll.stdout.on('data', (data) => {
                console.log(`${data}`);
            });

            buildAll.stderr.on('data', (data) => {
                console.log(`${data}`);
            });

            buildAll.on('close', () => {
                resolve();
            });
        }
    });
};

module.exports = build;
