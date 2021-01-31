
const MonthsToNumberService = function (){
    return { "jan": 1, "feb": 2, "mar": 3, "apr": 4, "may": 5, "jun": 6, "jul": 7, "aug": 8,
        "sep": 9, "oct": 10, "nov": 11, "dec": 12 };
}

// index for sorting abstracts into chronological order. It is approximately the number of days since 2014.
const calculateSortIndex = function(filter, day) {
    const month = '' + /[a-zA-Z]+/.exec(filter);
    const year = '' + /^[0-9]+/.exec(filter);
    return (parseInt(year) - 2014) * 360 + MonthsToNumberService[month] * 30
        + parseInt(day);
}

module.exports = calculateSortIndex;
