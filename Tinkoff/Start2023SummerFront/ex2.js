const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

let inputLine = '';

function getMinutesForCheckingCode() {
    const [juniors, seniors, necSeniors] = inputLine
        .split(' ')
        .map((elem) => Number.parseInt(elem));
    let minutes = 0;
    let taskField = [];

    for (let i = 0; i < juniors; i++) {
        taskField.push({ junior: i, total: 0 });
    }

    let indexStep = 0;

    while (taskField.length >= seniors) {
        for (let i = 0; i < seniors; i++) {
            if (indexStep + i >= taskField.length) {
                taskField[(indexStep + i) % taskField.length].total++;
            } else {
                taskField[indexStep + i].total++;
            }
        }

        taskField = taskField.filter((elem) => elem.total < necSeniors);

        if (indexStep + 1 >= taskField.length) {
            indexStep = 0;
        } else {
            indexStep++;
        }
        minutes++;
    }
    if (taskField.length > 0) {
        minutes++;
    }

    console.log(minutes);
}

rl.on('line', (line) => {
    inputLine = line;
    rl.close();
}).on('close', () => {
    getMinutesForCheckingCode();
});
