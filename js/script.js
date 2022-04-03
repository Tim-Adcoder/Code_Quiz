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
var questionIndex = 0

// time intervals
var timeEl = document.querySelector("#timer")
var secondsLeft = 15

//info storage

//add initial variables
var contestantList = document.querySelector("#contestant-list")
var initialForm = document.querySelector("#initial-form")
var initialInput = document.querySelector("#initial-text");
var clearBtn = document.querySelector("#clearbtn")
var nameList= document.querySelector("#saved-name")
var lists = [];

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
  };  

});

function showQuestion () {
  var i = questionIndex
   questionEl.innerText = myQuestions[i].question,
   answerBtnA.innerText = myQuestions[i].answers.a,
   answerBtnB.innerText = myQuestions[i].answers.b,
   answerBtnC.innerText = myQuestions[i].answers.c,
   answerBtnD.innerText = myQuestions[i].answers.d;
   questionIndex++;

   //adjust this if adding more questions
  if (questionIndex >= 6) {
    questionPage.classList.add("hide");
    resultPage.classList.remove("hide")
  };
};

//when question is answered incorrectly 
// time is subtracted from the clock
function TimeReduced () {

}

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
      question: "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
      answers: {
        a : "last()",
        b : "put()", 
        c : "push()", 
        d : "None of the above.", 
    },
      correctAnswer : 'c'
    },
    {
      question: "Which of the following code creates an object?",
        answers: {
          a : "var book = Object();", 
          b : "var book = new Object();", 
          c : "var book = new OBJECT();",
          d : "var book = new Book();"
        },
        correctAnswer : 'b'
      },

      {
        question: "Which of the following function of Number object returns the number's value?",
        answers: {
          a : "toString()", 
          b : "valueOf()", 
          c : "toLocaleString()", 
          d : "toPrecision()", 
        },
        correctAnswer : 'b'
      },
      {
        question: "Which of the following function of String object extracts a section of a string and returns a new string?",
        answers: {
          a : "<scripting>",
          b : "<javascript>", 
          c : "<script>",
          d : "<js>", 
        },
        correctAnswer : 'c'
      },
      {
        question: "Did you enjoy the quiz?",
        answers: {
          a : "slice()", 
          b : "split()", 
          c : "replace()", 
          d : "search()", 
        },
        correctAnswer : 'a'
      },
      {
        question: "Did you enjoy the quiz?",
        answers: {
          a : "slice()", 
          b : "split()", 
          c : "replace()", 
          d : "search()", 
        },
        correctAnswer : 'a'
      },
  
  
  
    ]