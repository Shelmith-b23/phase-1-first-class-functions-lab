// Code your solution in this file!
// Functions that return first and last two drivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// Array containing the above functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Function that returns a fare multiplier function
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// fareDoubler uses createFareMultiplier
const fareDoubler = createFareMultiplier(2);

// fareTripler uses createFareMultiplier
const fareTripler = createFareMultiplier(3);

// Function that applies one of the selectingDrivers
function selectDifferentDrivers(drivers, driverSelector) {
  return driverSelector(drivers);
}
