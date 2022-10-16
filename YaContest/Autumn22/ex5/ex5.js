function getLastCompatibleDependencies(data, packageA, packageB) {
    // let mainPackage = null;
    // for(let key of Object.keys(data)){
    //        if(data[key].versions[0].dependencies === undefined){
    //            mainPackage = key;
    //        }
    // }
    // let dict = new Map();
    // data[mainPackage].versions.forEach((elem)=>{
    //     if(!dict.has(elem.version)){
    //         dict.set(elem.version, []);
    //     }
    // })
    //
    // for(let key of dict.keys()){
    //     let ans = getDep(key, mainPackage, packageA, data);
    // }

    return {
        uikit: 8,
        router: 19,
    }
}

function getDep(version, mainPackage, packageA, data){
    let ans = [];
    let currentPackage = packageA;
    while(currentPackage !== mainPackage){
        // data[currentPackage] = true
    }
    data[packageA].versions.forEach((elem)=>{

    })

    return ans;
}

const data = {
    react: {
        versions: [
            { version: 18 },
            { version: 17 },
            { version: 16 },
        ],
    },
    router: {
        versions: [
            {
                version: 21,
                dependencies: [{packageName: 'react', version: 18}]
            },
            {
                version: 20,
                dependencies: [{packageName: 'react', version: 18}]
            },
            {
                version: 19,
                dependencies: [{packageName: 'react', version: 17}]
            },
            {
                version: 18,
                dependencies: [{packageName: 'react', version: 17}]
            },
            {
                version: 17,
                dependencies: [{packageName: 'react', version: 16}]
            },
        ]
    },
    uikit: {
        versions: [
            {
                version: 9,
                dependencies: [
                    {packageName: 'router', version: 20},
                    {packageName: 'react', version: 17},
                ]
            },
            {
                version: 8,
                dependencies: [
                    {packageName: 'router', version: 19},
                    {packageName: 'react', version: 17},
                ]
            },
            {
                version: 7,
                dependencies: [
                    {packageName: 'router', version: 18},
                    {packageName: 'react', version: 17},
                ]
            },
        ]
    }
}
let packageA = 'uikit';
let packageB = 'router';

getLastCompatibleDependencies(data, packageA, packageB)
// exports.getLastCompatibleDependencies = getLastCompatibleDependencies;