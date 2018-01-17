const opn = require('opn');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

// Get user input
rl.question('Provide a complete path to an excel file\n', (answer) => {
    opn(answer, { app: 'EXCEL', wait: true }).then(function() {
            // Once file is exited this should execute
            console.log('\n');
            console.log('This message will be printed to the console after file was closed');
        }).catch(function(error) { 
            console.log('error ', e);
        });
});

