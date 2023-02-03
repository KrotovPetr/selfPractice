const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

//vars
let clicker = 0;
let target = null;

//code
function binarySearch(left,right,massive,target){
    while (left!==right){
        let middle = Math.floor((left + right + 1) / 2)
        if (massive[middle] <= target){
            left = middle
        }
        else{
            right = middle - 1
        }
    }
    return (massive[left] > target) ? -1 : left;
}

function getPrefix(array){
    let sum = [];
    for(let i=0;i<array.length+1;i++){
        sum.push(0);
    }
    for(let i=1 ;i<array.length+1;i++){
        sum[i] = sum[i-1] + array[i-1]
    }
    sum.shift();
    return sum
}

function getResult(bonusArr){
    let arr = getPrefix(bonusArr);
    let copyTar = target;
    let sum =0;
    let daysCount = -1;
    while (sum < target){
        daysCount++;
        let temp_day = binarySearch(0, arr.length - 1, arr, copyTar);
        if (temp_day === -1){
            daysCount = -1;
            break;
        }
        copyTar -= arr[temp_day];
        sum += arr[temp_day];
        if (temp_day === arr.length - 1){
            let newDay =  Math.floor((target - sum) / bonusArr[bonusArr.length -1]);
            sum += newDay * bonusArr[temp_day]
            temp_day += newDay
            copyTar -= newDay * bonusArr[bonusArr.length - 1];
        }
        temp_day++;
        daysCount += temp_day;


    }
    console.log(daysCount);
}

rl.on('line', (line)=>{
    if(clicker%2===0){
        target = Number.parseInt(line.split(" ")[1]);
    } else {
        let arr = line.split(" ");
        arr = arr.map((elem)=>{
            return Number.parseInt(elem);
        })
        getResult(arr);
        rl.close();
    }
    clicker++;
}).on('close',()=>{

})
