function compareDate(departureTime, arrivalTime) {
    let dateTime1 = new Date(departureTime);
    let dateTime2 = new Date(arrivalTime);
    return dateTime1.getTime() > dateTime2.getTime();
}

module.exports = {
    compareDate
};