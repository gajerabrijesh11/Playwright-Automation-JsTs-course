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
////////////////////////////////////////////////////////////////////////
// const tools = ["Selenium", "Cypress", "Playwright"];
// for(let i=tools.length-1;i>=0; i--){
//   console.log(tools[i])
// }
////////////////////////////////////////////////////
// Index 0 પર છે: Header
// Index 2 પર છે: Footer
// Index 4 પર છે: MainContent
// const elements = ["Header", "Sidebar", "Footer", "Navbar", "MainContent"];
// for (let i = 0; i< elements.length; i += 2){
//   console.log(`Index ${i}`, elements[i])
// }



///////////////////////////////////////////////////////
// const testResults = ["Passed", "Failed", "Passed", "Failed", "Passed"];
// let count=0;
// for (let i=0; i<testResults.length;i++){
//   if(testResults[i]==="Failed"){
//     count++;
//   }
// }
// console.log(count)
//////////////////////////////////////////////////////////////
// Found Playwright at index: 2
// const tools = ["Selenium", "Cypress", "Playwright", "Appium"];
// for (let i=0; i<tools.length; i++){
//   if (tools[i] === "Playwright"){
//     console.log(`Found ${tools[i]}`, "at index", [i])
//   }
// }
////////////////////////////////////////////////////////////////
// Total Bill: 1000
// const prices = [100, 250, 50, 600];
// let total = 0;
// for(let i=0;i<prices.length;i++){
//   total = total + (prices[i]);
// }
// console.log("Total Bill:", total)
///////////////////////////////////////////////////////
// Row: Data_Row_1
// Row: Data_Row_2
// Row: Data_Row_3
// const tableRows = ["Header_Row", "Data_Row_1", "Data_Row_2", "Data_Row_3"];
// for(let i = 1;i<tableRows.length;i++){
//   console.log(`ROW: ${tableRows[i]}`)
// }
//-----------------------------------------------------
// ટાસ્ક 6: System Health Check (1 to 5)
// કોઈપણ એરે વગર, એક સિમ્પલ for લૂપ ચલાવો જે ૧ થી ૫ સુધીના આંકડા પ્રિન્ટ કરે, પણ આ રીતે:


// Ping Round: 1
// Ping Round: 2
// Ping Round: 3
// Ping Round: 4
// Ping Round: 5

// for(let i=1;i<=5;i++)
// {
//     console.log("Ping Round", i)
// }
//-----------------------------------------------
// ટાસ્ક 7: Reverse Countdown
// એક લૂપ ચલાવો જે ૫ થી શરૂ થઈને ૦ સુધી ઊંધી ચાલે (Reverse).
// જરૂરી આઆઉટપુટ:

// Plaintext
// Timeout in: 5
// Timeout in: 4
// Timeout in: 3
// Timeout in: 2
// Timeout in: 1
// Timeout in: 0
// for (let i=5;i>=0;i--){
//     console.log("Tomeout in:", i)
// }
//----------------------------------------------
// તમારી પાસે એક એરે છે: const dropdownOptions = ["India", "USA", "UK", "Canada"];
// તમારે લૂપ ફેરવીને દરેક ઓપ્શન આ રીતે પ્રિન્ટ કરવાનો છે:

// Plaintext
// Selecting Option: India
// Selecting Option: USA
// Selecting Option: UK
// Selecting Option: Canada
// const dropdownOptions = ["India", "USA", "UK", "Canada"];
// for(let i=0; i<dropdownOptions.length; i++){
//     console.log(`Selecting Option ${dropdownOptions[i]}`)
// }
//--------------------------------------------------
// Double Steps Runner
// તમારી પાસે લિસ્ટ છે: const steps = ["Login", "Step_X", "Search", "Step_Y", "Logout"];
// તમારે ઇન્ડેક્સ ૦ થી શરૂ કરીને એક મૂકીને એક (0, 2, 4) ઇન્ડેક્સ વાળા જ સ્ટેપ્સ પ્રિન્ટ કરવાના છે.
// જરૂરી આઉટપુટ:

