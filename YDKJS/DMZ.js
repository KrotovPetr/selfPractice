// function foo() {
//     console.log( "a:" + a + ", b:" + b );
// }
//
// // наш пустой DMZ-объект
// var ø = Object.create( null );
//
// // распаковываем массив как параметры
// foo.apply( ø, [2, 3] ); // a:2, b:3
//
// // каррируем с помощью `bind(..)`
// var bar = foo.bind( ø, 2 );
// bar( 3 ); // a:2, b:3
function checKJSON() {
    let a = { c: 3 };
    let obj = {
        a: {
            c: a,
            foo: () => {
                console.log(1);
            },
        },
    };
    console.log('c' in obj);
}

checKJSON();
