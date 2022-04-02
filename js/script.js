var startBtn = document.querySelector("#startbtn");
var startPage = document.body.querySelector(".startpage")
var questionPage = document.body.querySelector('.questionpage')
var resultPage = document.body.querySelector('.resultpage')
var questionEl = document.querySelector("#question")
var answerBtnList = document.querySelector(".answerbtnlist")
// var answerBtnA = document.querySelector(".answerbtna")
// var answerBtnB = document.querySelector(".answerbtnb")
// var answerBtnC = document.querySelector(".answerbtnc")
// var answerBtnD = document.querySelector(".answerbtnd")
var questionIndex = 0

// time intervals
var timeEl = document.querySelector("#timer")
var secondsLeft = 15

//info storage
var savedList = document.querySelector(".scorelist")
var savedName = document.querySelector("#saved-name")
var savedGrade = document.querySelector("#saved-grade")

//click the start buttom
//Timer starts and presented with a question
startBtn.addEventListener('click', clickStartBtn)



function clickStartBtn () {
    console.log("step 1:clicked start!")
    startBtn.classList.add("hide")
    startPage.classList.add("hide")
    questionPage.classList.remove('hide')
    setQuestion()
    setTimer()
};

// show a question on the page one at a time 
function setQuestion () {
    showQuestion()
    // resetState()
};


//when answer a question 
// then present the next question
answerBtnList.addEventListener("click", function(event) {
  var selectAnswer = event.target
  // how do I store points 
  var correct = selectAnswer.date

  if (selectAnswer.matches(".btn")) {
    console.log("I have answered a question!")
    // then present the next question
    showQuestion()
    ;
  };  

  button.addEventListener('click', selectAnswer)



});

function showQuestion () {
  var i = questionIndex
   questionEl.innerText = myQuestions[i].question,

  myQuestions[i].answers[i].text.forEach(element => {
    var button = document.createElement('button')
    button.innerText = myQuestions[i].answers[i].text
    button.classList.add('btn')
    if (!answers.correct) {
      button.dataset.correct = answers[i].correct
    }
    answerBtnList.appendChild(button)
  });
  //  answerBtnA.innerText = myQuestions[i].answers.a,
  //  answerBtnB.innerText = myQuestions[i].answers.b,
  //  answerBtnC.innerText = myQuestions[i].answers.c,
  //  answerBtnD.innerText = myQuestions[i].answers.d;
   questionIndex++;

   //adjust this if adding more questions
  if (questionIndex >= 5) {
    questionPage.classList.add("hide");
    resultPage.classList.remove("hide")
  };

 };

//when question is answered incorrectly 
// time is subtracted from the clock


//when time reaches 0 and all questions are answered
// then will reach to the result page 
function setTimer() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

   if(secondsLeft === 0) {
     questionPage.classList.add("hide");
     clearInterval(timerInterval);
     resultPage.classList.remove("hide")
   }
  }, 1500);
};
//result page will include initals and sore



let myQuestions = [
    {
      question: "which year does the great man, Brendan Eich, who invented Javascript, was born in? ",
      answers: [
        {text : "1960", correct : "false"},
        {text : "1961", correct : "True"},
        {text : "1962", correct : "false"},
        {text : "1963", correct : "True"}
      ],
    },
    {
      question: "Java script can be used for Storing the form's contents to a database file on the server",
        answers: [
          {text : "Yes", correct : "True"},
          {text : "NO", correct : "false"},
          {text : "Don't Know", correct : "false"},
          {text : "Maybe", correct : "false"}
        ],
      },

      {
        question: "Which of the following is a server-side Java Script object?",
        answers: [
          {text : "Function", correct : "True"},
          {text : "File", correct : "false"},
          {text : "FileUpload", correct : "false"},
          {text : "Date", correct : "false"}
        ],
      },
      {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
          {text : "<scripting>", correct : "false" },
          {text : "<javascript>", correct : "false" },
          {text : "<script>", correct : "True" },
          {text : "<js>", correct : "false" }
        ],
      },
      {
        question: "Did you enjoy the quiz?",
        answers: [
          {text : "<Nope>", correct : "false" },
          {text : "<Yes>", correct : "false" },
          {text : "<No>", correct : "True" },
          {text : "<Okay>", correct : "false" }
        ],
      },
  
  
    ]