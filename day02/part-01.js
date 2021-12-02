#!/usr/bin/env node

/**
 * part-01.js
 * Author: Simon Rodriguez
 * Date Created: Dec 01 2021
 */

/* Imports */
const rl = require('readline').createInterface({
    input: process.stdin,
    terminal: false,
    prompt: ''
});

/* Main Execution */
function main() {

    let horiz = 0, depth = 0;
    rl.on('line', line => {

        const [dir, amt] = line.split(' ');

        switch (dir) {
            case 'forward':
                horiz += +amt;
                break;

            case 'up':
                depth -= +amt;
                break;
            
            case 'down':
                depth += +amt;
                break;
        }
    });

    rl.on('close', () => {
        console.log(horiz, depth, horiz*depth);
    })
    
}

if (require.main === module)
    main();