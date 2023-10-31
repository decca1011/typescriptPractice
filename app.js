"use strict";
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const buttonElement = document.querySelector('button');
const newResults = [];
const textResults = [];
const sum = function (num1, num2) {
    if (typeof num1 === "number" && num2 === " number") {
        return num1 + num2;
    }
    else if (typeof num1 === "string" && num2 === "string") {
        return num1 + "  " + num2;
    }
    return +num1 + +num2;
};
function printResult(resultObj) {
    console.log(`${resultObj.timestamp}: ${resultObj.val}`);
}
buttonElement.addEventListener('click', () => {
    const num1 = parseFloat(num1Element.value);
    const num2 = parseFloat(num2Element.value);
    const result = sum(num1, num2);
    const stringResult = sum(num1, num2);
    console.log(result, stringResult);
    newResults.push(result);
    textResults.push(stringResult);
    printResult({ val: result, timestamp: new Date() });
    console.log(newResults, textResults);
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is the resolved value");
    }, 1000);
});
myPromise.then((result) => {
    console.log(result.split('w'));
});
