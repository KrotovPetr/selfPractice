const readline = require('readline');
const rl = readline.createInterface(process.stdin,process.stdout);
let arr = [];
let amount = null;
let clicker = 1;
let votes = null;
let tree = [];

function addToTree(parent, child, mTree){
    if(mTree.number !== parent){
        mTree.children.forEach((elem)=>{
            addToTree(parent, child, elem);
        })
    }
    else {
        mTree.children.push({number: child, parent: parent, vote: Number.parseInt(votes[child-1]), children:[]})
    }
}

let errorPos = null;
let flag = true;
let deletePerson = null;
let maxNum = 0;
function checkErrors(mTree, parentVote){
    if(mTree.number > maxNum){
        maxNum = mTree.number;
    }
    if(mTree.number === 1){
        mTree.children.forEach((elem)=>{
            checkErrors(elem, mTree.vote);
        })
    } else {
        if(mTree.vote !==parentVote){
            if(!errorPos){
                errorPos = {parent: mTree.parent, child: mTree.number};
            } else {
                if(errorPos.parent === mTree.parent){
                    if(deletePerson && deletePerson === mTree.parent){
                        deletePerson = mTree.parent;
                    }
                    if(deletePerson && deletePerson !== mTree.parent){
                        flag = false;
                    }
                } else if(errorPos.child === mTree.parent){
                    if(deletePerson && deletePerson === mTree.parent){
                        deletePerson = mTree.parent;
                    }
                    if(deletePerson && deletePerson !== mTree.parent){
                        flag = false;
                    }
                } else if(errorPos.parent !== mTree.parent && errorPos.child !== mTree.parent){
                    flag = false;
                }

            }
        }
        mTree.children.forEach((elem)=>{
            checkErrors(elem, mTree.vote);
        })
    }

}

function createTree(){
    tree.push({number: 1, parent: null, vote: Number.parseInt(votes[0]), children:[]});
    //cоставляем дерево
    arr.forEach((elem)=>{
        elem = elem.split(" ");
        let parent = Number.parseInt(elem[0]);
        let child = Number.parseInt(elem[1]);
        addToTree(parent, child, tree[0]);
    })
    //ищем брак
    checkErrors(tree[0], null);
    if(!flag){
        console.log("NO")
    } else {
        if(!errorPos){
            console.log("YES");
            console.log(maxNum);
        } else {
            if(deletePerson){
                console.log("YES");
                console.log(maxNum);
            } else {
                console.log("YES");
                console.log(errorPos.child > errorPos.parent ? errorPos.child : errorPos.parent);
            }
        }
    }


}



rl.on('line', (line)=>{
    if(!amount){
        amount = Number.parseInt(line);
    } else {
        if(clicker === amount){
            votes = line.split(" ");
            createTree();
            rl.close();
        }
        if(clicker < amount){
            arr.push(line);
        }
        clicker++;
    }

}).on('close',()=>{

})