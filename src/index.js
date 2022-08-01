const questions = [
    {
        id: 1,
        answers: [
            'answer 1', 'answer 2', 'answer 3', 'answer 4'
        ],
        question: "This is question 1", 
        correct: 'answer 1',
    }
]
const displayQuestion = document.querySelector('header')
const questionsForm = document.querySelector('.questions')
const startButton = document.querySelector('#start')
let questionIndex = 0
let totalScore = 0

function startquiz() {
    console.log(startButton);
    startButton.addEventListener('click', (event) => {
        event.preventDefault() // prevents the default behaviour of reloading page/sending data to a server
        console.log(event);
        
        //const currentQuestion = questions[questionIndex]
        startButton.setAttribute('id', 'answer')
        currentQuestion = questions[questionIndex];
        currentAnswer = questions[questionIndex].answers;
        for(let i=0; i < currentAnswer.length; i++) {
            console.log(currentAnswer[i]);
            const answersNode = document.createElement('button');
            answersNode.setAttribute('class', 'answer');
            answersNode.setAttribute('value', currentAnswer[i]);
            displayQuestion.innerHTML = currentQuestion.question
            questionsForm.appendChild(answersNode)
    
            console.log(questionsForm);
            // for(let j=0; i < questions[i].answers.length; j++) {
            //     questionsForm.textContent = questions[i].answers[j]
            //     console.log(questions[i].answers[j]);
            //     return 
            // }
        }
        questionsForm.addEventListener('click', (event) => {
            selectedAnswer = event.target.getAttribute("value");
            console.log(selectedAnswer, currentQuestion.correct)
            if (selectedAnswer == currentQuestion.correct){
                console.log("correct answer selected")
                totalScore += 1
                console.log(totalScore)
            }
            // after the click, update your button values to the next set of data
            // if you reach the end where questionIndex == questions.length,
            // exit out of here and return to the user the total score
        });
    
    }) 

}

startquiz()

// Set interval function for time, setinterval, settimeout, clear interval, localstorage.getitem, 
// localstorage.setitem. Use even listener objects. A new function endQuiz, startTimer, saveHighScore local Storage
// Display none, add class hidden setAttribute