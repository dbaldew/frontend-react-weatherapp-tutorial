function createDateString(timeStamp) {
    const day = new Date(timeStamp * 1000);
    return day.toLocaleDateString('nl-NL', {weekday: 'long'});
}

export default createDateString;