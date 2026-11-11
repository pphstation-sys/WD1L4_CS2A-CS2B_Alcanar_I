// WD1-L4: External JavaScript for student_grades.html


const studentNames  = ["Anna Reyes", "Ben Santos", "Carla Cruz", "David Lim", "Ella Ramos"];
const studentGrades = [92, 85, 78, 97, 74];




// Returns the grade equivalent of a numeric grade
function getEquivalent(grade) {
  if (grade >= 97) {
    return "1.0";
  } else if (grade >= 94) {
    return "1.25";
  } else if (grade >= 91) {
    return "1.5";
  } else if (grade >= 88) {
    return "1.75";
  } else if (grade >= 85) {
    return "2.0";
  } else if (grade >= 82) {
    return "2.25";
  } else if (grade >= 79) {
    return "2.5";
  } else if (grade >= 76) {
    return "2.75";
  } else if (grade >= 75) {
    return "3.0";
  } else {
    return "Failed";
  }
}

// Returns "Passed" or "Failed" (ternary operator)
function getRemark(grade) {
  return grade >= 75 ? "Passed" : "Failed";
}

// Returns the academic leader title, or "-" if none
function getAcademicLeader(grade) {
  if (grade >= 97) {
    return "1st Class Academic Leader";
  } else if (grade >= 90) {
    return "2nd Class Academic Leader";
  } else {
    return "-";
  }
}

// Displays the list of enrolled students (name and grade only)
function displayStudents() {
  let rows = "";

  // FOR LOOP: go through every student in the arrays
  for (let i = 0; i < studentNames.length; i++) {
    rows += "<tr>" +
              "<td>" + studentNames[i] + "</td>" +
              "<td>" + studentGrades[i] + "</td>" +
            "</tr>";
  }

  // Output the generated rows inside the table body
  document.getElementById("studentList").innerHTML = rows;
}

// Evaluates the grade of each student and shows the result table
// Called by the button's onclick in the HTML
function showGradeEquivalent() {
  let rows = "";

  // FOR LOOP: evaluate every student here instead of repeating the code per student
  for (let i = 0; i < studentNames.length; i++) {
    let name       = studentNames[i];
    let grade      = studentGrades[i];
    let equivalent = getEquivalent(grade);
    let remark     = getRemark(grade);
    let leader     = getAcademicLeader(grade);

    rows += "<tr>" +
              "<td>" + name + "</td>" +
              "<td>" + grade + "</td>" +
              "<td>" + equivalent + "</td>" +
              "<td>" + remark + "</td>" +
              "<td>" + leader + "</td>" +
            "</tr>";
  }

  // Put the rows in the result table
  document.getElementById("resultBody").innerHTML = rows;

  // Reveal the result section by removing the "hidden" class
  document.getElementById("resultSection").classList.remove("hidden");
}

// Show the student list as soon as the page loads
displayStudents();