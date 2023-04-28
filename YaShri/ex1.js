function layout(blocks) {
    const layoutResult = [];
    let gridWidth = 0;
    let isRotated = false;
    blocks.forEach(block => {
        if (block.form[0].length > gridWidth) {
            gridWidth = block.form[0].length;
        }
    });
    let gridHeight = blocks.length * gridWidth;
    const grid = new Array(gridWidth * gridHeight).fill(null);
    const rotateMatrix = (matrix) => {
        const rotatedMatrix = [];
        for (let y = 0; y < matrix[0].length; y++) {
            const row = [];
            for (let x = matrix.length - 1; x >= 0; x--) {
                row.push(matrix[x][y]);
            }
            rotatedMatrix.push(row);
        }
        return rotatedMatrix;
    };
    const rotateBlock = (block) => {
        const rotatedForm = rotateMatrix(block.form);
        return { id: block.id, form: rotatedForm };
    };
    const placeBlock = (block, position) => {
        for (let y = 0; y < block.form.length; y++) {
            for (let x = 0; x < block.form[0].length; x++) {
                if (block.form[y][x] === 1) {
                    const index = (position.y + y) * gridWidth + position.x + x;
                    grid[index] = block.id;
                }
            }
        }
        layoutResult.push({ blockId: block.id, position: position.y * gridWidth + position.x, isRotated });
    };
    for (let i = 0; i < blocks.length; i++) {
        let block = blocks[i];
        isRotated = false;
        let position = { x: 0, y: 0 };
        while (true) {
            let found = false;
            for (let y = position.y; y < gridHeight; y++) {
                for (let x = position.x; x < gridWidth; x++) {
                    const index = y * gridWidth + x;
                    if (grid[index] === null) {
                        let canPlace = true;
                        for (let dy = 0; dy < block.form.length; dy++) {
                            for (let dx = 0; dx < block.form[0].length; dx++) {
                                const subIndex = (y + dy) * gridWidth + x + dx;
                                if (grid[subIndex] !== null && block.form[dy][dx] === 1) {
                                    canPlace = false;
                                    break;
                                }
                            }
                            if (!canPlace) {
                                break;
                            }
                        }
                        if (canPlace) {
                            position = { x, y };
                            found = true;
                            break;
                        }
                    }
                }
                if (found) {
                    break;
                }
                position.x = 0;
            }
            if (found) {
                placeBlock(block, position);
                break;
            }
            if (isRotated) {
                break;
            }
            block = rotateBlock(block);
            isRotated = true;
            if (block.form[0].length > gridWidth) {
                gridWidth = block.form[0].length;
                gridHeight = blocks.length * gridWidth;
                grid.fill(null);
            }
        }
    }
    return layoutResult;
}

// module.exports = layout;
const blocks = [
    {
        "id": 738,
        "form": [
            [1, 0],
            [1, 1]
        ]
    },{
    "id": 841,
    "form": [
        [1, 1],
        [0, 1]
    ]
    }
    ];
console.log(layout(blocks))