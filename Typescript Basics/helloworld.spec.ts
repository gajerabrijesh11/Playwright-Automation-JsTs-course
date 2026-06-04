/*
let test = "hello world"
console.log(test)

const test1 = "hello world"
console.log(test)
*/
/*
Ek TypeScript function lakho je input ma aa string array accept kare.
Loop no use kari ne dar ek status check karo.
If-Else no use kari ne count karo k ketla test cases PASS thaya ane ketla FAIL thaya.
Final Decision Rule: Jo FAIL thayela test cases no count 2 ke enathi vadhu hoy, 
to pipeline reject thavi joiye ane console par print thavu joiye: "❌ Deployment Blocked: Suite has critical failures!". 
Bija badha case ma print thavu joiye: "✅ Deployment Passed!".
const testResults = ["PASS", "FAIL", "SKIP", "FAIL", "PASS", "PASS"]; */


import {test} from '@playwright/test'
/*
test ('testresultanalysis', async ()=>
     {
        const testResults: string[] = ["PASS", "PASS", "SKIP", "FAIL", "PASS", "PASS"];
    let passcount = 0
    let failcount = 0
    for(const status of testResults){
        if (status === "PASS")
        {
            passcount++
        }else if (status === "FAIL"){
            failcount++
        }
    }
    console.log(`Passcount: ${passcount}`);
    console.log(`Failcount: ${failcount}`);
    if(failcount >= 2){
        console.log("CI failed")
    }
    else{
        console.log("CI passed")
    }

}  );

*/

// Marks: [50, 55, 65, 25]
/*
test('Sum of marks', async()=>
{
const Marks: number[] = [50, 55, 65, 25]
console.log(Marks.reduce((sum, total)=> sum + total,0))
})
*/

// find second highest No.
/*
test ('Sec high No', async () =>
{
    const scores: number[] = [45, 89, 12, 99, 76, 99, 88];
    const duplicate: number[] = [...new Set(scores)]
    duplicate.sort((a: number, b: number)=> b-a)
    const sechighno: number = duplicate[1]
    console.log(sechighno)
})
    */

// function to find highest number in an array 

function findhighestnumber(num: number[]): number {
    if (num.length === 0) {
        console.log("Array is empty");
   }
   return Math.max(...num);
}
const arr = [45, 89, 12, 99, 76, 99, 88];
console.log(findhighestnumber(arr))


/*
// 1. Define the structure of the expected data
interface User {
  id: number;
  name: string;
  email: string;
}

// 2. Use the function with the User interface
async function getUserData() {
  const url = 'https://jsonplaceholder.typicode.com/users/1';

  try {
    // We pass <User> so TypeScript knows exactly what 'user' looks like
    const user = await fetchData<User>(url);
    
    console.log(user.name);  // Safe! TypeScript knows 'name' exists.
    // console.log(user.age); // Error! TypeScript will warn you 'age' doesn't exist on User.
  } catch (error) {
    console.error("Failed to fetch user:", error);
  }
}

// Generic helper to fetch and parse JSON as type T
async function fetchData<T>(url: string): Promise<T> {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Network response was not ok: ${res.status} ${res.statusText}`);
    }
    return (await res.json()) as T;
}
    */
/*
let num = [45,56,465465,23123,789,231654,8489]
console.log(Math.max(...num))
*/