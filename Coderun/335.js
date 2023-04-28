module.exports = (str) => {
    if(str.length === 0){
        return false;
    }
    let seven = 0;
    let counter = 0;

    for(let i = 0; i < str.length; i++){
        if(str[i] !== '7' && str[i] !== '1' && (str[i] !== '-' && str[i+1] !== '7') && (str[i] !== '-' && str[i+1] !== '1')){
            return false;
        }

        if(!seven){
            if(str[i] === '7'){
                if(counter % 4 !== 0)
                    return false;
                seven = String(i);
            } else if(str[i] === '-' && str[i+1] === '7'){
                if(counter % 4 !== 0)
                    return false;
                seven = String(i);
                i++;
            } else if(str[i] === '-' && str[i+1] === '1'){
                i++;
                counter++;
            } else{
                counter++;
            }
        }
        else{
            if(str[i] === '7'){
                seven = String(i);
                const check = (counter % 4 === 0) || ((counter - 2) % 4 === 0);
                if(!check)
                    return false;
            }
            else if(str[i] === '-' && str[i+1] === '7' ){
                seven = String(i);
                i++;
                const check = (counter % 4 === 0) || ((counter - 2) % 4 === 0);
                if(!check)
                    return false;
            }
            else if(str[i] === '-' && str[i+1] === '1'){
                i++;
                counter++;
            }
            else{
                counter++;
            }
        }
    }
    if(!seven){
        return counter % 4 === 0;
    }
    else{
        if(counter === 0)
            return true;
        return (counter % 4 === 0) || ((counter - 2) % 4 === 0);
    }
}