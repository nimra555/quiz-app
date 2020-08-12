let date = new Date(new Date().setTime(0));
let timer = date.getTime();
let seconds = Math.floor((timer % (100 * 60)) / 1000);
let minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));  


// console.log(date);          // date set to 0
// console.log(timer);    // timer set to 0


setInterval(function () {
  if (seconds < 59) {
    seconds++;
  }else{
    minutes++;
    seconds = 0
  }
  console.log(minutes,seconds);
   if(seconds < 10){
     document.querySelector(".time").innerHTML = `0${minutes}:0${seconds}`;
   }
   else{
     document.querySelector(".time").innerHTML = `0${minutes}:${seconds}`;
   }
}, 1000)








// function timer(){
//     let time = document.querySelector('span');
//     time.innerHTML = setInterval(1000,function(){
//       console.log('timer start')
//     })
//   }