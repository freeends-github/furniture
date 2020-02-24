
// Set the hours you want at 'a' ideally smaller than number 24
var a = 12;
var countdown = a*60*60;
let count = 0;
// Update the count down every 1 second
  var x = setInterval(function() {

    var distance = (countdown - count) ;
    count++;
     
    // Time calculations for hours, minutes and seconds
    var hours = Math.floor(distance / (60 * 60));
    var minutes = Math.floor((distance % (60 * 60)) / (60));
    var seconds = Math.floor((distance % 60));
  
     if(hours<10){
       hours="0"+hours;
       document.getElementById("hours").innerHTML = hours;
     }
     if(minutes<10){
       minutes = "0"+minutes;
       document.getElementById("minutes").innerHTML = minutes;
     }
     if(seconds<10){
       seconds = "0"+seconds;
       document.getElementById("seconds").innerHTML = seconds;
     }
     document.getElementById("hours").innerHTML = hours;
     document.getElementById("minutes").innerHTML = minutes;
     document.getElementById("seconds").innerHTML = seconds;
    
    // The count down is over 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("hours").innerHTML = "00";
      document.getElementById("minutes").innerHTML = "00";
      document.getElementById("seconds").innerHTML = "00";
    }
  }, 1000);