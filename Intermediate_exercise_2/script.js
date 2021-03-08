var output = 0;

for (var i = 1; i <= 100; i++) {
    // output += i + "<br>";
    if (i % 3 == 0 && i % 5 == 0) {
        output += "FizzBuzz" + "<br>";
    } else {
        if (i % 3 == 0) {
            output += "Fizz" + "<br>";
        } else {
            if (i % 5 == 0) {
                output += "Buzz" + "<br>";        
            } else {
                output += i + "<br>";
            }
        }
    }
}

document.getElementById("name").innerHTML = output;