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
  const junctions = [
    {
      name: 'Park Street',
      conections: ['Red', 'Green', 'Orange']
    },
    {
      name: 'Haymarket',
      conections: ['Green', 'Orange']
    }
  ]
  // Check to see if start station is equal to end station and used the Math.abs
  // to make sure the number is always a positive number.
  if (startLine === endLine) {
    const numOfStops = mbta[startLine].indexOf(startStation) - mbta[endLine].indexOf(endStation)
    return Math.abs(numOfStops)
  }
  // Delcaring the start line
  const currentLine = mbta[startLine]
  // Declaring the end line
  const destinationLine = mbta[endLine]
  // Seeing what junction (park street or haymarket) is going to be used if
  // startLine and endLine are not the same
  const junctionConnections = junctions.filter(i => i.conections.includes(startLine) && i.conections.includes(endLine))
  // Declaring an array that I can push to
  const numOfStopsArr = []
  // Doing a for each loop on the juction array
  junctionConnections.forEach(current => {
    // Getting the stops from the start station to the juction (either park or haymarket)
    const stopsToJunction = Math.abs(currentLine.indexOf(startStation) - currentLine.indexOf(current.name))
    // Getting the stops from the juction to the end station
    const stopsFromJunctionToDestination = Math.abs(destinationLine.indexOf(endStation) - destinationLine.indexOf(current.name))
    // Pushed to numOfStopsArr and added stopsToJunction and stopsFromJunctionToDestination
    numOfStopsArr.push(stopsToJunction + stopsFromJunctionToDestination)
  })
  // returned the first index of the sorted array
  return numOfStopsArr.sort(i => -i)[0]
}

module.exports = {
  stopsBetweenStations: stopsBetweenStations,
  stretch: false
}
