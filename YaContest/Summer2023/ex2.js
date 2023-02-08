function main(originalFunction, timeInterval, maxRequests) {

}
module.exports = function(originalFunction, timeInterval, maxRequests) {
  let map = new Map();
  return (ip,timestamp,...args)=>{
    if(!map.has(ip)){
      map.set(ip, {attempts: [timestamp], status: "valid"});
      originalFunction(...args);
    } else {
      let data = map.get(ip);
      if(data.status === "banned"){
        //ip is banned
      } else {
        console.log(data.attempts)
        if(maxRequests>data.attempts.length){
          map.set(ip,  {attempts: [...data.attempts, timestamp], status: "valid"});
          originalFunction(...args);
        } else {
          if(timestamp-data.attempts[0]>timeInterval){
            data.attempts.shift();
            data.attempts.push();
            originalFunction(...args);
          } else {
            map.set(ip,  {attempts: [...data.attempts, timestamp], status: "banned"})
            // console.log(`ip ${ip} has banned`)
          }
        }
      }

    }
  }
}

// function sendSMS(phoneNumber, message) {
//     console.log(`Отправлено SMS "${message}"`)
// }
// const protectedFunction = main(sendSMS, 10, 2)
// protectedFunction('128.0.0.1', 0, '+7 000 000 00-00', 'Первое сообщение')
// // console.log('Отправлено SMS "Первое сообщение"')
// protectedFunction('128.0.0.1', 5, '+7 000 000 00-00', 'Второе сообщение')
// // console.log('Отправлено SMS "Второе сообщение"')
// protectedFunction('128.0.0.1', 10, '+7 000 000 00-00', 'Третье сообщение')
// // ничего не произошло, IP 128.0.0.1 отправился в бан
// protectedFunction('128.0.0.1', 15, '+7 000 000 00-00', 'Третье сообщение')
// // ничего не произошло, IP 128.0.0.1 отправился в бан
// protectedFunction('192.168.0.1', 20, '+7 000 000 00-00', 'Вызов 1 со второго IP')
// // console.log('Отправлено SMS "Вызов 1 со второго ip"')
// protectedFunction('192.168.0.1', 25, '+7 000 000 00-00', 'Вызов 2 со второго IP')
// // console.log('Отправлено SMS "Вызов 2 со второго IP"')
// // IP не отправился в бан, потому что было сделано ровно 2 вызова в течение 10 секунд
// protectedFunction('192.168.0.1', 27, '+7 000 000 00-00', 'Вызов 3 со второго IP');
// // console.log('Отправлено SMS "Вызов 3 со второго IP"')