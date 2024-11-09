// Step 1: Declare Variables
let scores = [85, 92, 78, 65, 90]; // Array to store student scores
let totalScore = 0; // Variable to hold total score
let averageScore = 0; // Variable to hold average score

// Step 2: Calculate total and average score using a loop
for (let i = 0; i < scores.length; i++) {
    totalScore += scores[i]; // Add each score to totalScore
}
averageScore = totalScore / scores.length; // Calculate average

// Step 3: Determine grade based on averageScore using if-else
let grade;
if (averageScore >= 90) {
    grade = 'A';
} else if (averageScore >= 80) {
    grade = 'B';
} else if (averageScore >= 70) {
    grade = 'C';
} else if (averageScore >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}

// Step 4: Output Results
console.log("Total Score:", totalScore);
console.log("Average Score:", averageScore.toFixed(2));
console.log("Grade:", grade);
console.log("Grade:", grade);
