//This file holds the simulation of elevators
//June 2025 Nicholas Norman

var output = document.getElementById("output");

function addToLog(logItem) {
    output.innerHTML += logItem + "<br>";
}

//The simulation has some global elements that all things can access
var frame = 0;
var frameRate = 1000; //1 sec

//log => addToLog for now
var outsideRequests = [];
var finishedRequests = [];
var numberOfFloors = 10;
var numberOfElevators = 1;

function simulationLoop() {

    frame += 1;

    //take input
    //make a new request
    outsideRequests.push(makeANewRequest(numberOfFloors));

    //process

    //display data
    addToLog("frame: " + frame);
    addToLog("outside: " + outsideRequests);

    //deciding to stop
    if (frame >= 5) {
        stop();
    } else {
        setTimeout(simulationLoop, frameRate);
    }
}

function startup() {
    //sets up the sim
    setTimeout(simulationLoop, frameRate);
    addToLog("Elevator Sim Starting");
}

function makeANewRequest(numberOfFloors) {
    //decides where to start and end the request
    var startingFloor = getRandomIntInclusive(1, numberOfFloors);
    var requestedFloor = getRandomIntInclusive(1, numberOfFloors);

    return new FloorRequest(startingFloor, requestedFloor);
}

function stop() {
    //tears down the sim
    addToLog("Elevator Sim Stopping");
}

//helper functions
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//SIMULATION
startup();