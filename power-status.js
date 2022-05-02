

if (ride1PowerOn === true) {
    ride1PowerElement.style.color = "green"
    ride1PowerElement.textContent = "Power Status: on"
}
else {
    ride1PowerElement.style.color = "red"
    ride1PowerElement.textContent = "Power Status: off"
}

if (ride2PowerOn === true) {
    ride2PowerElement.style.color = "green"
    ride2PowerElement.textContent = "Power Status: on"
}
else {
    ride2PowerElement.style.color = "red"
    ride2PowerElement.textContent = "Power Status: off"
}

if (ride3PowerOn === true) {
    ride3PowerElement.style.color = "green"
    ride3PowerElement.textContent = "Power Status: on"
}
else {
    ride3PowerElement.style.color = "red"
    ride3PowerElement.textContent = "Power Status: off"
}

//power is on and all slots work right
if (ride4PowerOn === true &&
    ride4SlotMachine(1) == "star" &&
    ride4SlotMachine(2) == "car" &&
    ride4SlotMachine(3) == "pot of gold" &&
    ride4SlotMachine(4) == "clover" &&
    ride4SlotMachine(5) == "bowling ball" &&
    ride4SlotMachine(6) == "tiger" &&
    ride4SlotMachine(7) == "seven"
) {
    ride4PowerElement.style.color = "green"
    ride4PowerElement.textContent = "Power Status: on"
}
else {
    ride4PowerElement.style.color = "red"
    ride4PowerElement.textContent = "Power Status: off"
}


let spinButton = document.querySelector("#spin")
let slot1Div = document.querySelector("#slot-1")
let slot2Div = document.querySelector("#slot-2")
let slot3Div = document.querySelector("#slot-3")

spinButton.addEventListener("click", function () {
    //if all match up you win
    let slot1 = ride4SlotMachine(3)
    slot1Div.textContent = slot1
    let slot2 = ride4SlotMachine(3)
    slot2Div.textContent = slot1
    let slot3 = ride4SlotMachine(3)
    slot3Div.textContent = slot1
    let didTheyWin = (slot1 === slot2) && (slot2 === slot3)

    if (ride4PowerOn && didTheyWin) {
        setTimeout(() => {
            window.alert("You won the slot machine")
        }, 500)

    }
})

