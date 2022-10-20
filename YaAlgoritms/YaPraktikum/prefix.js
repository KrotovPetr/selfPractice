// Рассмотрим функцию, которая принимает на вход массив целых чисел. Она находит префикс с максимальной суммой и возвращает одно число — сумму чисел этого префикса.
    function prefix(arr){
        if(arr.length === 0){
            return 0;
        }
        let prefArr = [0];
        prefArr = prefArr.concat(...arr)
        for(let i=0; i<arr.length;i++){
            prefArr[i+1] = arr[i]+prefArr[i];
        }
        let max = Math.max(...(prefArr.slice(0,prefArr.length)));

        return max;
    }

    console.log(prefix([]) === 0);
    console.log(prefix([2, 0, 2, 1]) === 5);
    console.log(prefix([2, 0, -3, 1]) === 2);
    console.log(prefix([5, 0, 0, 0])===5) ;
    console.log(prefix([0, 0, 0, 0])===0);
    console.log(prefix([0, 0, 0, 5])===5);