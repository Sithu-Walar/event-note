const header = document.querySelector("header h3")
const dates = document.querySelector(".dates")
let date = new Date()
const months = [
    "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]
let month = date.getMonth()
let year = date.getFullYear()
//Days [0 - 6]
//Dates[1 - 31]
function renderCalender(){
    header.innerHTML = `${months[month]} ${year}`;
    
    //first end dates of prev month render

    //currentMonthfirstDay
    const currentMonthFirstDay = new Date(year,month,1).getDay();
    console.log(currentMonthFirstDay)
    //prev month last date
    const prevMonthLastDay = new Date(year,month,0).getDate()
    console.log(prevMonthLastDay)

    for(let i = currentMonthFirstDay ; i>0 ;i--){
        dates.innerHTML += `<li>${prevMonthLastDay - i +1}</li>`
    }


    //second fill current month dates 

    //currentMonthendDate
    const currentMonthEndDate = new Date(year,month +1,0).getDate();
    for(let i=1; i<currentMonthEndDate;i++){
        dates.innerHTML += `<li>${i}</li>`
    }

}
renderCalender()