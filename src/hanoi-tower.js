module.exports = function calculateHanoi(disksNumber, turnsPerHour) {
    const turns = Math.pow(2, disksNumber) - 1;
    const hoursToTake = turns / turnsPerHour;
    const seconds = Math.floor(hoursToTake * 60 * 60);
    return {turns, seconds};
};
