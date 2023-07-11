let [seconds, minutes, hours] = [0,0,0];
let hrs = document.getElementById('hrs');
let hmins = document.getElementById('min');
let sec = document.getElementById('sec');
let timer = null;
let pause = false;
function display (){
    hrs.textContent = hours<10 ? `0${hours}` : hours;
    hmins.textContent = minutes<10 ? `0${minutes}` : minutes;
    sec.textContent = seconds<10 ? `0${seconds}` : seconds;
}
function stopwatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++
        }
    }
    // console.log(hours,minutes,seconds,);
    display();
}

function startWatch(){
   if(!pause){
    if(timer !== null){
        clearInterval(timer)
    }
    timer = setInterval(stopwatch,1000)
    console.log('Start')
   }
}

function startPause(){
    if(!pause){
        if(timer !== null){
            clearInterval(timer)
        }
        console.log(`Paused Total Time - ${hours} : ${minutes} : ${seconds}`)
    }
   
}

function startReset(){
    if(timer !== null){
        console.log(`Reset Total Time - ${hours} : ${minutes} : ${seconds}`)
        clearInterval(timer)
    }
    [seconds, minutes, hours] = [0,0,0];
    display();
    console.log('reset')
}

