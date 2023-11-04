let second = 0;
let minutes = 0;
let hours = 0;

let followSeconds = 0;
let followMinutes = 0;
let followHours = 0;


let timmerTnterval = null;
let timmerStatus = "stopped";

const timer = document.querySelector('.timer');
console.log(timer);

const start = document.querySelector('#start');
console.log(start);
const stop = document.querySelector('#stop');

function stopwatch() {
  second++;

  if (second / 60 === 1) {
    second = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  if(second < 10 )

followSeconds = `0${second}`;
else
followSeconds = second;

  if (minutes < 10)
   followMinutes = `0${minutes}`;
  else 
  followMinutes = minutes;

  if (hours < 10) 
  followHours = `0${hours}`;
  else
   followHours =hours;

  timer.innerText = `${followHours}:${followMinutes}:${followSeconds}`;
}
// window.setInterval(stopwatch, 1000);



function Interval(){

if(timmerStatus === "stopped")
{
timmerTnterval = window.setInterval(stopwatch, 1000);
start.innerText = '⏸';
timmerStatus = "started";
}
else
{
window.clearInterval(timmerTnterval);
start.innerText = '🔼';
timmerStatus = "stopped";
}

}

function reset(){
 second = 0;
 minutes = 0;
 hours = 0;
timer.innerText = '00:00:00';
}

start.addEventListener('click', Interval);
 stop.addEventListener('click', reset);










