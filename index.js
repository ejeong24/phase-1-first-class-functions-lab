const returnFirstTwoDrivers = function(drivers) {return drivers.slice(0,2)};

const returnLastTwoDrivers = function(drivers) {return drivers.slice(drivers.length-2,drivers.length)};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplyBy) {
    return function (fare) {
        return fare*multiplyBy;
    }
}

const fareDoubler = createFareMultiplier(2);

/*function fareDoubler(fare){
    return createFareMultiplier(2)(fare);
}*/

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers,firstOrLast) {

return firstOrLast(drivers);


}

/*= function(fare) {
    const doubled = createFareMultiplier(2);
}


/*function fareDoubler(fare){
    return fare*2;  
}

function fareTripler(fare){
    return fare*3;
}*/

