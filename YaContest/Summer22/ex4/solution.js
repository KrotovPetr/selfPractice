const {getHashByData, fetchData} = require('./utils');

console.clear()



module.exports = async function(urls, retryCount) {
    let ans = []
    const getHashPromise = promisify(getHashByData)

    let test = await getHashPromise("fdsfdsf")

    for (const elem of urls) {
        let count = retryCount;
        let flag = false;
        let result = null;
        while(!flag && count>0){
           result = await fetchData(elem).then((data)=>{
               flag=true
               getHashByData(data.data,(e)=>{
                   console.log("HASH", e, data.hashSum)
               })
               return data;
           }).catch((e)=>{count--;});
           console.log(result)


        }


        // let result2 = await getHashByData(result, fetchData(elem));

    }
    console.log(ans)
}

function promisify(cb){
    return function (str){
        return new Promise((res,_)=> {
            cb(str, (e) => {
                res(e)
            })
        })
    }
}