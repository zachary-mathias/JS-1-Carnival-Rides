

if(ride1PowerOn === true){
    ride1PowerElement.style.color = "green"
    ride1PowerElement.textContent = "Power Status: on"
}
else {
    ride1PowerElement.style.color = "red"
    ride1PowerElement.textContent = "Power Status: off"
}

if(ride2PowerOn === true){
    ride2PowerElement.style.color = "green"
    ride2PowerElement.textContent = "Power Status: on"
}
else {
    ride2PowerElement.style.color = "red"
    ride2PowerElement.textContent = "Power Status: off"
}

if(ride3PowerOn === true){
    ride3PowerElement.style.color = "green"
    ride3PowerElement.textContent = "Power Status: on"
}
else {
    ride3PowerElement.style.color = "red"
    ride3PowerElement.textContent = "Power Status: off"
}

if(ride4PowerOn === true){
    ride4PowerElement.style.color = "green"
    ride4PowerElement.textContent = "Power Status: on"
}
else {
    ride4PowerElement.style.color = "red"
    ride4PowerElement.textContent = "Power Status: off"
}
//if all match up you win
let slot1 = ride4SlotMachine()
let slot2 = ride4SlotMachine()
let slot3 = ride4SlotMachine()

let didTheyWin = (slot1 === slot2) && (slot2 === slot3)

if (ride4PowerOn && didTheyWin){
    setTimeout(()=> {
        window.alert("You won the slot machine")
    }, 500)
    
}