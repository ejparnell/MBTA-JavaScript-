'use strict'

const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
  const mbta = {
    Red: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard',
      'Porter', 'Davis', 'Alewife'],
    Green: ['Haymarket', 'Government Center', 'Park Street', 'Boylston', 'Arlington',
      'Copley', 'Hynes', 'Kenmore'],
    Orange: ['North Station', 'Haymarket', 'Park Street', 'State',
      'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
  }
  // Bonus section!!
  if ((startLine === 'Green' && endLine === 'Orange') || (startLine === 'Orange' && endLine === 'Green')) {
    let hayStartStops = mbta[startLine].indexOf('Haymarket') - mbta[startLine].indexOf(startStation)
    if (hayStartStops < 0) {
      hayStartStops = mbta[startLine].indexOf(startStation) - mbta[startLine].indexOf('Haymarket')
    }
    let hayEndStops = mbta[endLine].indexOf('Haymarket') - mbta[endLine].indexOf(endStation)
    if (hayEndStops < 0) {
      hayEndStops = mbta[endLine].indexOf(endStation) - mbta[endLine].indexOf('Haymarket')
    }
    const numOfStops = hayEndStops + hayStartStops
    return numOfStops
  }
  // Check to see if start station is equal to end station
  if (startLine === endLine) {
    // set the vaule of numOfStops to the index of the start station and subtracted it
    // to the index of the end station
    let numOfStops = mbta[startLine].indexOf(startStation) - mbta[endLine].indexOf(endStation)
    // checking to see if the number is a negitave
    if (numOfStops < 0) {
      // if it is a negative I just switched the equation around to get a postive number
      numOfStops = mbta[endLine].indexOf(endStation) - mbta[startLine].indexOf(startStation)
      // returns result for same station stops
      return numOfStops
    } else {
      return numOfStops
    }
  } else {
    // Get the number of stops from star station to park street
    let parkStopsStart = mbta[startLine].indexOf('Park Street') - mbta[startLine].indexOf(startStation)
    // Make parkStops into a postive number if needed
    if (parkStopsStart < 0) {
      parkStopsStart = mbta[startLine].indexOf(startStation) - mbta[startLine].indexOf('Park Street')
    }
    // Get the number of stops from park street on end line to end station
    let parkStopsEnd = mbta[endLine].indexOf('Park Street') - mbta[endLine].indexOf(endStation)
    // make into postive number
    if (parkStopsEnd < 0) {
      parkStopsEnd = mbta[endLine].indexOf(endStation) - mbta[endLine].indexOf('Park Street')
    }
    // added both park street values together to get total number of stops
    const numOfStops = parkStopsStart + parkStopsEnd
    // returned total number of stops if start line and end line are differnet
    return numOfStops
  }
}
console.log(stopsBetweenStations('Green', 'Haymarket', 'Orange', 'Back Bay'))
module.exports = {
  stopsBetweenStations: stopsBetweenStations,
  stretch: false
}
