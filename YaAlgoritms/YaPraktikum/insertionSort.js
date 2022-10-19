function insertionSort(arr) {
    console.log(arr)
    for (let i=1;i<arr.length;i++) {
        let key=arr[i];
        let j=i-1;
        while(j>0 && arr[j]>key){
                arr[j+1] = arr[j];
                arr[j] = t;
                j--;


        }

    }
    return arr;
}

console.log(insertionSort([4,3,2,1,0]))