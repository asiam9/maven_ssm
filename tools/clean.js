import del from 'del';
import fs from './lib/fs';

/**
 * Cleans up the output (build) directory.
 */
async function clean() {
  await del(['.tmp', 'src/main/webapp/public/build/*'], {dot: true});
  await fs.makeDir('src/main/webapp/public/build');
  await fs.makeDir('src/main/webapp/public/build/js');
  await fs.makeDir('src/main/webapp/public/build/css');
  await fs.makeDir('src/main/webapp/public/build/images');
}

export default clean;
