"use strict";

import buttons from './buttons.js'
import questions from "./questions.js"

let lang = 'pt'

document.getElementById("tree_title").innerText = i18n.ui_tree_title
document.getElementById("tree_info").innerText = i18n.ui_tree_info

function build_brabch(root, answer, questionId) {
    const question = questions[questionId]
    const branch = document.createElement('article')
    const questionEL = document.createElement('strong')
    const children = document.createElement('div')
    if (answer) {
        const answerEl = document.createElement('span')
        answerEl.innerText = buttons[answer].text
        branch.appendChild(answerEl)
    }
    branch.tabIndex = 0 // Make it focusable
    root.appendChild(branch)
    questionEL.innerText = question.question
    branch.appendChild(questionEL)
    branch.appendChild(children)
    question.answers.forEach(answer => {
        if (question.nextquestion[answer]) {
            build_brabch(children, answer, question.nextquestion[answer])
        }
        if (question.results[answer]) {
            build_result(children, answer, question.results[answer])
        }
    })
}

function build_result(root, answer, resultId) {
    const branch = document.createElement('article')
    const answerEl = document.createElement('span')
    const resultEL = document.createElement('strong')
    const descEL = document.createElement('p')
    const img = document.createElement('img')
    answerEl.innerText = buttons[answer].text
    branch.appendChild(answerEl)
    branch.tabIndex = 0 // Make it focusable
    root.appendChild(branch)
    resultEL.innerText = i18n[`ideo_${resultId}`]
    branch.appendChild(resultEL)
    descEL.innerText = i18n[`ideo_${resultId}_desc`]
    branch.appendChild(descEL)
    img.src = `assets/flags/${resultId}_flag.svg`
    branch.appendChild(img)
}

let questionId = Object.keys(questions)[0]
let root = document.getElementById("tree")
while (root.firstChild) root.firstChild.remove()
build_brabch(root, null, questionId)
