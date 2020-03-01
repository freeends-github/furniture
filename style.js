// Set the hours you want at 'a' ideally smaller than number 24
var a = 15;
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
       hours="0" + hours;
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

  // var search = document.querySelector(".search_div");
  // var input = document.querySelector(".input_div input");
  // var header = document.querySelector(".list_div");

  // search.addEventListener("click",function(){
    
  //   // input.style.display = "block";
  //  if(input.style.width = "1px"){
  //   input.style.width = "300px";
  //   input.style.padding = "10px 20px";
  //   input.style.border = "1px solid gray";
  //   header.style.display = "none";
  //  }
  //  else{
  //    input.style.width = "0";
  //    input.style.padding = "0";
  //    input.style.border = "none";
  //    header.style.display = "flex";
  //  }
  // });


  // var number = document.querySelector(".topright>p");
  // var cart = document.querySelectorAll(".cart-market button");

  // cart.addEventListener("click",function(){
  //   cart.style.display = "none";
  //   console.log("a");
  // });

var email = document.querySelector(".email_div input");
var button = document.querySelector(".email_div button");

button.addEventListener("click",function(){
  email.value = ""
  console.log("button");
});


var menu = document.querySelector(".hamburger_menu");
var menuclass = document.querySelector(".menu_class");
var x = document.querySelector(".menu_class i")

menu.addEventListener("click",function(){
  menuclass.style.display = "block";
});

x.addEventListener("click",function(){
  menuclass.style.display = "none";
});

