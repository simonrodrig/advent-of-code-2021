#!/usr/bin/env node

const rl = require('readline').createInterface({
    input: process.stdin,
    prompt: '',
    terminal: false
});

function countWindowIncreases(depths, len=3) {

    let sum       = 0
    let increases = 0;

    for (let i = 0; i < len; i++)
        sum += depths[i];

    for (let i = 1; i < depths.length - 2; i++) {
        const newsum = sum - depths[i-1] + depths[i+2];
        if (newsum > sum) increases++;
        sum = newsum;
    }

    return increases;
}

async function main() {

    const depths = [];
    for await (const line of rl)
        depths.push(+line);

    const increases = countWindowIncreases(depths);
    console.log(increases);
}

if (require.main === module)
    main();
