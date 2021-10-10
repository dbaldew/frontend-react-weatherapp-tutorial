function createTimeString (timeStamp){
    const day = new Date(timeStamp * 1000);
    return day.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})
}

export default createTimeString;