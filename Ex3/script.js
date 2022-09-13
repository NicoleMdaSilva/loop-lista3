let num = 0
let num1 = 0
let num2 = 0

while(num != -99){
   
    num = (parseInt(prompt("Type your age: (type -99 to finish)")));
    if(num < 21){
        num1 ++
    }
    else if(num > 50){
        num2 ++
    }

}
document.write(`Total of 21 old years is: ${num1}`);
document.write(`<br>Total of 50 old years is: ${num2}`)