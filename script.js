"use script"

const numbers = []
let total = 0;
let Userinput;

do {
    Userinput = prompt('Ведите число');
    if(isNaN(Userinput)){
        break;
    }
    numbers.push(Number(Userinput));
    
} while (Userinput !== null);
    numbers.pop()
for (let el of numbers) {
    total += el;
   
}
console.log(total)
console.log(numbers)
