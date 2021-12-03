#!/usr/bin/env node

/**
 * part-01.js
 * Author: Simon Rodriguez
 * Date Created: Dec 02 2021
 */

/* Imports */
const rl = require('readline').createInterface({
    input: process.stdin,
    prompt: '',
    terminal: false
});

/* Functions */
function findMostCommonBit(bits) {
    return bits.reduce((a,b) => a+b) > Math.floor(bits.length/2) ? 1 : 0;
}

/* Main Execution */
async function main() {

    const nums = [];
    let len;
    for await (const line of rl) {
        len = line.split('').length;
        nums.push(parseInt(line, 2));
    }
    console.log(len);

    let mask = 1;
    const final = [];
    const final2 = [];
    for (let offset = 0; offset < len; offset++) {
        
        const bits = [];
        for (const num of nums) {
            const bit = (num & (mask << offset)) >>> offset;
            bits.push(bit);
        }

        const common = findMostCommonBit(bits);
        final.push(common);
        final2.push(common ? 0 : 1)
    }

    const gamma = parseInt(final.reverse().join(''), 2)
    const eps = parseInt(final2.reverse().join(''), 2)
    console.log(gamma, eps, gamma * eps);
    
}

if (require.main === module)
    main();