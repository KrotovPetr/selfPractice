// Логика решения простая, сначала выясняем допустимые границы, затем отсеиваем лишние точки
// Далее составляем поле и начинаем проверку
//
// Тут может быть проблема с ориентацией координат, т.е. явно в задаче они нигде не указаны
// Не указано условие на включение и отбрасывание крайних границ
// Не указано условие на включение или отбрасывание точки центра
function getResult(points, x0, y0, zoom) {
    let area = 100 / zoom; //выясняем размеры
    let xCord = {
        max: Math.min(x0 + area, 100),
        min: Math.max(x0 - area, -100),
    };
    let yCord = {
        max: Math.min(y0 + area, 100),
        min: Math.max(y0 - area, -100),
    }; //считаем данные
    points = points.filter((elem) => {
        //фильтруем
        if (
            xCord.max >= elem.x &&
            xCord.min <= elem.x &&
            yCord.max >= elem.y &&
            yCord.min <= elem.y
        ) {
            return elem;
        }
    });
    console.log(points);
    let field = [];
    for (let i = 0; i < 10; i++) {
        //создаём поле
        field.push([]);
        for (let j = 0; j < 10; j++) {
            field[i].push(0);
        }
    }

    let step = area / 5; //шаг клетки

    points.forEach((elem) => {
        //проверка на поле
        let i = null;
        let j = null;

        // if(elem.x === xCord.min){
        //     i=0;
        // }
        // if(elem.x === xCord.max){
        //     i=9;
        // }
        // if(elem.y === xCord.min){
        //     j=0;
        // }
        // if(elem.y === xCord.max){
        //     j=9;
        // }
        if (elem.x === xCord.max) {
            i = 9;
        } else if (elem.x === xCord.min) {
            i = 0;
        } else {
            if (x0 > elem.x) {
                i = Math.floor(5 + Math.abs(x0 - elem.x) / step);
            } else {
                i = Math.floor(5 - Math.abs(x0 - elem.x) / step);
            }
        }
        if (elem.y === yCord.max) {
            j = 9;
        } else if (elem.y === yCord.min) {
            j = 0;
        } else {
            if (y0 > elem.y) {
                j = Math.floor(5 + Math.abs(y0 - elem.y) / step);
            } else {
                j = Math.floor(5 - Math.abs(y0 - elem.y) / step);
            }
        }

        field[i][j]++;
    });
    let ansArr = [];
    for (let i = 0; i <= 9; i++) {
        // вывод в форме объекта
        for (let j = 0; j <= 9; j++) {
            if (field[i][j] > 0) {
                ansArr.push({ i: i, j: j, count: field[i][j] });
            }
        }
    }
    return ansArr;
}

// let points = [
//     {x:12, y:33},
//     {x:112, y:37},
//     {x:10, y:0},
//     {x:56, y:55},
//     {x:50, y:4},
//     {x:3, y:21},
//     {x:42, y:10},
//     {x:-42, y:-10},
// ]

// let points = [
//     {x:60, y:40},
//     {x:-60, y:40},
//     {x:-60, y:-40},
//     {x:60, y:-40},
//     {x:0, y:0},
// ]

let points = [
    { x: -10, y: -10 },
    { x: -35, y: -5 },
    { x: 0, y: 0 },
    { x: 0.7, y: -5 },
    { x: -59, y: -39 },
    { x: -59, y: -59 },
    { x: 39, y: -59 },
    { x: 39, y: 39 },
    { x: -59, y: 39 },
    { x: -60, y: 40 },
    { x: -60, y: -60 },
];
// let points = [ {x:0, y:0},
//     {x:-49, y:-49},
//     {x:49, y:49},
//     {x:49, y:-49},
//     {x:-49, y:49},
//     {x:-49, y:0},
//     {x:0, y:49},
//     {x:49, y:0},
//     {x:0, y:-49},
//     // {x:49, y:0},
//
// ]

let cord = { x: -10, y: -10 };
let zoom = 2;

console.log(getResult(points, cord.x, cord.y, zoom));
