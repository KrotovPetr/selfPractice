function scramble(str1, str2) {
    let dict1 = new Map();
    for(let i=0;i<str1.length;i++){

        if(dict1.has(str1[i])){
            dict1.set(str1[i], dict1.get(str1[i])+1);
        } else {
            dict1.set(str1[i],1);
        }
    }
    for(let i=0;i<str2.length;i++){
        let dict2 = JSON.parse(JSON.stringify(dict1));
        if(!dict1.has(str2[i]) || dict1.get(str2[i]) === 0){
            return false;
        } else {
            dict1.set(str2[i], dict1.get(str2[i])-1)
        }
    }
    return true;
}


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Fixed Tests', function(){
    it("Tests", () => {
        assert.strictEqual(scramble('rkqodlw','world'),true);
        assert.strictEqual(scramble('cedewaraaossoqqyt','codewars'),true);
        assert.strictEqual(scramble('katas','steak'),false);
        assert.strictEqual(scramble('scriptjavx','javascript'),false);
        assert.strictEqual(scramble('scriptingjava','javascript'),true);
        assert.strictEqual(scramble('scriptsjava','javascripts'),true);
        assert.strictEqual(scramble('javscripts','javascript'),false);
        assert.strictEqual(scramble('jscripts','javascript'),false);
        assert.strictEqual(scramble('aabbcamaomsccdd','commas'),true);
        assert.strictEqual(scramble('commas','commas'),true);
        assert.strictEqual(scramble('sammoc','commas'),true)
    })
});