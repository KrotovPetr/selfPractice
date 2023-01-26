function sumIntervals(intervals) {
    let minL = null;
    let maxL = null;
    let line = [];
    intervals.forEach((elem)=>{
        for(let i=elem[0];i<elem[1];i++){
            line[i] = true;
        }
        if(elem[0]< minL || minL === null){
            minL = elem[0];
        }
        if(elem[0]> maxL || maxL === null){
            maxL = elem[1];
        }
    })
    let ord = [];
    for(let i = minL; i<maxL; i++){

        if(line[i]===true){

        }
    }

}