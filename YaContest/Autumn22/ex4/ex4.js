function solution(field, moves){
    moves = moves.split(" ");
    moves.forEach((elem)=>{
        switch(elem){
            case"U":
                const rotateBoardU = rotateLeft(field);
                const newBoard1U = compress(rotateBoardU);
                const newBoard2U = merge(newBoard1U);
                const newBoardU = compress(newBoard2U);
                field = rotateRight(newBoardU);
                break;
            case"D":
                const rotateBoard = rotateRight(field);
                const newBoard1D = compress(rotateBoard);
                const newBoard2D = merge(newBoard1D);
                const newBoard = compress(newBoard2D);
                field = rotateLeft(newBoard);
                break;
            case"L":
                const newBoard1L = compress(field);
                const newBoard2L = merge(newBoard1L);
                field = compress(newBoard2L);
                 break;
            case"R":
                const reversedBoardR = reverse(field);
                const newBoard1 = compress(reversedBoardR);
                const newBoard2 = merge(newBoard1);
                const newBoardR = compress(newBoard2)
                field =  reverse(newBoardR);
                break;
            default: throw new Error("TypeError");
        }
    })
    return field;
}


const reverse = (board) => {
    const reverseBoard = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            reverseBoard[i][j] = board[i][board[i].length - 1 - j];
        }
    }
    return reverseBoard;
};

const rotateLeft = (board) => {
    const rotateBoard = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            rotateBoard[i][j] = board[j][board[i].length - 1 - i];
        }
    }
    return rotateBoard;
};
const rotateRight = (board) => {
    const rotateBoard = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            rotateBoard[i][j] = board[board[i].length - 1 - j][i];
        }
    }

    return rotateBoard;
};
const compress = (board) => {
    const newBoard = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    for (let i = 0; i < board.length; i++) {
        let colIndex = 0;
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] !== 0) {
                newBoard[i][colIndex] = board[i][j];
                colIndex++;
            }
        }
    }
    return newBoard;
};

const merge = (board) => {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length - 1; j++) {
            if (board[i][j] !== 0 && board[i][j] === board[i][j + 1]) {
                board[i][j] = board[i][j] * 2;
                board[i][j + 1] = 0;
            }
        }
    }

    return board;
};

module.exports = solution
const field = [
    [0, 2, 4, 8],
    [0, 0, 0, 0],
    [0, 2, 2, 8],
    [0, 2, 2, 2],
];

const moves = "U U U";

console.log(solution(field, moves));