process.DIR = __dirname;
process.PORT = 80;

/**
 * Let's create some sample polls to serve
 */

process.POLL_COL = require('./lib/poll_col');


require('./lib/server');