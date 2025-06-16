class ElevatorOperator extends Elevator{

    constructor(capacity=5) {
        super(capacity);
    }

    pickFloorToStopAt() {
        //fill in with your algorithm

        if (this.getInsideRequests().length != 0) {

            return this.getInsideRequests()[0];

        } else if(this.getOutsideRequests().length != 0) {

            return this.getOutsideRequests()[0];

        } else {
            return this.getCurrentFloor();
        }
    }

    //RULES FOR SCHEDULING
    // You only have access to the following:
    // getOutsideRequests() //returns int[] of all requests for pickup
    // getInsideRequests() //returns int[] of requests for dropoff in the current elevator
    // getCurrentFloor() //returns int which is the current floor the elevator is on
    // getCapacity() //returns int which is the amount of people that can fit in this elevator
    // getNumberOfPeopleInElevator() //returns int which is the amount of people in the elevator
    // getSharedGoals() //returns the list of every elevators goal: where they are going to stop next.
}