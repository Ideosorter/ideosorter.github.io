import questions from "./questions.js"
import buttons from "./buttons.js"

let questionId
const answerpath = []

function next_question(sel) {
    if (questions[questionId].results[sel] == null) {
        answerpath.push(questionId)
        questionId = questions[questionId].nextquestion[sel]
        init_question()
    } else {
        location.href = `results.html?${i18n.$lang}&${questions[questionId].results[sel]}`
    }
}

window.prev_question = function prev_question(){
    if(answerpath.length == 0){
        location.href = `index.html?${i18n.$lang}`
    } else {
        questionId = answerpath.at(-1)
        answerpath.pop()
        init_question()
    }
}

function init_question() {
    document.getElementById("question").innerHTML = questions[questionId]["question"]
    const buttonHolder = document.getElementById("buttonholder")
    while (buttonHolder.firstChild) buttonHolder.firstChild.remove()
    let answers = questions[questionId].answers
    for(let i = 0; i<answers.length; i++) {
        let button = buttons[answers[i]]
        let buttonEl = document.createElement("button")
        buttonEl.className = "button"
        buttonEl.addEventListener("click", ()=> next_question(answers[i]))
        buttonEl.style.backgroundColor = button.bgcolor
        buttonEl.style.color = button.textcolor
        buttonEl.innerText = button.text
        buttonHolder.appendChild(buttonEl)
    }
}

document.getElementById("quiz_title").innerHTML = i18n.ui_quiz_title
if(Array.prototype.at){
    document.getElementById("back_button").innerHTML = i18n.ui_quiz_back
} else {
    document.getElementById("back_button").style.display = "none"
}
questionId = Object.keys(questions)[0]
init_question()
