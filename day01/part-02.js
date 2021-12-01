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

function countWindowIncreases(depths, len=3) {

    let   sum       = depths[0] + depths[1] + depths[2];
    let   increases = 0;

    for (let i = 1; i < depths.length - 2; i++) {
        const newsum = sum - depths[i-1] + depths[i+2];

        if (newsum > sum)
            increases++;

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
