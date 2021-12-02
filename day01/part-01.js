#!/usr/bin/env node

const rl = require('readline').createInterface({
    input: process.stdin,
    prompt: '',
    terminal: false
});

const countDepthIncreases = (depths) => 
    depths.reduce((prev, _, idx, arr) => arr[idx - 1] < arr[idx] ? prev + 1 : prev, 0);

async function main() {

    const depths = [];
    for await (const line of rl)
        depths.push(+line);

    const increases = countDepthIncreases(depths);
    console.log(increases);
}

if (require.main === module)
    main();
