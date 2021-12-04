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
    let count = 0;
    bits.forEach(bit => bit == '1' ? count++ : count)
    return count >= bits.length/2 ? '1': '0';
}

function flipBits(bits) {
    return bits.map(bit => bit == '1' ? '0' : '1').join('')
}

/* Main Execution */
async function main() {

    const nums = [];
    for await (const line of rl) {
        nums.push(line)
    }

    const len = nums[0].length;
    let gamma = '';

    for (let bit = 0; bit < len; bit++) {
        const bits = nums.map(num => num[bit]);
        gamma += findMostCommonBit(bits);
    }

    const epsilon = flipBits(gamma.split(''));
    const tot = parseInt(gamma, 2) * parseInt(epsilon, 2);
    console.log(gamma, epsilon, tot);
}

if (require.main === module)
    main();