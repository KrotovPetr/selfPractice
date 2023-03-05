//не очень хорошая версия, решение ниже

// async function getSpinner(request, spinnerOn, spinnerOff) {
//     let result = null;
//     const spinnerTimeout = setTimeout(async ()=>{
//         console.log("On");
//         let flag = false;
//         setTimeout(()=>{console.log("off");},1000)
//
//         // spinnerOn();
//     },250)
//     try{
//         result = await request;
//     } finally {
//         clearTimeout(spinnerTimeout);
//
//         // spinnerOff();
//     }
//     return result;
//
// }
//
// function spinner2(){
//     setTimeout(()=>{console.log("Off")},1000)
// }

//последняя версия с решением
//Алгоритм:
//Ставим таймер, заводим setTimeout, оно уходит по EventLoop в ожидание
//Если запрос выполняется быстрее, то его очищаем
//Иначе срабатывает спиннер
//Единственный нюанс может быть связан с порядком вызова функций On 1 Off - выведет программа
//Т.е. Включим спиннер, получим данные, выключим спиннер
async function getSpinner(request, showSpinner, hideSpinner) {
    const al = request.then(() => {
        isLoading = false;
    });
    let isLoading = true;
    const r = setTimeout(() => {
        if (isLoading) {
            // showSpinner();
            console.log('On!');
            const interval = setInterval(() => {
                if (!isLoading) {
                    // hideSpinner();
                    console.log('Off');
                    clearInterval(interval);
                }
            }, 1000);
        }
    }, 250);
    // clearTimeout(r);
}

getSpinner(
    new Promise((res, rej) => {
        setTimeout(() => {
            res(1);
        }, 300);
    }).then((data) => console.log(data))
);
