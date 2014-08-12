'use strict';

var spawn = require('child_process').spawn;

var selenium = spawn('node_modules/selenium-standalone/bin/start-selenium');

selenium.on('error', function(error) {
  console.warn('Unable to spawn selenium server:');
  console.warn(error);
});

var intern = spawn('node', ['node_modules/intern/runner.js', 'config=tests/selftest.local.intern.js'], { stdio: 'inherit' });

intern.on('error', function(error) {
  console.warn('Unable to run intern:');
  console.warn(error);
});
