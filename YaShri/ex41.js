function solution(entryPoint) {

    const nodesWithMakeAttribute = entryPoint.querySelectorAll('[x-make]');
    const nodesGroupedMap = new Map();
    let current = 0;
    

    function groupByLevel(nodes) {
        for (const node of nodes) {
            const level = getLevel(node);
            if (!nodesGroupedMap.has(level)) {
                nodesGroupedMap.set(level, []);
            }
            nodesGroupedMap.get(level).push(node);
        }
    }

    function getLevel(node) {
        let level = 0;
        let currentNode = node;
        while (currentNode.parentElement) {
            level++;
            currentNode = currentNode.parentElement;
        }
        return level;
    }

    function sortGroups(groups) {
        for (let group of groups.values()) {
            group = sortGroup(group)
        }
    }

    function sortGroup(group){
        const operationsOrder = ['copy', 'remove', 'removeChildren', 'switch'];
        group.sort((a, b) => {
            const operationA = a.getAttribute('x-make').split(':')[0];
            const operationB = b.getAttribute('x-make').split(':')[0];
            return operationsOrder.indexOf(operationA) - operationsOrder.indexOf(operationB);
        });
        return group;
    }

    function copyNodes(node, count, level) {
        console.log(level)
        const parent = node.parentElement;
        for (let i = 0; i < count; i++) {
            console.log("Копируем ");
            const clone = node.cloneNode(true);
            parent.insertBefore(clone, node.nextElementSibling);
            addNodeToMap(clone, level);
        }
    }

    function addNodeToMap(node, level){
        if(node.children.length>0){
            for(let child of node.children){
                addNodeToMap(child, level+1);
            }
        } else {
            if(node.hasAttribute('x-make')){
                console.log(level)
                let group = nodesGroupedMap.get(level);
                console.log(group)
                group.push(node);
                group = sortGroup(group);
                nodesGroupedMap.set(level, group);
            }
        }
    }

    function removeNodes(node, count, level) {
        let currentNode = node;
        for (let i = 0; i < count; i++) {
            console.log("Удаляем элемент")
            if (!currentNode.nextElementSibling) {
                break;
            }
            removeElementChildFromMap(currentNode.nextElementSibling, level);
            currentNode.parentElement.removeChild(currentNode.nextElementSibling);
        }
    }

    function removeElementChildFromMap(node, level){
        if(node.children.length>0){
            let children = node.children;
            for(let child of children){
                removeElementChildFromMap(child, level + 1)
            }
        } else {
            let group = nodesGroupedMap.get(level);
            let newGroup= group.filter((elem)=>node.getAttribute('id') !== elem.getAttribute('id'));
            nodesGroupedMap.set(level, newGroup);
        }

    }

    function removeChildren(node, count, level) {
        for (let i = 0; i < count; i++) {
            let currentNode = node.firstElementChild;
            console.log("Удаляем потомка ")
            if (!currentNode) {
                break;
            }
            removeElementChildFromMap(currentNode, level+1);
            node.removeChild(currentNode);
        }


    }

    function switchNodes(node, count, level) {

        let currentNode = node;
        let nodeGroup = nodesGroupedMap.get(level);
        let parentElement = currentNode.parentElement;

        let currentIndex = Array.from(parentElement.children).indexOf(currentNode)
        let targetIndex = (currentIndex+count)%(parentElement.children.length);


        let targetNode = parentElement.children[targetIndex];
        let parent = currentNode.parentElement;
        console.log("Меняем местами "+currentIndex+' '+targetIndex)

        parent.insertBefore(currentNode, parent.children[targetIndex]);
        parent.insertBefore(targetNode, parent.children[currentIndex]);

        // return hasXMakeAttribute;
    }

    function executeOperations(groups) {
        for (const [key, group] of groups.entries()) {
            let index = 0;
            while(index!==group.length)
            {
                const [operation, value] = group[index].getAttribute('x-make').split(':');
                group[index].removeAttribute('x-make');
                switch (operation) {
                    case 'copy':
                        copyNodes(group[index], parseInt(value), key);
                        break;
                    case 'remove':
                        removeNodes(group[index], parseInt(value), key);
                        break;
                    case 'removeChildren':
                        removeChildren(group[index], parseInt(value), key);
                        break;
                    case 'switch':
                        switchNodes(group[index], parseInt(value), key);
                        break;
                }

                index++
            }
        }
    }

    for (let node of nodesWithMakeAttribute){
        node.setAttribute("id", String(current));
        current++;
    }
    groupByLevel(Array.from(nodesWithMakeAttribute));
    sortGroups(nodesGroupedMap);
    executeOperations(nodesGroupedMap);
}



solution(document.querySelector('entry'))