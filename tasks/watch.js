const colors = require('colors');
const shell = require('shelljs');
const chokidar = require('chokidar');

function watchFiles() {
  shell.echo(colors.bgGreen('\n - Watching Files - \n').black);

  chokidar.watch('./src/scss/')
    .on('all', (event, path) => {
      shell.echo(`${event} ${path} ${colors.green('✓')}`)
    })
    .on('change', () => {
      shell.exec('npm run sass');
    });
};

watchFiles();