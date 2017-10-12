const childProcess = require('child_process');

const open = function(name) {
    return new Promise((resolve) => {
        if (name) {
            const buildComp = childProcess.spawn('open', [
                '-a',
                'yandex',
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
        }
    });
};

module.exports = open;
