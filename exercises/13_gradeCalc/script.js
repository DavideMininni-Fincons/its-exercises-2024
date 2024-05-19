function calculateGrade() {
    const grades = [];
    const numberOfGrade = parseInt(prompt('How much exams have you done?'));
    const arr = new Array(numberOfGrade).fill(null);
    if(numberOfGrade > 0) {
        for (let index in arr) {
            const grade = parseInt(prompt(`Insert evaluation of exam number ${+index + 1}: `));
            if (grade > 0) {
                grades.push(grade);
            } else {
                break;
            }
        }
    }

    const average = grades.reduce((a, b) => a + b, 0) / numberOfGrade;
    alert(`Your average grade is: ${average}`);
}

calculateGrade();
