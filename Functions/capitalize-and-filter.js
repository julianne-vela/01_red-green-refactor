const capitalizeAndFilter = (strArray) => {
    const filteredArray = [];

    for(const str of strArray) {
        const capStr = str.toUpperCase();
        // const regEx = /^(?!F)\w+/g;
        // const filteredArray = [...capStr.matchAll(regEx)];
        if(capStr.charAt(0) !== 'F') {
            filteredArray.push(capStr); 
        }
    }
    return filteredArray;
};

module.exports = capitalizeAndFilter;
