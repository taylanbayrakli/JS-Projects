setInterval(setClock, 1000)

const hourHand = document.querySelector("[data-hour-hand]")
const minuteHand = document.querySelector("[data-minute-hand]")
const secondHand = document.querySelector("[data-second-hand]")


function setClock() {
    const currentDate = new Date();
    const second = currentDate.getSeconds() / 60
    const minute = (second + currentDate.getMinutes()) / 60
    const hour = (minute + currentDate.getHours()) / 12
    setRotation(secondHand, second)
    setRotation(minuteHand, minute)
    setRotation(hourHand, hour)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty("--rotation", rotationRatio * 360)
}

setClock()