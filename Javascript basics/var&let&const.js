/* var and let both are same variable declaration keywords in JavaScript
we can not re-declare a value to a variable using let but we can reassign the variable with let
we can re-declare and reassign a value to a variable using var
const is a variable declaration keyword which is used to declare a constant variable which can not be 
reassigned or re-declared. It must be initialized at the time of declaration. 
*/


// var a = 10, b = 10
// var c = a + b
// console.log(c)
// console.log(typeof(c))
/*
c = "brijesh gajera"
console.log(c) */
///////////////////////////////////////////////////////////////////////////////////////////////
/*
let a = 10, b = 10
let c = a + b
console.log(c)
c = "brijesh gajera"
console.log(c) */

 /* const c = "brijesh gajera"
c = "brijesh gajera"
 console.log(c) */
/////////////////////////////////////////////////////////////////////////////////////////////
/*
let brijesh = false
console.log(!brijesh)
*/

const testuser = {
    name: "Brijesh Gajera", role: "QA Engineer"
}
testuser.role = "QA Automation Engineer"
console.log(testuser)