module.exports = function (field, moves) {
    let ans = [];
    let size = 3;
    let snakeCord = [
        { x: 0, y: 2 },
        { x: 0, y: 1 },
        { x: 0, y: 0 },
    ];
    field = field.map((elem) => {
        return elem.split('');
    });
    moves = moves.split(' ');
    for (let i = 0; i < moves.length; i += 2) {
        let moveD = { direction: moves[i], amount: moves[i + 1] };
        switch (moveD.direction) {
            case 'R':
                for (let j = 0; j < moveD.amount; j++) {
                    if (field[snakeCord[0].x][snakeCord[0].y + 1] === '-') {
                        snakeCord.unshift({
                            x: snakeCord[0].x,
                            y: snakeCord[0].y + 1,
                        });
                        snakeCord.pop();
                    } else {
                        snakeCord.unshift({
                            x: snakeCord[0].x,
                            y: snakeCord[0].y + 1,
                        });
                        size++;
                    }
                }
                break;
            case 'D':
                for (let j = 0; j < moveD.amount; j++) {
                    if (field[snakeCord[0].x + 1][snakeCord[0].y] === '-') {
                        snakeCord.unshift({
                            x: snakeCord[0].x + 1,
                            y: snakeCord[0].y,
                        });
                        snakeCord.pop();
                    } else {
                        snakeCord.unshift({
                            x: snakeCord[0].x + 1,
                            y: snakeCord[0].y + 1,
                        });
                        size++;
                    }
                }
                break;
            case 'L':
                for (let j = 0; j < moveD.amount; j++) {
                    if (field[snakeCord[0].x][snakeCord[0].y - 1] === '-') {
                        snakeCord.unshift({
                            x: snakeCord[0].x,
                            y: snakeCord[0].y - 1,
                        });
                        snakeCord.pop();
                    } else {
                        snakeCord.unshift({
                            x: snakeCord[0].x + 1,
                            y: snakeCord[0].y - 1,
                        });
                        size++;
                    }
                }
                break;
            case 'U':
                for (let j = 0; j < moveD.amount; j++) {
                    if (field[snakeCord[0].x - 1][snakeCord[0].y] === '-') {
                        snakeCord.unshift({
                            x: snakeCord[0].x - 1,
                            y: snakeCord[0].y,
                        });
                        snakeCord.pop();
                    } else {
                        snakeCord.unshift({
                            x: snakeCord[0].x - 1,
                            y: snakeCord[0].y,
                        });
                        size++;
                    }
                }
                break;
        }
    }
    return [[snakeCord[0].x, snakeCord[0].y], size];
};
const field = [
    'ooo------Y--AND------',
    '-----EXY--A--N---D--E',
    '-X-----Y--A-N---D----',
    '------EXY----A---N---',
    '--DE--X---------YA---',
    '-----ND---EXY--AN--D-',
    '----E-----X-Y----A--N',
    'D-----E-XY---AN---D--',
    'E--------------------',
    '-------X---Y------A-N',
    '----D-EX----------YA-',
    '--N-DEX--Y-A--N-----D',
    'E------X--Y----------',
];

const moves = `R 12 D 2 R 2 U 1 R 2`;

console.log(ex2(field, moves));
