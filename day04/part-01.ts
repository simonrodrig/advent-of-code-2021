#!/usr/bin/env ts-node

/* Imports */
import * as readline from 'readline';
import Bingo from './Bingo';

/* Globals */
const rl = readline.createInterface({
    input: process.stdin,
    prompt: '',
    terminal: false
});

const it = rl[Symbol.asyncIterator]();

/* Main Execution */
async function main() {

    const draws = (await it.next()).value.split(',')
    await it.next();

    const bingos: Bingo[] = [];

    let currBoard = [];
    for await (const l of rl) {        
        if (l == '') {
            bingos.push(new Bingo(currBoard))
            currBoard = [];
        } else {
            currBoard.push(
                l.trim().split(' ').filter(e => e != '').map(e => e.trim())
            );
        }
    }

    if (currBoard.length) bingos.push(new Bingo(currBoard))


    for (const draw of draws) {
        for (const board of bingos) {
            let b;
            board.callDraw(draw);

            if (b = board.hasBingo()) {
                const sum = board.sumUnmarked();

                console.log(
                    'Bingo!',
                    'Winning Line: ', b,
                    'Winning Draw: ', draw,
                    'Sum: ', sum,
                    'Score: ', sum * (+draw) 
                )
                return;
            }
        }
    }
}

if (require.main === module)
    main()