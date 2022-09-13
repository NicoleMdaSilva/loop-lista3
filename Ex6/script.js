let i = 0
let num = 0
let media = 0

do {
    num = parseFloat(prompt('Type Numbers (Type 0 to finish):'));

    if(num % 3 == 0){
        media = media + num
        i++
    }
    

} while (num != 0);

const total = media / i

document.write(`The total is: ${media}`)