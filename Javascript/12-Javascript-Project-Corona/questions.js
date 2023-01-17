const correctAnswers = ['E', 'E', 'E', 'E'];
const form = document.querySelector('.question-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((answer, index) => {
            if (answer === correctAnswers[index]) {
                score += 25;
            }

        })
        // console.log(score);
    result.classList.remove('d-none');
    let point = 0;
    const show = setInterval(() => {
        result.querySelector('span').textContent = `${point}%`;
        if (point == score) {
            clearInterval(show);
        } else {
            point++;
        }
    }, 10);

})

// setTimeout(() => {
//     console.log('Seda')
// }, 2000);

// setInterval(() => {
//     console.log('can');
// }, 1000);

// let i = 0;
// const show = setInterval(() => {
//     console.log('can');
//     i++;
//     if (i == 4) {
//         clearInterval(show);
//     }
// },1000);