// Given a time in 12 -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock

// Given input string
// Returns string
function timeConversion(s){
  let hour =''
  let add12 = 0
  let convertNum =''

// determine AM or PM
// if AM remove AM from string
  if(s.includes('AM') && s.substring(0, 1) === '0'){
    return s.substring(0, 8)
  } 
  else if (s.includes('AM') && s.substring(0, 1) === '1' ){
    hour = s.substring(0, 2)
    let sub12 = 12 - hour
    convertNum = sub12.toString()
      return `0${convertNum}${s.substring(2, 8)}`
  }
  else if(s.substring(0,1) === '0'){
    hour = s.substring(1,2)
    add12 = 12 + parseInt(hour)
    
   } else {
     hour = s.substring(0, 2)
     add12 = 12 + parseInt(hour)
   }
   convertNum = add12.toString()
    return `${convertNum}${s.substring(2, 8)}`
  }

let time1 = '11:05:45AM'
let time2 = '04:10:45PM'
let time3 = '11:15:10PM'
let time4 = '12:00:00PM'
let time5 = '12:40:22AM'
console.log(timeConversion(time1))
console.log(timeConversion(time3))
console.log(timeConversion(time5))