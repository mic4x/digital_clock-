setInterval(function () { 
    var currentTime = new Date(); //built in java script function Date gives the date 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes(); // 
    var seconds = currentTime.getSeconds(); //
    var period = "AM";
    if (hours >= 12) { //the value of hrs exceeds 12 then set period to PM 
        period = "PM";
    }
    if (hours > 12) {
        hours = hours - 12; //Subtracts 12 if the hour variable is greater than 12 to make sure its a civilian time clock (12 hour clock)
    }

    if (seconds < 10) { // If seconds is less than 10 than add 0 to seconds. 
        seconds = "0" + seconds;
    }
    if (minutes < 10) { // If minutes is less than 10 than add 0 to minutes. 
        minutes - "0" + minutes;
    }

    var clockTime = hours + ":" + minutes + ":" + seconds + " " + period;

    var clock = document.getElementById('clock');
    clock.innerText = clockTime; 
}, 1000);

