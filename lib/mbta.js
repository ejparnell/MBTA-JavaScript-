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
} else {
//Get the number of stops from star station to park street
  let parkStopsStart = mbta[startLine].indexOf('Park Street') - mbta[startLine].indexOf(startStation)
//Make parkStops into a postive number if needed
if (parkStopsStart < 0) {
  parkStopsStart =  mbta[startLine].indexOf(startStation) - mbta[startLine].indexOf('Park Street')
}
//Get the number of stops from park street on end line to end station
  let parkStopsEnd = mbta[endLine].indexOf('Park Street') - mbta[endLine].indexOf(endStation)
//make into postive number
if (parkStopsEnd < 0 ) {
  parkStopsEnd = mbta[endLine].indexOf(endStation) - mbta[endLine].indexOf('Park Street')
}
//added both park street values together to get total number of stops
  let numOfStops = parkStopsStart + parkStopsEnd
//returned total number of stops if start line and end line do not match
  return numOfStops
}
}


module.exports = {
  stopsBetweenStations: stopsBetweenStations,
  stretch: false
}
