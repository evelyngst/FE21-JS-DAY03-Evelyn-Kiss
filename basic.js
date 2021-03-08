var degrees = Math.floor(Math.random() * 30 ) -5;
console.log(degrees);
if (degrees <= 10) {
    document.getElementById("temp").innerHTML = "The weather is cold";
} else {
    document.getElementById("temp").innerHTML = "The weather is moderate";
}