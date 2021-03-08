// let numbers = [2, 6, -8, 4, 3];
let numbers = [1, 2 , 3 , -5, 4, 1, 2 ,8];

var highestNumber = numbers[0];

for (let i of numbers) {
    
    if (i > highestNumber) {
        highestNumber = i;
    }
    
    
}

document.getElementById("number").innerHTML = highestNumber;
// document.getElementsByClassName("number").innerHTML = highestNumber;