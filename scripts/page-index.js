import questions from "./questions.js"

const results = Object.values(questions)
    .flatMap(q => Object.values(q.results))   // Get all results in a one dim array
    .filter((r, i, arr)=> arr.indexOf(r)===i) // Remove repeated items

const langDropdown = document.getElementById("langDropdown")

langDropdown.addEventListener("change", ()=> {
    location.href = `index.html?${langDropdown.value}`
})

i18n.$l10nLangs.forEach(lang => {
    const selected = lang === i18n.$lang
    langDropdown.innerHTML += `<option value="${lang}" ${selected&&"selected"}>${i18n.$l10nData[lang].lang_name}</option>`
})

document.getElementById("title").innerHTML = i18n.ui_index_title
document.getElementById("text_body").innerHTML = i18n.ui_index_text
document.getElementById("startbutton").innerHTML = i18n.ui_index_start
document.getElementById("treebutton").innerHTML = i18n.ui_index_tree
document.getElementById("contacts").innerHTML = i18n.ui_index_contacts
document.getElementById("contacts_info").innerHTML = i18n.ui_index_contact_info
document.getElementById("startbutton").onclick = () => location.href = `quiz.html?${i18n.$lang}`
document.getElementById("treebutton").onclick = () => location.href = `tree.html?${i18n.$lang}`
document.getElementById("ideo_length").innerHTML = results.length
