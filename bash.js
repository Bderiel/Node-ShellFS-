// // Output a prompt
// process.stdout.write('prompt > ');

// // The stdin 'data' event fires after a user types in a line
// process.stdin.on('data', function (data) {
//   var cmd = data.toString().trim(); // remove the newline
// if (cmd === 'pwd') process.stdout.write(process.cwd());
// else if (cmd === 'date') process.stdout.write(Date()); // defaults a string and current date
// else process.stderr.write('command not found: ' + cmd);
// process.stdout.write('\nprompt > ');
// });  old verison

// Output a prompt
const commands = require('./cmd')
process.stdout.write('prompt > ');
// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  const cmd = data.toString().trim(); // remove the newline
  if (commands[cmd]) commands[cmd]();
// defaults a string and current date
  else process.stderr.write('command not found: ' + cmd);
  process.stdout.write('\nprompt > ');
});