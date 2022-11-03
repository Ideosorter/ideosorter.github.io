var lang
var questions
var questionId
var buttons
var answerpath = []

function next_question(sel) {
    if (questions[questionId].results[sel] == null) {
        answerpath.push(questionId)
        questionId = questions[questionId].nextquestion[sel]
        init_question()
    } else {
        location.href = `results.html?${lang}&${questions[questionId].results[sel]}`
    }
}

function prev_question(){
    if(answerpath.length == 0){
        location.href = `index.html?${lang}`
    } else {
        questionId = answerpath.at(-1)
        answerpath.pop()
        init_question()
    }
}

function init_question() {
    console.log(questions,buttons)
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

async function load_ui(quiz){
    document.getElementById("quiz_title").innerHTML = quiz.title
    if(Array.prototype.at){
        document.getElementById("back_button").innerHTML = quiz.back
    } else {
        document.getElementById("back_button").style.display = "none"
    }
    buttons = await fetch(`./json/${lang}/buttons-${lang}.json`)
        .then(response => response.json())
    questions = await fetch(`./json/${lang}/questions-${lang}.json`)
        .then(response => response.json())
    questionId = Object.keys(questions)[0]
    init_question()
}

function parse_langs(data){
    let langs = []
    for(let i=0; i < data.length; i++){
        langs.push(data[i].id)
    }
    if (langs.some(element => element === window.location.search.substring(1))){
        lang = window.location.search.substring(1)
    } else {
        lang = "en"
    }
    fetch(`./json/${lang}/ui-${lang}.json`)
        .then(response => response.json())
        .then(data => load_ui(data.quiz))
}

window.onload = () => fetch(`./json/langs.json`)
    .then(response => response.json())
    .then(data => parse_langs(data))
