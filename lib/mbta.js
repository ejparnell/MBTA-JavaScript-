'use strict'

const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {

const mbta = {
  Red: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard',
  'Porter', 'Davis', 'Alewife'],
  Green: ['Government Center', 'Park Street', 'Boylston', 'Arlington',
    'Copley', 'Hynes', 'Kenmore'],
  Orange: ['North Station', 'Haymarket', 'Park Street', 'State',
      'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
}
//Check to see if start station is equal to end station
  if (startLine === endLine) {
//set the vaule of numOfStops to the index of the start station and subtracted it
//to the index of the end station
    let numOfStops = mbta[startLine].indexOf(startStation) - mbta[endLine].indexOf(endStation)
//checking to see if the number is a negitave
     if (numOfStops < 0) {
//if it is a negative I just switched the equation around to get a postive number
       numOfStops = mbta[endLine].indexOf(endStation) - mbta[startLine].indexOf(startStation)
//returns result for same station stops
       return numOfStops
     } else {
       return numOfStops
     }
}
}
console.log(stopsBetweenStations('Red', 'Alewife', 'Red', 'Kendall'))

module.exports = {
  stopsBetweenStations: stopsBetweenStations,
  stretch: false
}
