const childProcess = require('child_process');

const build = function(name) {
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
