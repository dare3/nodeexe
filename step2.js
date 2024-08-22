const fs = require('fs');
const process = require('process');
const axios = require('axios');

/** Read file at path */
function cat(path) {
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err) {
            console.error(`Error reading ${path}:\n  ${err}`);
            process.exit(1);
        } else {
            console.log(data);
        }
    });
}

/** Fetch content from a URL */
async function webCat(url) {
    try {
        const response = await axios.get(url);
        console.log(response.data);  // Only print the response data
    } catch (error) {
        console.error(`Error fetching ${url}:\n  ${error}`);
        process.exit(1);
    }
}

// Get the input from the command-line arguments and call the appropriate function
const path = process.argv[2];
if (!path) {
    console.error('Error: No input provided.');
    process.exit(1);
}

if (path.startsWith('http://') || path.startsWith('https://')) {
    webCat(path);
} else {
    cat(path);
}
