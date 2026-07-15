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
//--------------------------------------------------------------------------------------
// 🎯 ટાસ્ક 1: Test Status Logger
// પ્લેરાઇટમાં ટેસ્ટ રન થયા પછી તમને સ્ટેટસ કોડ મળે છે.

// જો સ્ટેટસ "PASS" હોય, તો પ્રિન્ટ કરો: "Test Executed Successfully".

// જો સ્ટેટસ "FAIL" હોય, તો પ્રિન્ટ કરો: "Test Failed - Screenshot Captured".

// જો સ્ટેટસ "SKIP" હોય, તો પ્રિન્ટ કરો: "Test Skipped".

// આ સિવાય કંઈ પણ હોય (Default), તો પ્રિન્ટ કરો: "Unknown Status".

// let status = "PASS"
// if (status === "PASS") {
//     console.log("Test Executed Successfully.")
// } 
// else if(status === "FAIL") {
//     console.log("Test Failed - Screenshot Captured.")
// }
// else if(status === "SKIP") {
//     console.log("Test Skipped")
// } else{
//     console.log("Unknown Status")
// }
//----------------------------------------------------------------------
// ટાસ્ક 2: Element Visibility Check
// વેબ એલિમેન્ટ્સ હેન્ડલ કરવા માટે આ બહુ જરૂરી છે. બે વેરીએબલ્સ લો: const isVisible = true; અને const isEnabled = false;.

// જો એલિમેન્ટ વિઝિબલ (visible) હોય અને ઇનેબલ (enabled) પણ હોય, તો જ પ્રિન્ટ કરો: "Clicking the button".

// જો વિઝિબલ હોય પણ ઇનેબલ ના હોય, તો પ્રિન્ટ કરો: "Button is disabled".

// જો વિઝિબલ જ ના હોય, તો પ્રિન્ટ કરો: "Element not found on DOM".

// const isVisible = false;
// const isEnabled = false;
// if (isVisible === true && isEnabled === true){
//     console.log("Clicking the button")
// }
// else if (isVisible === true && isEnabled === false){
//     console.log("Button is disabled")
// }
// else {
//     console.log("Element not found on DOM")
// }
//------------------------------------------------------------------------------------------
// ટાસ્ક 3: Browser Performance Profiler
// પેજ લોડ થવાનો ટાઇમ મિલીસેકન્ડમાં (ms) માપવાનો છે. const loadTime = 2500;

// જો loadTime 1000ms થી ઓછો હોય -> "Fast Performance"

// જો 1000ms થી 3000ms ની વચ્ચે હોય -> "Average Performance"

// જો 3000ms થી વધારે હોય -> "Slow Performance - Optimization Required"
// const loadtime = 2999;
// if (loadtime <= 1000){
//     console.log("Fast Performance")
// }
// else if (loadtime >= 1000 && loadtime <= 3000){
//     console.log("Average Performance")
// } else {
//     console.log("Slow Performance")
// }
//-------------------------------------------------------------------------------------------------
// ઓટોમેશનમાં જો ટેસ્ટ ફેલ થાય તો આપણે રીટ્રાય (Retry) કરીએ છીએ. const maxRetries = 3; અને const currentRetry = 3;

// જો currentRetry ની કિંમત maxRetries જેટલી કે તેનાથી વધી જાય, તો પ્રિન્ટ કરો: "Max Retries Reached! Stopping the test."

// જો હજી ઓછી હોય, તો પ્રિન્ટ કરો: "Retrying the test again..."
// const maxretry = 3;
// const currentretry = 3;
// if(maxretry === currentretry){
//     console.log("Max Retries Reached! Stopping the test.")
// } else {
//     console.log("Retrying the test again...")
// }
//---------------------------------------------------------------------------------------------------
// ટાસ્ક 5: User Role Authorization
// const userRole = "Editor";

// જો રોલ "Admin" અથવા "SuperAdmin" હોય -> "Full Access Granted to Settings"

// જો રોલ "Editor" હોય -> "Limited Access: Can edit content only"

// બીજા કોઈ પણ રોલ માટે -> "Access Denied"
const userrole = "test";
if (userrole === "Admin" || userrole === "SuperAdmin"){
    console.log("Full Access")
} else if (userrole === "Editor"){
    console.log("limitest access")
} else {
    console.log("access denied")
}