#!/usr/bin/env node

const rl = require('readline').createInterface({
    input: process.stdin,
    prompt: '',
    terminal: false
});

function countDepthIncreases(depths) {

    let numIncreases = 0;
    while (depths.length) {
        const e = depths.pop();

        if (e > depths[depths.length-1])
            numIncreases++;
    } 

    return numIncreases;

}

async function main() {

    const depths = [];
    for await (const line of rl)
        depths.push(+line);

    const increases = countDepthIncreases(depths);
    console.log(increases);
}

if (require.main === module)
    main();
