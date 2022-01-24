function gradeCalculator(grades) {
    let sum = 0;
    let iterationCounter = 0;
    let invalidGrades = 0;
    for (let i = 0; i < grades.length; i++) {
        iterationCounter++;
        if (grades[i] < 2 || grades[i] > 6) {
            invalidGrades++;
        } else {
            if (grades[i] != Math.ceil(grades[i])) {
                if (grades[i] % 1 >= 0.50) {
                    if (grades[i] <= 2.99) {
                        sum += Math.floor(grades[i]);
                    } else {
                        sum += Math.round(grades[i]);
                    }
                } else if (grades[i] % 1 < 0.50) {
                    sum += Math.floor(grades[i]);
                }
            } else {
                sum += grades[i];
            }
        }
    }
    if (invalidGrades > 0) {
        console.log(`Invalid grades detected! (${invalidGrades})`);
        console.log(`The program didn't finish the calculations, grades under 2 or above 6 were entered!`);
    } else {
        let total = sum / iterationCounter;
        console.log(`Grades found: ${iterationCounter}`);
        console.log(`Average grade: ${(total).toFixed(2)}`);
        if (total < 3) {
            console.log(`The grade is below ${Math.floor(total)}.50`);
            console.log(`Rounded to nearest lower integer: ${Math.floor((total)).toFixed(2)}`);
        }
        if (total >= 5.00) {
            console.log(`-------------------------------------------------------------------------------`);
            console.log(`You are able to claim free driving course! Your average grade is ${total.toFixed(2)}`);
            console.log(`Required: >= 5.00`);
            if (total < 5.50) {
                console.log(`-------------------------------------------------------------------------------`);
            }
        }
        if (total >= 5.50) {
            console.log(`-------------------------------------------------------------------------------`);
            console.log(`Coungratilations, you are able to claim scholarship! Your average grade is ${total.toFixed(2)}`);
            console.log(`Required: >= 5.50`);
            console.log(`-------------------------------------------------------------------------------`);
        }
    }
}
gradeCalculator([5.50, 5.50, 5.50, 5.50, 5.50, 5.50, 5.50, 5.50, 5.50, 5.49, 5.49, 5.49, 5.49, 5.49, 5.49, 5.49, 5.49])
