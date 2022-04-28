//DO NOT MODIFY THESE VARIABLES
let greenWireConnected = true
let yellowWireConnected = true
let redWireConnected = true
let waterIsOn = true

let ride1PowerElement = document.querySelector("#ride-1-power")
let ride2PowerElement = document.querySelector("#ride-2-power")
let ride3PowerElement = document.querySelector("#ride-3-power")
let ride4PowerElement = document.querySelector("#ride-4-power")

//Everything below is fair game for you to power on the rides

//Ride 1 works when:
    // green wire is connected
let ride1PowerOn = false

//Ride 2 works when 
    //green and yellow wires are connected
let ride2PowerOn = false

//Ride 3 works when:
    // green and red wires are connected
    // water is on 
    // yellow wire is not connected
let ride3PowerOn = false

let ride4PowerOn = false
function ride4SlotMachine(rolledNumber){
    return "nothing"
}