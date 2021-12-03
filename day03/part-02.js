#!/usr/bin/env node

/**
 * part-02.js
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
    return bits.reduce((a, b) => a + b) >= bits.length / 2 ? 1 : 0;
}

/* Main Execution */
async function main() {

    const nums = [];
    let len;
    for await (const line of rl) {
        len = line.split('').length;
        nums.push(parseInt(line, 2));
    }

    let mask = 1;
    let consider = [...nums];
    for (let offset = len-1; offset >= 0; offset--) {

        if (consider.length == 1) break;

        const bits = [];
        const map  = {};
        for (const num of consider) {
            const bit = (num & (mask << offset)) >>> offset;
            map[num] = bit;
            bits.push(bit);
        }

        const common = findMostCommonBit(bits);
        consider  = consider.filter(val => map[val] == common);

        // console.log(consider.map(e => e.toString(2)));

        // break;
    }

    let consider2 = [...nums];
    for (let offset = len - 1; offset >= 0; offset--) {

        if (consider2.length == 1) break;

        const bits = [];
        const map = {};
        for (const num of consider2) {
            const bit = (num & (mask << offset)) >>> offset;
            map[num] = bit;
            bits.push(bit);
        }

        const common = findMostCommonBit(bits);
        consider2 = consider2.filter(val => map[val] != common);
    }

    const n1 = consider[0];
    const n2 = consider2[0];

    console.log(n1, n2, n1 * n2);
}

if (require.main === module)
    main();