// expect ["B","A","B.1","B.2","B.3","A.1","B.4","A.1.1","B.5","B.6"]

const data = {
    "data": [
    {
        "id": "A",
        "priority": 1,
        "children": [
            {
                "id": "A.1",
                "priority": 2,
                "children": [
                    {
                        "id": "A.1.1",
                        "priority": 2,
                        "children": null
                    }
                ]
            }
        ]
    },
    {
        "id": "B",
        "priority": 2,
        "children": [
            {
                "id": "B.1",
                "priority": 3,
                "children": null
            },
            {
                "id": "B.2",
                "priority": 3,
                "children": null
            },
            {
                "id": "B.3",
                "priority": 3,
                "children": null
            },
            {
                "id": "B.4",
                "priority": 1,
                "children": null
            },
            {
                "id": "B.5",
                "priority": 1,
                "children": null
            },
            {
                "id": "B.6",
                "priority": 1,
                "children": null
            }
        ]
    }
],
    "maxTaskCount": 5
}



async function asyncRender(renderItems, n) {

    let map = new Map();

    const sortItems = (arr) => {
        return arr.sort((a,b)=>{
            return a.priority<b.priority ? 1 : a.priority === b.priority ? 0 : -1;
        })
    }

    const sortItemsByLevel = (renderItems, level = 1)=>{
        for(let item of renderItems){
            let currentValue = map.get(level);
            if(!currentValue){
                map.set(level, [item]);
            } else {
                currentValue.push(item)
                map.set(level, currentValue);
            }
            if(item.children){
                sortItemsByLevel(item.children, level+1)
            }
        }
    }


    sortItemsByLevel(renderItems.data);
    for(let [key,value] of map.entries()){
        map.set(key, sortItems(value))
    }

    let sortedItemsArr = [];
    for(let value of map.values()){
       sortedItemsArr = [...sortedItemsArr, ...value];
    }

    let renderedItemsArr = [];
    while(sortedItemsArr>0){
        const batch = sortedItemsArr.splice(0, n);
        const promises = batch.map(item => item.render());
        const results = await Promise.all(promises);
        renderedItemsArr.push(results);
    }
}



asyncRender(data, 5)
    .then((result) => console.log(result));