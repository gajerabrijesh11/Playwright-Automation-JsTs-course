// function testScope() {
//   if (true) {
//     var x = "Automation";
//     let y = "Playwright";
//   }
//   console.log(x);
//   console.log(y);
// }
// testScope();
//////////////////////////////////////////
// sayHello();
// var sayHello = function() {
//   console.log("Hello Brijesh!");
// };
////////////////////////////////
// let a = [];
// let b = [];
// console.log(a == b);
// console.log(a === b);
///////////////////////////////

// let a = [1,2]
// let b = a;
// console.log(a===b)

// const userConfig = {
//   env: "QA",
//   browser: "Chromium"
// };

// const adminConfig = userConfig;
// adminConfig.browser = "Firefox";

// console.log("userConfig Browser:", userConfig.browser);
// console.log("adminConfig Browser:", adminConfig.browser);

// var testName = "Login Test";

// function printTest() {
//   console.log("First:", testName);
//   var testName = "Dashboard Test";
//   console.log("Second:", testName);
// }

// printTest();

// const locatorDetails = {
//   id: "submit-btn",
//   timeout: 5000
// };

// locatorDetails.timeout = 10000; 
// console.log(locatorDetails.timeout);
// -----------------------------------------------------------------------------
// const user = { name: "Rahul" }; // આમાં contact ઓબ્જેક્ટ નથી

// // ❌ એરર આવશે (પ્રોગ્રામ ક્રેશ):
//  // console.log(user.contact.phone); 

// //  સેફ રીત (પ્રોગ્રામ ચાલુ રહેશે, આઉટપુટ: undefined):
// console.log(user.contact?.phone);
// - - - - - - -  -- - - - - - - - -  --  - - - - - - - - - - - - - - - - - - - 

// const username = {
//   user: "Hardik"
// }
// console.log("Output 1", username.user)
// console.log("Output 2", username.user.phone?.contact)
// console.log("Output 3", username.user.phone?.contact)
//----------------------------------------------------------------------------
// let user = "Guest_User"
// let user1 = user || "Testuser"
// console.log("Result 1",user1)
// let userbg = ""
// let user2 =  userbg ?? "Testuser"
// console.log("Result 2",user2)
// let userbg1 = "Active"
// let user3 = userbg1 || "Testuser"
// console.log("Result 3", user3)

//--------------------------------------------------------------------------------
// const  data = {
//   datastatus: "No_Data_Found"
// }
// console.log("Final Status:", data.datastatus ?? validstatus?.phone)
//-------------------------------------------------------------------------------
// const role = "admin";

// switch (role) {
//     case "superadmin":
//         console.log("Access: Admin Granted");
        
//     case "admin":
//         console.log("Access: Logged into System");
//         break; 
// }
//------------------------------------------------------------------------------
// const weekend = "Saturday";

// switch (weekend) {
//     case "Sunday":
//         console.log("Result: Weekend Mode On");
//         break;
//     case "Saturday":
//         console.log("Result: Weekend Mode On");
//         break;
//     default:
//         console.log("Status: Invalid Status Code"); 
// }
//----------------------------------------------------------------------------

// const total = 5000
// const paymentmode = "CreditCard"
// if(total>=5000){
//   switch(paymentmode){
//     case "CreditCard":
//     console.log("20% Premium Discount Applied")
//     break;
//     case "UPI":
//     console.log("10% Standard Discount Applied")
//     break;
//     default:
//     console.log("5% Basic Discount Applied")

//   }  
// }
// else{
//   console.log("No Discount Applicable")
// }
