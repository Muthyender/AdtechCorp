findLastWord = userInput =>
{
    return userInput.length - userInput.lastIndexOf(" ") - 1
}

console.log(findLastWord('Hello world'))