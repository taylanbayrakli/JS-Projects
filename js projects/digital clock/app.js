function setTime() {
    const dateTime = new Date();
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    const seconds = dateTime.getSeconds();
    const sessions = document.getElementById("session");


    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;

    if (hours >= 12) {
        sessions.innerHTML = "PM"
    } else {
        sessions.innerHTML = "AM"
    }

    if (document.getElementById("second").innerHTML < 10) {
        document.getElementById("second").innerHTML = "0" + seconds
    }

    if (document.getElementById("minute").innerHTML < 10) {
        document.getElementById("minute").innerHTML = "0" + minutes
    }

    if (document.getElementById("hours").innerHTML < 10) {
        document.getElementById("hours").innerHTML = "0" + hours
    }

}

setInterval(setTime, 10);