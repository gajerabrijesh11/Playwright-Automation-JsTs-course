/*
const i = 10
if(i > 5)
{
    console.log((i) + " is greater than 5")

}
else{
    console.log((i) + " is less than 5")
}
*/
/*
let i = 0
while(i < 5)
{
    i++
    console.log(i)

}
    */
// Do while loop
/*
let i = 0
do {
    i++
    
}while(i > 5)
{
    console.log(i)
} */
/////////////////////////////////////////////
//Pass fail calculator
/*
let marks = 40
if (marks >= 35) {
    console.log("Passed!!")
}
else {
    console.log("Failed")
}
    */

//////////////////////////////////////////////
// Traffic Light System
/*
let light = "Green"
if (light === "Red") {
    console.log("Stop")
}
else if (light === "Yellow") {
    console.log("Get Ready")
}
else if (light === "Green") {
    console.log("Go")
}
else {
    console.log("Invalid Light Color")
}
    */
//////////////////////////////////////////////
// 1 to 10 number in reverse order
/*
let i = 10
while (i >= 1) {
    console.log(i)
    i--
} 
    */
//////////////////////////////////////////////
// table 0f 5
/*
  let i = 1
  while (i <= 10) {
      console.log("5 x " + i + " = " + (5 * i))
      i++
  }
      */
//////////////////////////////////////////////
// odd even number cheker
/*
let i = 1
while (i <= 20) {
    if (i % 2 === 0) {
        console.log(i + " is even")
    }
    else {
        console.log(i + " is odd")
    }
    i++
}
*/
////////////////////////////////////////////////

// print fizz buzz fizzbuzz
/*
let i = 1
while (i <=15 ){
    if (i % 3 === 0 && i % 5 === 0){ 
        console.log("BuzzFizz")
    } else if (i % 3 === 0){
        console.log("Fizz")
    }
    else if (i % 5 === 0)
    {
        console.log("Buzz")
    }
    else{
        console.log(i)
    }
    i++
}
    */
/////////////////////////////////
// picking numbers from array comparing with condition
/*
let scores = [45, 12, 89, 32, 56, 78, 22, 95, 10];
let totalCount = 0;

for (let i = 0; i < scores.length; i++) {
    let currentNumber = scores[i];
    if (currentNumber > 50) {
        console.log(currentNumber);
        totalCount++;
    }
}
console.log("Total numbers above 50: " + totalCount);
    */
//////////////////////////////////////////////////////////////////
/* if we know how many times we want to execute the loop then use for loop but 
if you want to repeat loop based upon some condion evaluation then use while loop */

/*
for (let i = 1; i <=10; i++)
{
console.log(i)
}
*/
/*
let required = true
while(required){
    console.log(required)
    required = false
}
    */
/*
let n = 0
for (let i = 1; i <= 100; i++) {
 if (i % 2 == 0 && i % 5 == 0) {
     n++
     console.log(i)
 }
 if (n == 3) {
     break
 }

} */

/*
 function findfactorial(number) {

    let result = 1;
    for (let i = 2; i <= number; i++) {
        result = result * i;
    }
    return result;
}
let num = 5;
console.log(num + " no factorial " + findfactorial(num) + " thase.");
*/