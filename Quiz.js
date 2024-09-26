const zequestions = document.getElementById('Ze-questions')
const questionElement = document.getElementById('question');
const answerbuttonEL = document.getElementById('de-answer');
const nextbutton = document.getElementById('ze-next-thing');

let currentQuestionIndex = 0;
let questions = [];
let score = 0; 

fetch('Quiz.json')
    .then(response => response.json())
    .then(data => {
        questions = data;
        revealquestion(questions[currentQuestionIndex]);
    });

 function revealquestion(question) {
    questionElement.innerText = question.question;
    answerbuttonEL.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => chooseanswer(answer));
        answerbuttonEL.appendChild(button);
    });
}

function chooseanswer(answer) {
    if (answer.correct) {
        score++;
        alert('Correct!');
    } else {
        alert('Wrong!');
    }
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        revealquestion(questions[currentQuestionIndex])
    } else {
        alert(`Quiz Completed! Your score is ${score}/${questions.length}`);
        resetQuiz();
    }
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    revealquestion(questions[currentQuestionIndex]);
}
