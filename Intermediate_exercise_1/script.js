// var studentName, studentGrade;

// studentName = prompt('Please enter the name', 'Name');
// studentGrade = prompt('Please enter the grade', 'Grade');


var studentName = ["Martin", "Thomas", "Klaus", "Maria", "David"];
var studentGrade = ["76", "85", "65", "93", "81"];
var output = "";

for (let i of studentName) {
    output += "The students name is " + i + "<br>";
    document.getElementById("outputGrade").innerHTML = output;


    // if (studentGrade < 60) {
    //     document.getElementById("outputGrade").innerHTML += "The grade is F <br>";
    //     // document.getElementById("cold").style.display = "block";
    // } else {
    //     if (studentGrade < 70) {
    //         document.getElementById("outputGrade").innerHTML = "The grade is D <br>";
    //         // document.getElementById("moderate").style.display = "block";
    //     } else {
    //         if (studentGrade < 80) {
    //             document.getElementById("outputGrade").innerHTML = "The grade is C <br>";
    //             // document.getElementById("nice").style.display = "block";
    //         } else {
    //             if (studentGrade < 90) {
    //                 document.getElementById("outputGrade").innerHTML = "The grade is B <br>";
    //                 // document.getElementById("nice").style.display = "block";
    //             }
    //             else {


    //                 // degrees > 30;
    //                 document.getElementById("outputGrade").innerHTML = "The grade is A <br>";
    //                 // document.getElementById("hot").style.display = "block";
    //             }
    //         }
    //     }

    // }

}

// var text = "";
//   text += "The index is " + i + "<br>";
//   document.getElementById("demo").innerHTML += "Using method getElementById: " + text;