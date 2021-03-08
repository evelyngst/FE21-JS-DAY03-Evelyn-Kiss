// var studentName, studentGrade;

// studentName = prompt('Please enter the name', 'Name');
// studentGrade = prompt('Please enter the grade', 'Grade');


var studentName = ["Martin", "Thomas", "Klaus", "Maria", "David"];
var studentGrade = [76, 85, 65, 93, 81];
var output = "";
var average = 0;

for (let i in studentName) {
    output += "The students name is " + studentName[i] + "<br>";
    output += "The average is " +studentGrade[i] + "<br>";
    average += studentGrade[i];

    if (studentGrade[i] < 60) {
        output += "The grade is F <br> <br>";
        
        // document.getElementById("outputGrade").innerHTML += "The grade is F <br>";
        // document.getElementById("cold").style.display = "block";
    } else {
        if (studentGrade[i] < 70) {
            output += "The grade is D <br> <br>";
            // document.getElementById("outputGrade").innerHTML = "The grade is D <br>";
            // document.getElementById("moderate").style.display = "block";
        } else {
            if (studentGrade[i] < 80) {
                output += "The grade is C <br> <br>";
                // document.getElementById("outputGrade").innerHTML = "The grade is C <br>";
                // document.getElementById("nice").style.display = "block";
            } else {
                if (studentGrade[i] < 90) {
                    output += "The grade is B <br> <br>";
                    // document.getElementById("outputGrade").innerHTML = "The grade is B <br>";
                    // document.getElementById("nice").style.display = "block";
                }
                else {
                    output += "The grade is A <br> <br>";

                    // degrees > 30;
                    // document.getElementById("outputGrade").innerHTML = "The grade is A <br>";
                    // document.getElementById("hot").style.display = "block";
                }
            }
        }

    }
    document.getElementById("outputGrade").innerHTML = output;

}
document.getElementById("outputGrade").innerHTML += "The class average is " + average / studentGrade.length;

// var text = "";
//   text += "The index is " + i + "<br>";
//   document.getElementById("demo").innerHTML += "Using method getElementById: " + text;