const correctAnswer = ['A', 'B', 'D', 'C'];
const form = document.querySelector('.form');
form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;

    const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    console.log(form.q1.value);
    userAnswer.forEach((answer, index) => {
        if (answer === correctAnswer[index]) {
            score += 25;

        }

    });
    console.log(score);

});

