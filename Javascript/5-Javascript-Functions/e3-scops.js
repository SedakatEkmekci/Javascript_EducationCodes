{
    let a = 2;
    //a can be used here
}
//a cannot be used here

{
    var b = 2;
    //b can be used here
}
//b can be used here

{
    const c = 2;
    //c can be used here
}
// c can be used here

//LOCAL SCOPE
//code here can not use firstName
function testFn1() {
    let firstName = "StartUp";
    //code here can use firstName
}
//code here can not use firstName.

//FUNCTION SCOPE
//code here cannot use firstName
//code here cannot use secondName
function testFn2() {
    let firstName = "StartUp"; //function scoped
    let secondName = "Academy"; //function scoped
    //code here can use firstName
    //code here can use secondName

}
//code here cannot use firstName
//code here cannot use secondName

//GLOBAL SCOPE

let firstName = "Startup"; //Global scoped
//code here can use firstName.

function testFn3() {
    //code here can use firstName.

}