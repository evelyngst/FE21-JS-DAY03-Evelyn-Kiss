var degrees = Math.floor(Math.random() * 40 ) -5;
console.log(degrees);
if (degrees <= 10) {
    document.getElementById("temp").innerHTML = "The weather is cold";
    document.getElementById("cold").style.display = "block";
} else {
    if (degrees > 10 && degrees <= 20) {
        document.getElementById("temp").innerHTML = "The weather is moderate";
        document.getElementById("moderate").style.display = "block";
    } else {
        if (degrees > 20 && degrees <= 30) {
            document.getElementById("temp").innerHTML = "The weather is nice";
            document.getElementById("nice").style.display = "block";
        } else {
            // degrees > 30;
            document.getElementById("temp").innerHTML = "The weather is hot";
            document.getElementById("hot").style.display = "block";
        }
    }
    
}



// var degrees = Math.floor(Math.random() * 30 ) -5;
// console.log(degrees + " the current degrees");
// console.log(title + " the initial value");



// switch(degrees) {
//     case 1:
//         console.log(degrees + " cold");
//         break;
//     case 2:
//         console.log(degrees + " moderate");
//         break;
//     case 3:    
//         console.log(degress + " hot");
//         break;
// }

    // case degrees <= 10:
    //     title = 'The weather is cold';
    //     console.log(title + " cold");
    //     break;
    // case degrees > 10 && degrees <= 20:
    //     title = 'The weather is moderate';
    //     console.log(title + " moderate");
    //     break;
    // case degrees > 20 && degrees <= 30:
    //     title = 'The weather is nice';
    //     console.log(title + " nice");
    //     break;
    // case degrees > 30:
    //     title = 'The weather is hot';
    //     console.log(title + " hot");
    //     break; 
// }