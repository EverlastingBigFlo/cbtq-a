const quizForm = document.getElementById('quiz-form');
const resultDiv = document.getElementById('result');
const correctAnswers = ['c','b','c']

quizForm.addEventListener('submit', e=>{
    e.preventDefault();

    let score =   0;
    const userAnswers = [quizForm.q1.value,quizForm.q2.value,quizForm.q3.value];
    userAnswers.forEach((answer,index) =>{
        if (answer === correctAnswers[index]){
            score += 1;
        }
    });
    
    // resultDiv.innerHTML = `your score is ${score}/${correctAnswers.length}`;
})
function alert(){
    alert(`your score is ${score}/${correctAnswers.length}`);
}