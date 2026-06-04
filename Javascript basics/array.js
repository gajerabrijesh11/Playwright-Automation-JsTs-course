/* Array is a collections of elements. */
// we can store multiple values in a single variable using arrays. like marks = [a,b,c,...]
// we can access the elements of an array using their index. the index starts from 0.
// we can modify the elements of an array by assigning a new value to the index. like marks[2] = 11
// we can also add new elements to the end of the array using the push() method. like marks.push(110)
// we can remove the last element of the array using the pop() method. like marks.pop()
// we can get the length of the array using the length property. like marks.length  
/*
var marks = [10,20,30,40,50,60,70,80,90,100]
console.log(marks[5] + marks[7])
marks[2] = 11
console.log(marks)
marks.push(110)
console.log(marks)
marks.pop()
console.log(marks)
console.log(marks.length)
*/
/*
let num = [45,56,465465,23123,789,231654,8489]
console.log(Math.max(...num))
*/
/*
let num = [45,56,465465,23123,789,231654,8489]
console.log(num.includes(45))
*/
/*
let num = [45,56,465465,23123,789,231654,8489]
let sum = 0
for(i=0; i<num.length; i++)
{
    sum = sum + num[i]
}
console.log(sum)
*/
/*
let num = [45,56,465465,23123,789,231654,8489]
let sum = num.reduce((sum, total) => sum + total, 0)
console.log(sum)
*/
/*
let num = [45,56,465465,23123,789,231654,8489]
let even = num.filter((test) => test%2 == 0)
console.log(even)
*/
/*
let num = [45,56,465465,23123,789,231654,8489]
let even = []
for(i=0; i<num.length; i++){
    if(num[i]%2 == 0){
        even.push(num[i])
    }
}
console.log(even)
*/
// Map method provide maping of one value to new value.
/*
let num = [10,20,30,40,50]
let doubled = num.map((value) => value * 2)
console.log(doubled)
*/

// create a array with even numbers of score and multiply  each value with 2 and sum that array and print the result
/*
let score = [10,20,30,40,50]
console.log(score.filter((even)=>even%2 == 0).map((mul)=> mul*2).reduce((sum, total)=> sum + total,0))
*/

//Sorting array =>  sort() method is used to sort the string value only. 
// To sort intiger value we have to provide a compare function to the sort() method. like num.sort((a,b) => a-b) for 
// ascending order and num.sort((a,b) => b-a) for descending order.

    let fruits = ["Banana", "Apple", "Mango", "Cherry", "Grapes"]
    fruits.sort() //it will sort the array in alphabetical order
    console.log(fruits)
    fruits.reverse() // it will reverse the order of the array
    console.log(fruits)

    let num = [10,003,20,25,35,55,]
    num.sort((a,b) => a-b) // it will sort the array in ascending order
    console.log(num)
    num.sort((a,b) => b-a) // it will sort the array in descending order
    console.log(num)
    