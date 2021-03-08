var studentName, studentGrade;

studentName = prompt('Please enter the name', 'Name');
studentGrade = prompt('Please enter the grade', 'Grade');


if (studentGrade < 60) {
    document.getElementById("outputGrade").innerHTML = "The grade is F";
    // document.getElementById("cold").style.display = "block";
} else {
    if (studentGrade < 70) {
        document.getElementById("outputGrade").innerHTML = "The grade is D";
        // document.getElementById("moderate").style.display = "block";
    } else {
        if (studentGrade < 80) {
            document.getElementById("outputGrade").innerHTML = "The grade is C";
            // document.getElementById("nice").style.display = "block";
        } else {
            if (studentGrade < 90) {
                document.getElementById("outputGrade").innerHTML = "The grade is B";
                // document.getElementById("nice").style.display = "block";
            }
            else {


                // degrees > 30;
                document.getElementById("outputGrade").innerHTML = "The grade is A";
                // document.getElementById("hot").style.display = "block";
            }
        }
    }

}