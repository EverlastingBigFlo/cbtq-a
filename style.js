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

function show(){
    display.innerHTML = `<h2>${questions[index].question}</h2>`;
    questions[index].options.forEach(function (params, i) {
        display.innerHTML += `<input type = "Radio" name = "answer" ${
            questions[index].optionChose == params ? "checked" : ""
        } onclick = "answer('${params}')"> ${params}</input> <br>`;
    });

    display.innerHTML += `<button class = " btn btn-danger" onclick = "previous()">Previous</button>
                          <button class = " btn btn-danger" onclick = "next()">Next</button>
                          <button class = " btn btn-danger" onclick = "submit()">Submit</button>`;

    btn.style.show = "none";
};


function start(){
    show();
};

function next(){
    if (questions[index + 1]){
        index++;
        show()
    };
};

function previous(){
    if (questions[index - 1]){
        index--;
        show()
    };
};

function submit(){
    let score;

    score = questions.filter(function (pa) {

        return pa.optionChose == pa.answer;

    });

    display.innerHTML = `<h2>  Your Score is ${score.length} ${questions.length}</h2>`;

    display.innerHTML = `<h2> Your Score is ${
        (score.length / questions.length) * 100
    }`;
// % <h2><button onclick='result()'> Show Result</button>
    // clearTimeout(timer);
};

// function result(){
//     questions.forEach(function(pa){
//         clearTimeout(timer);
//         table.innerHTML += 
//         `<td>${pa.question}</td>
//         <td>${pa.optionChose}</td>
//         <td>${pa.answer}</td>`
//     });
// };







































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