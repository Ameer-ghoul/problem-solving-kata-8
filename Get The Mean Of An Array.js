// Get The Mean Of An Array

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// create sum variable to sum all of the numbers
// create avarage
// loop through in the array of unmbers
// add each number in the sum variable
// devide sum / avarage
// return avarage

function getAverage(marks) {
  //   let sum = 0;
  //   let avarage;
  //   for (let i = 0; i < marks.length; i++) {
  //     sum += marks[i];
  //   }
  //   avarage = sum / marks.length;
  //   return Math.floor(avarage);

  return Math.floor(
    marks.reduce((acc, current) => acc + current / marks.length, 0)
  );
}

console.log(getAverage([2, 4, 6, 8, 10]));
