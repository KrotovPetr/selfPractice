module.exports = {
    arr: [],
    minV: -1,
    maxV: -1,
    push(x) {
        this.arr.push(x);
        if (this.minV === -1) {
            this.minV = 0;
        } else {
            if (this.arr[this.minV] > x) {
                this.minV = this.arr.length - 1;
            }
        }
        if (this.maxV === -1) {
            this.maxV = 0;
        } else {
            if (this.arr[this.maxV] < x) {
                this.maxV = this.arr.length - 1;
            }
        }
        // console.log("push "+this.arr+"  max"+this.maxV+"      min"+this.minV )
    },

    shift() {
        if (this.arr.length === 0) {
            return 0;
        }
        let first = this.arr[0];
        this.arr.shift();
        if (this.minV === 0) {
            for (let i = 1; i < this.arr.length; i++) {
                if (this.arr[i] < this.arr[this.minV]) {
                    this.minV = i;
                }
            }
        } else {
            this.minV--;
        }
        if (this.maxV === 0) {
            for (let i = 1; i < this.arr.length; i++) {
                if (this.arr[i] > this.arr[this.maxV]) {
                    this.maxV = i;
                }
            }
        } else {
            this.maxV--;
        }

        // console.log("shift "+this.arr+"  max"+this.maxV+"      min"+this.minV )
        return first;
    },

    min() {
        return this.arr.length > 0 ? this.arr[this.minV] : 0;
    },

    max() {
        return this.arr.length > 0 ? this.arr[this.maxV] : 0;
    },
};
//
// module.exports = {
//     arr: [],
//     push(x){
//         this.arr.push(x)
//         // console.log("push "+this.arr)
//     },
//
//     shift(){
//         if(this.arr.length === 0){
//             return 0
//         }
//         let first = this.arr[0];
//         this.arr.shift();
//         // console.log("shift " + this.arr);
//         return first;
//
//     },
//
//     min(){
//
//         if(this.arr.length ===0){
//             return 0
//         }
//         let min = 0;
//         // console.log("min " + this.arr)
//         for(let i = 1; i<this.arr.length;i++){
//             if(this.arr[i]<this.arr[min]){
//                 min = i;
//             }
//         }
//         // console.log(this.arr[min]);
//         return this.arr[min];
//     },
//
//     max(){
//         // console.log("max " + this.arr)
//
//         if(this.arr.length ===0){
//             return 0
//         }
//         let max = 0;
//         for(let i = 1; i<this.arr.length;i++){
//             if(this.arr[i]>this.arr[max]){
//                 max = i;
//             }
//
//         }
//         // console.log(this.arr[max]);
//         return this.arr[max];
//     }
// }

obj.push(1);
obj.push(-1000);
obj.push(1);
obj.push(5);
obj.push(0);
obj.push(-13);
obj.push(10);
obj.push(-547);
obj.shift();
obj.shift();
console.log(obj.min());
console.log(obj.max());
