function hexStringToRGB(hexString) {
    hexString = hexString.toUpperCase().slice(1, hexString.length).match(/.{1,2}/g);
    hexString = hexString.map((elem, current)=>{
        let ans = 0;
//     console.log(elem[0].toString(10))
        elem.split("").forEach((el, curr)=>{


            switch(el){
                case '0': ans += Math.pow(16,(elem.length- 1-curr)) * Number.parseInt(el); break;
                case '1': ans += Math.pow(16,(elem.length - 1-curr))  * Number.parseInt(el);break;
                case '2': ans += Math.pow(16,(elem.length - 1-curr))  * Number.parseInt(el);break;
                case '3': ans += Math.pow(16,(elem.length - 1-curr))  * Number.parseInt(el);break;
                case '4': ans += Math.pow(16,(elem.length - 1-curr))  * Number.parseInt(el);break;
                case '5': ans += Math.pow(16,(elem.length - 1-curr)) * Number.parseInt(el);break;
                case '6': ans += Math.pow(16,(elem.length - 1-curr))  * Number.parseInt(el);break;
                case '7': ans += Math.pow(16,(elem.length -1- curr))  * Number.parseInt(el);break;
                case '8': ans += Math.pow(16,(elem.length - 1-curr))  * Number.parseInt(el);break;
                case '9': ans += Math.pow(16,(elem.length - 1-curr))  * Number.parseInt(el);break;
                case 'A': ans += Math.pow(16,(elem.length- 1- curr)) * 10;break;
                case 'B': ans += Math.pow(16,(elem.length - 1-curr))  * 11;break;
                case 'C': ans += Math.pow(16,(elem.length - 1-curr))  * 12;break;
                case 'D': ans += Math.pow(16,(elem.length - 1-curr)) * 13;break;
                case 'E': ans += Math.pow(16,(elem.length - 1-curr))  * 14;break;
                case 'F': ans += Math.pow(16,(elem.length - 1-curr))  * 15;break;
                default: throw new Error("Нет такого символа")
            }
        })

        return ans;
    })

    return {r: hexString[0], g: hexString[1], b: hexString[2]}
}