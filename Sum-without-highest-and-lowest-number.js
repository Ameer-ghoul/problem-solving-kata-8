
// check if empty value return 0 
// find the highest  number
// find the lowest number 
// filter the arry 
// sum all number in the arry 

function sumArray(arry) {
    if(arry == 0) return 0;
    return arry 
    .sort((a, b) => a - b)
    .slice(1 , -1)
    .reduce((acc, current) => acc + current, 0)

   
    //    .filter((x) => x !== Math.max(...arry) && x !== Math.min(...arry).reduce((acc, current) => acc + current , 0));

    // if (arry == null) return 0;
    // const maxValue = Math.max(...arry);
    // const minValue = Math.min(...arry);
    // const filteredArray = arry.filter((x) => x !== maxValue && x !== minValue);
    // const newArray = filteredArray.reduce((acc, current) => acc + current, 0);
    // return newArray;
}

console.log(sumWithoutHiehestAndLowestNumber([1, 1, 2, 5, 8, 9, 10]));