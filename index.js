
function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var second=date.getSeconds();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ':' +second+' '+ ampm;
    const time=document.getElementById("today-time");
    time.innerHTML=`${strTime}`
    if(hours>=1 && hours<=12 && ampm=="am"){
       document.getElementById("massege").innerHTML="Good Morning ";
     }
    else if(((hours===12 && minutes>1)||(hours<=4)) && ampm=="pm"){
        document.getElementById("massege").innerHTML="Good Afternoon ";
    }
    else if(hours>=4 && hours<=8 && ampm=="pm"){
        document.getElementById("massege").innerHTML="Good Evening ";
    }
    else if(hours>=8 && hours<=12 && ampm=="pm"){
        document.getElementById("massege").innerHTML="Good Night ";
        
  }else{
    console.log("hi");
  }
}
  
  formatAMPM(new Date());
const d = new Date();

const days=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
month=d.getMonth();
day=days[d.getDay()];
year=d.getFullYear();

const dat=document.getElementById("today-date");
dat.innerHTML=`${day}-${month+1}-${year}`;


