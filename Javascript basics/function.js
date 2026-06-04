/*
function add(a,b)
{
    return a+b
}
let sum=(2+5)
console.log(sum)
*/
/*
let sum = (a,b)=> a+b
console.log(sum(5,5))
*/
/* function is the block of code which wrapped in a one packet with good name and return desired output.
2 way to decare funtion :
  function functionname()
  {
  }
print result

declare variable = (pass the variable)=> opration
print result with variable value
*/
/*
function genrateEmail(firstname, lastname)
{
    return (firstname + "." + lastname + "@testautomation.com")
}
console.log(genrateEmail("Gajera","Brijesh"))
*/
/*
let genrateEmail =(firstname, lastname) => firstname + "." + lastname + "@testautomation.com"
console.log(genrateEmail("Gajera","Brijesh"))
*/
/*
function checkBudget(price)
{
    if(price<500)
    {
        return "Within Budget"
    }
    else{
        return "Out of Budget"
    }
}
console.log(checkBudget(200))
*/
/*
let checkBudget = (price) => 
{
    if(price<500)
    {
        return "Within Budget"
    }
    else{
        return "Out of Budget"
    }
    
}
console.log(checkBudget(200))
*/

function getTestStatusMessage(status)
{
    if(status == "pass")
    {
        return "✔ Test Case Passed Successfully!"
    }
    else  if(status == "fail")
        {
        return "❌ Test Case Failed. Need Debugging."
    }
    
    else
    {
        return "⚪ Test Status Unknown or Skipped."
    }
        
}
console.log(getTestStatusMessage("skip"))