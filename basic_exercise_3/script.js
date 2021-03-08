
// console.log(degrees);
// if (degrees <= 10) {
//     document.getElementById("temp").innerHTML = "The weather is cold";
// } else {
//     document.getElementById("temp").innerHTML = "The weather is moderate";
// }
var degrees = Math.floor(Math.random() * 30 ) -5;
console.log(degrees);

switch(degrees) {
    case degrees <= 10 :
        title = 'The weather is cold';
        console.log(title);
        break;
    case 10 < degrees <= 20:
        title = 'The weather is moderate';
        console.log(title);
        break;
    case  20 < degrees <= 30:
        title = 'The weather is nice';
        console.log(title);
        break;
    case 30 < degrees:
        title = 'The weather is hot';
        console.log(title);
        break; 
}