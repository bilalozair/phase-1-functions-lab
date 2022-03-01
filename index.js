// Code your solution in this file!
function distanceFromHqInBlocks(distB) {
    //returns the number of blocks given a value
    return Math.abs(42 - distB);
}
function distanceFromHqInFeet(distB) {
    let distF = 264 * distanceFromHqInBlocks(distB);
    return distF;
}
function distanceTravelledInFeet(start, destination) {
    return Math.abs((destination - start)*264);
}
function calculatesFarePrice(start, destination) {
    let travelF = distanceTravelledInFeet(start,destination);
    let rate = 0.02;
    let farePrice;
    if (travelF <= 400) {
        return farePrice = 0;
    } else if (travelF <= 2000) {
        return farePrice = rate*(travelF-400);
    } else if (travelF <= 2500) {
        return farePrice = 25;
    } else {
        return farePrice = 'cannot travel that far';
    }  
}
