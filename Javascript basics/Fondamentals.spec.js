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

const locatorDetails = {
  id: "submit-btn",
  timeout: 5000
};

locatorDetails.timeout = 10000; 
console.log(locatorDetails.timeout);