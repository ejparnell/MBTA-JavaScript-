## Instructions

1. Fork and clone this repository.
1. Change into the new directory.
1. Install dependencies with npm install.
1. Create and checkout a new branch, named `response`.
1. Follow the directions given in this file.
1. When finished, push to your fork and submit a pull request.

## Activity

- Finish the function in `lib/mbta.js` to calculate the number of stops between
  stations on the "MBTA". Write additional functions used by this function as
  needed.
- The function takes the line and stop that a rider is getting on at and the
  line and stop that a rider is getting off at and **returns the total number of
  stops for the trip**.

There are 3 subway lines:

- The Red line has the following stops: South Station, Park Street, Kendall,
  Central, Harvard, Porter, Davis, Alewife
- The Green line has the following stops: Government Center, Park Street,
  Boylston, Arlington, Copley, Hynes, Kenmore
- The Orange line has the following stops:  North Station, Haymarket,
  Park Street, State, Downtown Crossing, Chinatown, Back Bay, Forest Hills
- All 3 subway lines intersect at *Park Street*, but there are no other
  intersection points. Some of this MBTA is fictionalized.

The function will be invoked using the following pattern of arguments:

`Start Line`, `Start Station`, `End Line`, `End Station`

Here are some examples of how it might be invoked.

```js
stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife') // 0
stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station') // 7
stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore') // 6
```

Note that the lines will be passed in as a single capitalized word ('Red',
'Green', 'Orange'). This can also be seein in detail by running the tests.

## Hints

- Assume good input.  Your function need not check the validity of the line or
  stop.
- Consider diagramming the lines by sketching out the subway lines and their
  stops and intersection.
- Subway lines are keys in a dictionary (object literal), while the values are
  a list (array) of all the stops on each line.
- The key to the practice is to find the **intersection** of the lines at
  *Park Street*.
- Solve an easier problem first.

## Bonus

Think about adding Haymarket before Government Center on the Green line then try
to find a solution when there are multiple intersections.

Is there a way to decide if a particular solution is "correct"?

This bonus is completely optional and does not have tests, yet.

## Tasks

Developers should run these often!

- `grunt nag` or just `grunt`: runs code quality analysis tools on your code
  and complains.
- `grunt make-standard`: reformats all your code in a standard style.
- `grunt test`: runs any automated tests.

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
