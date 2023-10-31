const  num1Element = document.getElementById('num1') as HTMLInputElement;
const  num2Element = document.getElementById('num2') as HTMLInputElement;
const  buttonElement = document.querySelector('button')!;

const newResults: number[] = [];
const textResults: string[] =[]; 

const sum = function(num1: number | string , num2: number | string ) {
   if(typeof num1 === "number" && num2 === " number"){
      return num1 + num2;
   }
   else if ( typeof num1==="string" && num2 ==="string")
   {
      return num1 + "  "+  num2;
   }
   return +num1 + +num2;
 }

function printResult(resultObj: {val: number; timestamp:Date}) {
   console.log(`${resultObj.timestamp}: ${resultObj.val}`);
}

 
buttonElement.addEventListener('click', () => {
   const num1 = parseFloat(num1Element.value);
   const num2 = parseFloat(num2Element.value);
   const result = sum(num1, num2);
   const stringResult = sum(num1 ,num2)
     console.log(result, stringResult);
     newResults.push(result as number);
     textResults.push(stringResult as string);

   printResult({val: result as number , timestamp: new Date()});

   console.log(newResults , textResults);


 });

