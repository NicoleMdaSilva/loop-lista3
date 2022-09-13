let even = 0
let odd = 0

for(let i = 0;i < 10; i++){
   let num = parseInt(prompt(`Type the ${i + 1}º number`));
   
   if(num % 2 == 0){
    even++
    }
    else if(num % 2 != 0){
    odd++
    }

}
document.write(`There's ${odd} odd numbers `);
document.write(`<br>There's ${even} even numbers `);
