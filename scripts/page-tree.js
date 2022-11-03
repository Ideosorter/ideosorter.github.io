"use strict";

let lang

function build_tree(questions, buttons, results) {

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
    const result = results[resultId]
    const branch = document.createElement('article')
    const answerEl = document.createElement('span')
    const resultEL = document.createElement('strong')
    const descEL = document.createElement('p')
    const img = document.createElement('img')
    answerEl.innerText = buttons[answer].text
    branch.appendChild(answerEl)
    branch.tabIndex = 0 // Make it focusable
    root.appendChild(branch)
    resultEL.innerText = result.result
    branch.appendChild(resultEL)
    descEL.innerText = result.desc
    branch.appendChild(descEL)
    img.src = `assets/flags/${resultId}_flag.svg`
    branch.appendChild(img)
  }

  let questionId = Object.keys(questions)[0]
  let root = document.getElementById("tree")
  while (root.firstChild) root.firstChild.remove()
  build_brabch(root, null, questionId)
}

async function load_ui(tree){
    document.getElementById("tree_title").innerText = tree.title
    document.getElementById("tree_info").innerText = tree.info
    const buttons = await fetch(`./json/${lang}/buttons-${lang}.json`)
        .then(response => response.json())
    const questions = await fetch(`./json/${lang}/questions-${lang}.json`)
        .then(response => response.json())
    const results = await fetch(`./json/${lang}/results-${lang}.json`)
        .then(response => response.json())
    build_tree(questions, buttons, results)
}

function parse_langs(data){
    const langs = data.map(l => l.id)
    const queryLang = window.location.search.substring(1)
    lang = langs.find(l => l === queryLang) || 'en'
    fetch(`./json/${lang}/ui-${lang}.json`)
        .then(response => response.json())
        .then(data => load_ui(data.tree))
}

window.onload = () => fetch(`./json/langs.json`)
    .then(response => response.json())
    .then(data => parse_langs(data))
