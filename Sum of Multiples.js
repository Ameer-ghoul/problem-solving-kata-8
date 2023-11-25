
//Sum of Multiples

// n and m are natural numbers (positive integers)
// m is excluded from the multiples


function sumMul(n,m){
    let finalSum = 0;
    for (let i = n; n <= m; i += n){ 
        finalSum += i
    }
    return finalSum;
    }

    console.log(sumMul(2, 9))