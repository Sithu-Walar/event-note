const header = document.querySelector("header h3")
const dates = document.querySelector(".dates")
const navis = document.querySelectorAll("i");
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
    let dateHTML = "";
    //first end dates of prev month render

    //currentMonthfirstDay
    const currentMonthFirstDay = new Date(year,month,1).getDay();
    console.log(currentMonthFirstDay)
    //prev month last date
    const prevMonthLastDay = new Date(year,month,0).getDate()
    console.log(prevMonthLastDay)

    for(let i = currentMonthFirstDay ; i>0 ;i--){
        dateHTML += `<li class = "inactive">${prevMonthLastDay - i +1}</li>`
    }


    //second fill current month dates 

    //currentMonthendDate
    const currentMonthEndDate = new Date(year,month +1,0).getDate();
    for(let i=1; i<=currentMonthEndDate;i++){
        dateHTML += `<li>${i}</li>`
    }

    //nextmonthstartdate
    const curMonthEndDay = new Date(year,month,currentMonthEndDate).getDay()

    for(let i = 1 ; i <= 6-curMonthEndDay; i++){
        dateHTML += `<li class= "inactive">${i}</li>`
    }
    dates.innerHTML = dateHTML;

}
navis.forEach(arr=>{
    arr.addEventListener('click',(e=>{
        arrclassName =e.target.className;
        console.log(arrclassName)
        if(arrclassName==="fa-solid fa-chevron-left"){
            if(month>0){
                month -= 1; 
            }
            else{
                year --;
                month = 11;
            }
            console.log(month)
        }
        else if(arrclassName === "fa-solid fa-chevron-right"){
            if(month<11){
                month += 1;
            }else{
                year ++;
                month = 0;
            }

        }

        date = new Date(year, month, new Date().getDate())
        year = date.getFullYear()
        month = date.getMonth();
        
        renderCalender();

    }))
})



renderCalender()