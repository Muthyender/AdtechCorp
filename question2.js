findRepeatedNumber = inputArray =>
{
    let sum = 0;
    for(let i=0; i<inputArray.length; i++)
        sum += inputArray[i]

    let actualSum = inputArray.length * (inputArray.length + 1) / 2

    return inputArray.length - (actualSum - sum)
}

console.log(findRepeatedNumber([1,3,4,2,2]))