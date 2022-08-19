function createTimestamp(timestamp) {
    let newDate = new Date(timestamp);
    let month = newDate.getMonth() + 1;
    let day = newDate.getDate();
    let year = newDate.getFullYear();

    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }

    return month + "/" + day + "/" + year;
}

export default createTimestamp;