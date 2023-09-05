// Get all relevent elements from html var name = document. getElement/ querySelect
var startButton = document.querySelector("#start-screen");
var timerElement = document.querySelector(".time");
var fullQuestion = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var questionChoices = document.querySelector("#choices")


var questionsList = [
    {
        title: "Which data type do you use to show that something is true or false?",
        choices: ["string", "boolean", "null"],
        answer: "boolean"
    },
    {
        title: "What syntax do you use to make a timer counting down from 60?",
        choices: ["setInterval", "function", "setAttribute"],
        answer: "setInterval"
    },
    {
        title: "Which is the correct way to write a for loop for an array?",
        choices: ["for(i=0; i<array.length; i++){}", "for(let i=0; i<array.length; i++){}", "for(i=0 i<array.length i++){}" ],
        answer: "for(let i=0; i<array.length; i++){}"
    },
    {
        title: "How do you select all elements from html file to javaScript?",
        choices: ["querySelector", "getElementById", "querySelectorAll"],
        answer: "querySelectorAll"
    }

];

var timer;

function startQuiz(){
    timer = 60
    startTimer()
    renderQuestion()

}



// Things to do
// Start button and start timer
// Close of the text and show questions 1, multiple choice question
// Conditional in function, if === 'correct answer' ,next one & sound else === incorrect answer & sound & time lost.
// ^ repeat with all others, all within a for loop.
// When finished quiz, stop timer and show score
// When timer finished before quiz, stop timer and show score.

