const fs = require('fs');
function ex5(content) {
    content = content.split('\n');
    let commonText = [];
    let privateText = [];
    let isTest = false;
    let testText = '';
    for (let i = 0; i < content.length; i++) {
        if (
            content[i].match('it\\(') === null &&
            content[i].match('it.skip') === null
        ) {
            if (isTest) {
                if (content[i].match(/}\);/) !== null) {
                    testText += content[i];
                    privateText.push(testText);
                    commonText.push('privateText');
                    testText = '';
                    isTest = false;
                    continue;
                }
                testText += content[i];
            } else {
                commonText.push(content[i]);
            }
        } else {
            testText += content[i];
            isTest = true;
        }
    }
    let ans = [];
    privateText.forEach((elem) => {
        let copyStr = '';
        let flag = false;
        for (let i = 0; i < commonText.length; i++) {
            if (commonText[i] === 'privateText') {
                if (!flag) {
                    copyStr += elem + '\n';
                    flag = true;
                }
            } else {
                copyStr += commonText[i] + '\n';
            }
        }
        ans.push(copyStr);
    });
    ans.forEach((elem, current) => {
        fs.writeFileSync(`output${current}.txt`, elem);
    });
}

let content = fs.readFileSync('./input.txt', 'utf-8');
ex5(content);
