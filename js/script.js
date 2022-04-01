var startBtn = document.querySelector("#startbtn");
var startPage = document.body.querySelector(".startpage")
var questionPage = document.body.querySelector('.questionpage')
var resultPage = document.body.querySelector('.resultpage')
var questionEl = document.querySelector("#question")
var answerBtnList = document.querySelector(".answerbtnlist")
var answerBtnA = document.querySelector(".answerbtna")
var answerBtnB = document.querySelector(".answerbtnb")
var answerBtnC = document.querySelector(".answerbtnc")
var answerBtnD = document.querySelector(".answerbtnd")


// time intervals
var timeEl = document.querySelector("#timer");
var secondsLeft = 15;

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
    showQuestion(myQuestions)
    // resetState()
};

function showQuestion () {
  i=0; 
  i = i % myQuestions.length; 
  i = i + 1;
  return questionEl .innerText = myQuestions[i].question,
  answerBtnA .innerText = myQuestions[i].answers.a,
  answerBtnB .innerText = myQuestions[i].answers.b,
  answerBtnC .innerText = myQuestions[i].answers.c,
  answerBtnD .innerText = myQuestions[i].answers.d;
};

//when answer a question 
// then present the next question
answerBtnList.addEventListener("click", function(event) {
  var selectAnswer = event.target
  // how do I store points 
  var correct = selectAnswer.date

  if (selectAnswer.matches(".btn")) {
    console.log("I have answered the first question!")
    // then present the next question
 
  questionEl.innerText = myQuestions[i+1].question;
  answerBtnA .innerText = myQuestions[i+1].answers.a,
  answerBtnB .innerText = myQuestions[i+1].answers.b,
  answerBtnC .innerText = myQuestions[i+1].answers.c,
  answerBtnD .innerText = myQuestions[i+1].answers.d;
  };
});


//when question is answered incorrectly 
// time is subtracted from the clock


//when time reaches 0 and all questions are answered
// then will reach to the result page 
function setTimer() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

   if(secondsLeft === 0) {
     questionPage.classList.add("hide")
     clearInterval(timerInterval);
     resultPage.classList.remove("hide")
   }
  }, 1500);
};
//result page will include initals and sore



let myQuestions = [
    {
      question: "which year does the great man, Brendan Eich, who invented Javascript, was born in? ",
      answers: {
        "a": "1960",
        "b": "1961",
        "c": "1962",
        "d": "1963"
      },
      correctAnswer: "b"
    },
    {
      question: "Java script can be used for Storing the form's contents to a database file on the server",
        answers: {
          "a": "Yes",
          "b": "NO",
          "c": "Don't Know",
          "d": "Maybe"
        },
        correctAnswer: "a"
      },
      {
        question: "Which of the following is a server-side Java Script object?",
        answers: {
          "a": "Function",
          "b": "File",
          "c": "FileUpload",
          "d": "Date"
        },
        correctAnswer: "a"
      },
      {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
          "a": "<scripting>",
          "b": "<javascript>",
          "c": "<script>",
          "d": "<js>"
        },
        correctAnswer: "c"
      },
  
    ]