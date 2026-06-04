let date = '20'
let nextdate = '25'
let dif = parseInt(nextdate) - parseInt(date)
console.log(dif)
dif.toString()

let day = "monday day"
let test = day + "is Funday day"
console.log(test)
let value = test.indexOf("day", 5)
console.log(value)
let count = 0
let val = test.indexOf("day")
while(val!== -1){
    count ++
    val = test.indexOf("day", val+1)

}
console.log(count)