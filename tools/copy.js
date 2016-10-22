var path = require('path');
var gaze = require('gaze');
var replace = require('replace');
var Promise = require('bluebird');

async function copy({ watch } = {}) {
    const ncp = Promise.promisify(require('ncp'));

    console.log("---- copy begin ----");

    await Promise.all([
        // todo
        ncp('src/main/webapp/public/static/css', 'src/main/webapp/public/build/css'),
        ncp('src/main/webapp/public/static/images', 'src/main/webapp/public/build/images'),
        ncp('src/main/webapp/public/static/js', 'src/main/webapp/public/build/js'),
        ncp('src/main/webapp/public/static/fonts', 'src/main/webapp/public/build/fonts')
    ]);

    if (watch) {
        const watcher = await new Promise((resolve, reject) => {
            // todo
            gaze('src/content/**/*.*', (err, val) => err ? reject(err) : resolve(val));
        });
        watcher.on('changed', async (file) => {
            // todo
            const relPath = file.substr(path.join(__dirname, '../src/content/').length);
            await ncp(`src/content/${relPath}`, `build/content/${relPath}`);
        });
    }
    console.log("---- copy end ----");
}

module.exports = copy;
