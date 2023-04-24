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
        question : "At a conference, 12 members shook hands with each other before & after the meeting. How many total number of hand shakes occurred?",

        options : ["100", "144", "132"],

        answer : "132",

        optionChose : ""
    },

    {
        question : "The day after the day after tomorrow is four days before Monday. What day is it today?",

        options : ["Monday", "Friday", "Saturday"],

        answer : "Monday",

        optionChose : ""
    },

    {
        question : "Forest is to tree as tree is to ?",

        options : ["plant", "leaf", "branch"],

        answer : "leaf",

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

    // document.querySelector('#display')

    display.innerHTML = '';

    display.innerHTML += `<h2 class ="lead">${index+1}.${questions[index].question}</h2>`;
    questions[index].options.forEach((el)=>{
        display.innerHTML+= `<h2><input ${questions[index].optionChose==el? 'checked' :''} type="radio" name="answer" onclick="submit('${el}')">${el}</input></h2>`
    })

    let btns=document.querySelectorAll('.controls');

    btns.forEach((el)=>el.addEventListener('click', myClick))


    // questions[index].options.forEach(function (params, i) {
    //     display.innerHTML += `<input type = "Radio" name = "answer" ${
    //         questions[index].optionChose == params ? "checked" : ""
    //     } onclick = "answer('${params}')"> ${params}</input> <br>`;
    // });

    // display.innerHTML += `<button class = " btn btn-danger" onclick = "previous()">Previous</button>
    //                       <button class = " btn btn-danger" onclick = "next()">Next</button>
    //                       <button class = " btn btn-danger" onclick = "submit()">Submit</button>`;

    // beg.style.show = 'none';
};


function start(){
    show();

};

function myClick(event){
    let forNext,forPrevious;
    event.target.innerHTML == 'Next'?forNext = questions[index+1]:'';
    forNext?index++:'';
    event.target.innerHTML == 'Previous'?forPrevious = questions[index-1]:'';
    forPrevious?index--:'';
    show();
}

function answer(p){
    questions[index].optionChose = p;

    // console.log(questions);
}

function submit(element){
    questions[index].optionChose = element
}

// function next(){
//     if (questions[index + 1]){
//         index++;
//         show()
//     };
//     console.log(questions);
// };

// function previous(){
//     if (questions[index - 1]){
//         index--;
//         show()
//     };
// };

// function submit(){
//     let score;
// display.innerHTML='';   
//     score = questions.filter(function (pa) {

//         return pa.optionChose == pa.answer;

//     });
//     console.log(score);


//     display.innerHTML += `<h2> Your Score is ${
//         score.length / questions.length * 100}`;
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