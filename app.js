window.addEventListener("load", countdown);

function countdown() {
    setInterval(counter, 1000)
}

const counter = () => {
    let futureDate = new Date("October 10, 2021 00:00:00");
    let futureDateMiliseconds = futureDate.getTime()
    let currentDate = new Date().getTime();
    let daysRemaining = futureDateMiliseconds - currentDate;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    let daysValue = Math.floor(daysRemaining / day);
    let hoursValue = Math.floor( (daysRemaining % day) / hour);
    let minutesValue = Math.floor((daysRemaining % hour) / minute);
    let secondsValue = Math.floor((daysRemaining % minute) / second);

    document.querySelector("#day").innerHTML = daysValue;
    document.querySelector("#hour").innerHTML = hoursValue;
    document.querySelector("#minute").innerHTML = minutesValue;
    document.querySelector("#seconds").innerHTML = secondsValue;

    if(daysRemaining > 0) {
        document.querySelector("#day").innerHTML = daysValue;
        document.querySelector("#hour").innerHTML = hoursValue;
        document.querySelector("#minute").innerHTML = minutesValue;
        document.querySelector("#seconds").innerHTML = secondsValue;
    } else {
        document.querySelector("#day").innerHTML = 0;
        document.querySelector("#hour").innerHTML = 0;
        document.querySelector("#minute").innerHTML = 0;
        document.querySelector("#seconds").innerHTML = 0;
    }
}