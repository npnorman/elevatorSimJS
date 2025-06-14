//this file holds all of the custom classes for the elevator sim
//June 2025 Nicholas Norman

class FloorRequest {
    constructor(outsideRequest, insideRequest) {
        this.outsideRequest = outsideRequest;
        this.insideRequest = insideRequest;

        //holding information about frames waiting
        this.insideWait = 0;
        this.outsideWait = 0;
    }

    getOutsideRequest() {
        return this.outsideRequest;
    }

    getInsideRequest() {
        return this.insideRequest;
    }

    //override the toString for log
    toString() {
        return "[out: " + this.outsideRequest + "," + "in: " + this.insideRequest + "]";
    }
}