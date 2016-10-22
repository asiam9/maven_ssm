import run from './run';
import clean from './clean';
import copy from './copy';
import bundle from './bundle';

/**
 * Compiles the project from source files into a distributable
 * format and copies it to the output (build) folder.
 */
async function build() {
  await run(clean);//await会阻塞后面的执行,直到run(clean)执行完成以后,再执行run(copy)
  await run(copy);
  await run(bundle);
}
console.log('build sucess');

export default build;
