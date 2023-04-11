let index = 0;
let display = document.getElementById('questionDisplay');

let questions = [
    {
        question : "What is the capital of Nigeria?",

        options : ["Lagos", "Ikeja", "Abuja"],

        answer : "Abuja",

        optionChose : ""
    },

    {
        question : "What is the capital of Oyo?",

        options : ["Abeokuta", "Ibadan", "Fiditi"],

        answer : "Ibadan",

        optionChose : ""
    },

    {
        question : "What State in Nigeria is Ikeja located at?",

        options : ["Lagos", "Bayelsa", "Abuja"],

        answer : "Lagos",

        optionChose : ""
    },

    {
        question : "What is the full meaning of HTML?",

        options : ["Hip Cascading Sheet Language", "Hypertext Markup Language", "High Extensible Markup Language"],

        answer : "Hypertext Markup Language",

        optionChose : ""
    },

    {
        question : "___________ take place when you break down a function that takes multiple arguments into a series of functions that take part of the arguments?",

        options : ["function Breakdown", "None of the above", "Currying"],

        answer : "Currying",

        optionChose : ""
    },

    {
        question : "which of the following Nigerian Artist has 'Damola' in their names?",

        options : ["Davido", "Ayra Star", "Fireboy"],

        answer : "Fireboy",

        optionChose : ""
    },

    {
        question : "Which of the following product uses fruit as their trademark",

        options : ["Apple", "Samsung", "Tekno"],

        answer : "Apple",

        optionChose : ""
    },

];







































// const quizForm = document.getElementById('quiz-form');
// const resultDiv = document.getElementById('result');
// const correctAnswers = ['c','b','c']

// quizForm.addEventListener('submit', e=>{
//     e.preventDefault();

//     let score =   0;
//     const userAnswers = [quizForm.q1.value,quizForm.q2.value,quizForm.q3.value];
//     userAnswers.forEach((answer,index) =>{
//         if (answer === correctAnswers[index]){
//             score += 1;
//         }
//     });
    
//     // resultDiv.innerHTML = `your score is ${score}/${correctAnswers.length}`;
// })
// function alert(){
//     alert(`your score is ${score}/${correctAnswers.length}`);
// }