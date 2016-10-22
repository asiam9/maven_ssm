import run from './run';
import clean from './clean';
import copy from './copy';
import bundle from './bundle';
import compress from './compress';
import changeHash from './change-hash';

/**
 * Compiles the project from source files into a distributable
 * format and copies it to the output (build) folder.
 */
async function build() {
  await run(clean);//await会阻塞后面的执行,直到run(clean)执行完成以后,再执行run(copy)
  await run(copy);
  await run(bundle);
  await run(compress);
  await run(changeHash);
}
console.log('build sucess');

export default build;
