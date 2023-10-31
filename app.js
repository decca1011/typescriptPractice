var num1Element = document.getElementById('num1');
var num2Element = document.getElementById('num2');
var buttonElement = document.querySelector('button');
var newResults = [];
var textResults = [];
var sum = function (num1, num2) {
    if (typeof num1 === "number" && num2 === " number") {
        return num1 + num2;
    }
    else if (typeof num1 === "string" && num2 === "string") {
        return num1 + "  " + num2;
    }
    return +num1 + +num2;
};
function printResult(resultObj) {
    console.log("".concat(resultObj.timestamp, ": ").concat(resultObj.val));
}
buttonElement.addEventListener('click', function () {
    var num1 = parseFloat(num1Element.value);
    var num2 = parseFloat(num2Element.value);
    var result = sum(num1, num2);
    var stringResult = sum(num1, num2);
    console.log(result, stringResult);
    newResults.push(result);
    textResults.push(stringResult);
    printResult({ val: result, timestamp: new Date() });
    console.log(newResults, textResults);
});
