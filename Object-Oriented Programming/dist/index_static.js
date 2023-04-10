"use strict";
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = 'Maxino';
seats.A2 = 'Ingrid';
/// static methods
class Ride {
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);
