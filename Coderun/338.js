function sumExcept(a, i, n) {
    if(i<0 || i%1!==0){
        i=0;
    }
    if(n<0 || n%1!==0){
        n=0;
    }
    a = a.filter((elem, current)=>{
        if(current<i || current>i+n-1){
            return elem;
        }
    })

    return a.reduce((a,b)=>{
        if(b%1!==0 || b<0){
            return a
        } else {return a+b}},0)
}

console.log(sumExcept([-1, 1.1, 2, -3.5], 0, 0));
// module.exports = sumExcept