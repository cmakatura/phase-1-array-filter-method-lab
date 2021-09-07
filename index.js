// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "bobby"]

function findMatching(drivers, name){
    const newDrivers = drivers.filter(function(drivers){return drivers.toUpperCase() === name.toUpperCase()});
    return newDrivers;
        }



function fuzzyMatch(drivers, letters){
    const matchLetters = drivers.filter(function(drivers){return drivers.slice(0,2) === letters});
    return matchLetters;

} 

const driversTwo = [
    {name: "Bobby", hometown: "LA"}, 
    {name: "Sammy", hometown:"LA"}, 
    {name: "Sally", hometown: "LA"},
    {name: "Annette", hometown: "LA"},
    {name: "Sarah", hometown: "LA"},
    {name: "bobby", hometown: "LA"}
]

function matchName(driversTwo, string){
    const newName = driversTwo.filter(function(driversTwo){return driversTwo.name === string});
    return newName;
}