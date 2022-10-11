const {getHashByData, fetchData} = require('./utils');

module.exports = async function(urls, retryCount) {
    let ans = []
    for (const elem of urls) {
        let count = retryCount;
        let flag = false;
        let result = null;
        while(!flag && count>0){
           result = await fetchData(elem).then((data)=>data).catch((e)=>{count--;});
           console.log(result)


        }


        // let result2 = await getHashByData(result, fetchData(elem));

    }
    console.log(ans)
}
