let i = 0
let num = 0

do {
    num = parseFloat(prompt('Type Numbers (Type 0 to finish):'));

    i = num + i

} while (num != 0);

document.write(`The total is: ${i}`)