// Plaintext
// Executing: Login
// Executing: Search
// Executing: Logout
// const steps = ["Login", "Step_X", "Search", "Step_Y", "Logout"];
// for (let i=0; i<steps.length; i+=2){
// console.log(`Executing: ${steps[i]}`)
// }
//------------------------------------------------
// ટાસ્ક 10: Array Elements Multiplier
// const scores = [10, 20, 30];
// તમારે for લૂપ ફેરવીને એરેની દરેક વેલ્યુને ૨ વડે ગુણીને (Multiply by 2) પ્રિન્ટ કરવાની છે.
// જરૂરી આઉટપુટ:

// Plaintext
// New Value: 20
// New Value: 40
// New Value: 60
// const scores = [10, 20, 30];
// for(let i=0; i<scores.length; i++){
//     console.log(`New Value ${scores[i]*2}`)
// }
//-------------------------------------------------
// ટાસ્ક 11: Broken Links Finder (Most Imp for Automation 🛑)
// તમારી પાસે વેબ પેજના સ્ટેટસ કોડ્સનું લિસ્ટ છે: const responseCodes = [200, 404, 200, 500, 200];
// જાવાસ્ક્રિપ્ટમાં 200 એટલે સક્સેસ લિંક, અને 404 કે 500 એટલે તૂટેલી (Broken) લિંક. તમારે લૂપ ફેરવવાની છે અને અંદર if મૂકીને માત્ર 200 સિવાયના (Error) કોડ્સ જ પ્રિન્ટ કરવાના છે!
// જરૂરી આઉટપુટ:

// Plaintext
// Alert: Broken Link found with code 404
// Alert: Broken Link found with code 500
// const responseCodes = [200, 404, 200, 500, 200];
// for(let i = 0; i<responseCodes.length; i++){
//     if(responseCodes[i] === 404 || responseCodes[i] === 500)
//     {
//         console.log(`Alert: Broken link found with code ${responseCodes[i]}`)
//     }
// }
//---------------------------------------------------
// ટાસ્ક 12: Odd-Even Index Action Splitter
// તમારી પાસે ૪ વેબ લોકેટર્સનું લિસ્ટ છે: const locators = ["Input_1", "Button_1", "Input_2", "Button_2"];
// તમારે for લૂપ ચલાવવાની છે.

// જો ઇન્ડેક્સ બેકી (Even - 0, 2) હોય, તો પ્રિન્ટ કરો: "Type Text into: [લોકેટરનું નામ]"

// જો ઇન્ડેક્સ એકી (Odd - 1, 3) હોય, તો પ્રિન્ટ કરો: "Click on: [લોકેટરનું નામ]"

// જરૂરી આઉટપુટ:

// Plaintext
// Type Text into: Input_1
// Click on: Button_1
// Type Text into: Input_2
// Click on: Button_2
// const locators = ["Input_1", "Button_1", "Input_2", "Button_2"];
// for (let i=0; i<locators.length; i++){
//     if(i % 2 === 0)
//     {
//         console.log(`Type Text into: ${locators[i]}`)
//     }
//     else{
//         console.log(`Click on: ${locators[i]}`)
//     }
// }
//-------------------------------------------------------------------
// ટાસ્ક ૧: for...of (એરે માંથી સીધો ડેટા)
// આ લૂપ એરે (Array) ની અંદર જઈને સીધેસીધી એની મૂળ કિંમત (Value) બહાર કાઢે છે.

// સિનારીયો: તમારી પાસે પ્લેરાઇટમાં ૩ વેબ એલિમેન્ટ્સના નામની એરે છે. તમારે for...of લૂપ વાપરીને નીચે મુજબનું આઉટપુટ લાવવાનું છે.

// JavaScript
// const elements = ["Button", "Input", "Checkbox"];
// જરૂરી આઉટપુટ:

// Plaintext
// Element Type: Button
// Element Type: Input
// Element Type: Checkbox
const elements = ["Button", "Input", "Checkbox"];
for(let element of elements){
    console.log(element)
}

