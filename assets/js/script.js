
var score = []
var currentQuestion= [0]

let time = startingSeconds = 60;
timerEl = document.getElementById('time-remaining');
function updateCountDown() {
    seconds = Math.floor(time);
    time--;

    timerEl.innerHTML = (seconds)
}

// Questions in the array
var questions= [
{   q: 'Commonly used date types DO NOT include:',
    a: 'Strings',
    b: 'booleans',
    c: 'alerts', 
    d: 'numbers', 
    answer: 'alerts'
},

{   q: 'A condition in an if / else statement is enclosed with:', 
    a: 'quotes', 
    b: 'curly brackets', 
    c: 'parenthesis', 
    d: 'square brackets', 
    answer: 'curly brackets'
},

{   q:'Arrays in Javascript can be used to store:', 
    a: 'numbers and strings', 
    b: 'booleans', 
    c: 'other arrays', 
    d: 'all the above', 
    answer: 'all the above'
},

{   q: 'String values are enclosed in a:', 
    a: 'commas', 
    b: 'curly brackets', 
    c: 'quotes', 
    d: 'parenthesis', 
    answer: 'quotes'
}]




for (let i = 0; i < questions.length; i++) {
   console.log(questions[i])
  }


var startButton = document.querySelector(".startButton")

startButton.addEventListener("click", function() {
    currentQuestion   // Cycles "current question" variable, which is attached to the questions array to the next [i]
    createPage()        // Creates page with question and answer

});

answerButtonEl = document.getElementById("answer-buttons")



var createPage = function () {
    // create container to hold elements
    startButton.hidden = true
    let quizEl = document.querySelectorAll(".quiz-container");
    
    //Variable questions
    var questionText=document.createElement("h2");   // Creates page with question and answer
        questionText.textContent = questions[currentQuestion].q    //I have an array item, but not inserted yet
        document.querySelector(".question-text").innerHTML=""   // selects where to insert array item
        document.querySelector(".question-text").appendChild(questionText)    // inserts array item into HTML

  
    // create buttonA
    var answerButtonA = document.createElement("button");
        answerButtonA.textContent = questions[currentQuestion].a;
        answerButtonA.className = "answerButtonA";
        answerButtonEl.appendChild(answerButtonA);
        answerButtonA.addEventListener("click", function() {

    if (questions[currentQuestion].a == questions[currentQuestion].answer)
   // { score[+25] } else {timerEl-10}
        
        currentQuestion++   // Cycles "current question" variable, which is attached to the questions array to the next [i]
        createPage()        // Creates page with question and answer
    
    });


// create buttonB
var answerButtonB = document.createElement("button");
  answerButtonB.textContent = questions[currentQuestion].b;
  answerButtonB.className = "answerButtonB";
  answerButtonEl.appendChild(answerButtonB);
  answerButtonB.addEventListener("click", function() {

    if (questions[currentQuestion].b === questions[currentQuestion].answer)
    { score[+25] } else {timerEl-10}
      currentQuestion++   // Cycles "current question" variable, which is attached to the questions array to the next [i]
      createPage()        // Creates page with question and answer
  
  });


// create buttonC
var answerButtonC = document.createElement("button");
  answerButtonC.textContent = questions[currentQuestion].c;
  answerButtonC.className = "answerButtonC";
  answerButtonEl.appendChild(answerButtonC);
  answerButtonC.addEventListener("click", function() {

    if (questions[currentQuestion].c === questions[currentQuestion].answer)
    { score[+25] } else {timerEl-10}
      currentQuestion++   // Cycles "current question" variable, which is attached to the questions array to the next [i]
      createPage()        // Creates page with question and answer
  
  });


// create buttonD
var answerButtonD = document.createElement("button");
  answerButtonD.textContent = questions[currentQuestion].d;
  answerButtonD.className = "answerButtonD";
  answerButtonEl.appendChild(answerButtonD);
  answerButtonD.addEventListener("click", function() {

    if (questions[currentQuestion].d === questions[currentQuestion].answer)
    { score[+25],
      alert = "Correct!" 
    }

    else {
      timerEl-10,
      alert = "Wrong!"
    }
      currentQuestion++   // Cycles "current question" variable, which is attached to the questions array to the next [i]
      createPage()        // Creates page with question and answer
  
  });







};
