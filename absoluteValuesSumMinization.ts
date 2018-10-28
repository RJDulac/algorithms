//absoluteValuesSumMinimization

//median value of an array

//solution 1
function aVSumMin(a: number[]): number {
    //check if array index is even
    const isEven = a.length % 2 ===0;

    //divide array in half and subtract by 1 if even. If odd use math.floor
    return isEven ? a[a.length /2 -1] : a[Math.floor(a.length /2)];
}

console.log(aVSumMin([2,4,8])); 


//solution 2
function absoluteValuesSumMinimization(a : number[]): number {
    a.sort();
    const median = Math.floor(a.length / 2);
    return a.length % 2 == 0 ? a[median - 1] : a[median];  
}

console.log(aVSumMin([2,4,8])); 