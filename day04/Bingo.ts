class Bingo {
    board: string[][]
    marks: boolean[][]

    constructor(board: string[][]) {
        this.board = board;

        // Init the marks for numbers we have seen
        this.marks = new Array(5);
        for (let i = 0; i < 5; i++) {
            this.marks[i] = new Array(5);
            this.marks[i].fill(false);
        }

    }

    callDraw(draw: string) {
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[i].length; j++) {
                if (this.board[i][j] == draw) {
                    this.marks[i][j] = true;

                }
            }
        }
    }

    transpose<Type>(b: Type[][]): Type[][] {
        return b[0].map((_, i) => b.map(x => x[i]));
    }

    hasBingo(): false | string[] {
        // Every Row
        for (const [idx, row] of this.marks.entries()) {
            if (row.every(mark => mark == true))
                return this.board[idx];
        }

        // Every Column
        for (const [idx, col] of this.transpose(this.marks).entries()) {
            if (col.every(mark => mark == true))
                return this.transpose(this.board)[idx];
        }

        // No Bingo
        return false;
    }

    sumUnmarked(): number {

        const unmarked = [...this.board];
        for (let [irow, row] of unmarked.entries())
            unmarked[irow] = row.filter((elem, icol) => !this.marks[irow][icol]);        

        // console.log(unmarked);
        

        let sum = 0;
        for (const row of unmarked) {
            if (!row.length) continue;
            sum += row.map(e => +e).reduce((a,b) => a+b);
        }
    
        return sum;
    }
}

export default Bingo;