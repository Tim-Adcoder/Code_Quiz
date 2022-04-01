var startBtn = document.querySelector("#startbtn");
var startPage = document.body.querySelector(".startpage")
var questionPage = document.body.querySelector('.questionpage')
var resultPage = document.body.querySelector('.resultpage')
var questionEl = document.querySelector("#question")
var answerBtn = document.querySelector(".answerbtn")

// time intervals
var timeEl = document.querySelector("#timer");
var secondsLeft = 40;

//click the start buttom
//Timer starts and presented with a question
startBtn.addEventListener('click', clickStartBtn)

function clickStartBtn () {
    console.log("step 1:clicked start!")
    startBtn.classList.add("hide")
    startPage.classList.add("hide")
    questionPage.classList.remove('hide')
    QuestionIndex = 0
    setQuestion()
    setTimer()

};

// show question on the page one by one
function setQuestion () {
    showQuestion(QuestionIndex)
};

function setTimer() {
   var timerInterval = setInterval(function() {
     secondsLeft--;
     timeEl.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0) {
      questionPage.classList.add("hide")
      clearInterval(timerInterval);
      resultPage.classList.remove("hide")
  
    }
   }, 4000);
}

function showQuestion (myQuestions) {
    questionEl.innerText = myQuestions.question

}


//when answer a question 
// then present the next question


//when question is answered incorrectly 
// time is subtracted from the clock


//when time reaches 0 and all questions are answered
// then will reach to the result page 

//result page will include initals and sore



var myQuestions = [
    {
      question: "which year does the great man, Brendan Eich, who invented Javascript, was born in? ",
      answers: {
        a: "1960",
        b: "1961",
        c: "1962",
        b: "1963"
      },
      correctAnswer: "b"
    },
    {
        question: "A?",
        answers: {
          a: "a",
          b: "b",
          c: "c",
          b: "d"
        },
        correctAnswer: "a"
      },
      {
        question: "B",
        answers: {
          a: "",
          b: "b",
          c: "",
          b: ""
        },
        correctAnswer: "b"
      },
      {
        question: "C",
        answers: {
          a: "",
          b: "",
          c: "c",
          b: ""
        },
        correctAnswer: "c"
      }]