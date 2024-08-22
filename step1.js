const fs = require('fs');
const process = require('process');

/** Read file at path */
function cat(path) {
    fs.readFile(path, 'utf-8', function(err, data) {
        if (err) {
            console.error(`Error reading ${path}: ${err}`);
            process.exit(1);
        } else {
            console.log(data);
        }
    });
}

// Get the file path from the command-line arguments and call the function
cat(process.argv[2]);


