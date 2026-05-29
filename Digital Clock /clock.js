const timeElement =document.getElementById("time");
const dateElement =document.getElementById("date");
let ishours24 = true;
const toggleBtn=document.getElementById("toggle-btn");

function updateTime (){ 
    const now= new Date;

let hours=now.getHours()
const minutes=now.getMinutes()
const seconds=now.getSeconds()

    const date=now.getDate ()
    const month=now.getMonth()+1
    const year=now.getFullYear()

  const formattedTime =  
  String(hours).padStart(2,"0")+":" +
 String (minutes).padStart(2,"0") + ":" +
 String (seconds).padStart(2,"0");


 const displayDate=
String (date).padStart(2,"0") + "/"+
String(month).padStart(2,"0")+"/"+ year;


 let ampm;
 if (!ishours24){
    ampm = hours >=12 ? "PM" : "AM";
    hours= hours % 12 || 12;
}

const displayTime= ishours24 ? formattedTime : formattedTime + " " + ampm;
timeElement.textContent= displayTime;
dateElement.textContent = displayDate;

}

toggleBtn.addEventListener("click",
    function(event){
        ishours24=!ishours24
        if (ishours24){
            toggleBtn.textContent="Switch to 12 hours format";
        } else {
            toggleBtn.textContent="Switch to 24 hours format";
        }
        updateTime();
    }
)
updateTime();

setInterval(updateTime,1000);




