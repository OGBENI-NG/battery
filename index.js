const batteryContainer =document.getElementById("battery-container")
const firstBar = document.getElementById("first-bar")
const secondBar = document.getElementById("second-bar")
const thirdBar = document.getElementById("third-bar")
const forthBar = document.getElementById("forth-bar")

function chargingBar() {
    setTimeout(() => {
        firstBar.style.display = "block"
    }, 1000)

    setTimeout(() => {
        firstBar.style.display = "none"
        secondBar.style.display = "block"
    }, 2000)

    setTimeout(() => {
        firstBar.style.display = "none"
        secondBar.style.display = "none"
        thirdBar.style.display = "block"
        
    }, 3000)

    setTimeout(() => {
        forthBar.style.borderLeftColor = "#11e557"
        forthBar.style.background ="#11e557"
    }, 4000)
    

    setTimeout(() => {
        firstBar.style.display = "none"
        secondBar.style.display = "none"
        thirdBar.style.display = "none"
        firstBar.style.display = "none"
        forthBar.style.borderLeftColor = "#000"
        forthBar.style.background ="none"

    }, 6000);
}
chargingBar()
setInterval(chargingBar, 6000)
