function getSalary(timesheet, hourRate){
    let workObj = {start: new Date(timesheet[0][1]), end: new Date(timesheet[1][1])}; //время начало и конца
    let workStart = {hours: workObj.start.getHours(), minutes: workObj.start.getMinutes()} //ЧЧ ММ начала
    let workEnd = {hours: workObj.end.getHours(), minutes: workObj.end.getMinutes()}// ЧЧ ММ Конца
    // console.log(workStart)
    let arr = [];
    for(let i=0;i<24;i++){
        if(i>=18 && i<23){
            arr.push(1.5);
        } else if(i>=8 && i<18){
            arr.push(1)
        } else {
            arr.push(2);
        }
    }
    let salary = 0;//зарплата
    salary+= (60 - workStart.minutes)*arr[workStart.hours] / 60 * hourRate; // минуты

    // let hour = workStart.hours+1;
    // while(hour!==workEnd.hours-1){
    //     salary+=arr[hour]*hourRate;
    //     hour++;
    //     if(hour>=24){
    //         hour-=24;
    //     }
    // }
    console.log(salary.toFixed(2));
}

getSalary(   [
    ['login', 1675436400000],
    ['logout', 1675454400000]
], 1000);
