questionId = Object.keys(questions)[0]
init_question()
function init_question() {
    document.getElementById("question-text").innerHTML = questions[questionId].question
    var buttonHTML = ""
    for(var i = 0; i<questions[questionId].answers.length; i++) {
        buttonHTML += "<button class=\"button\" onclick=\"next_question(\'" + questions[questionId].answers[i] + "\')\" style=\"background-color: " + buttons[questions[questionId].answers[i]].color + ";\" id=\"Answer1\">" + buttons[questions[questionId].answers[i]].text + "</button><br>"
    }
    document.getElementById("buttonholder").innerHTML = buttonHTML
}
function next_question(indx) {
    if (questions[questionId].results[indx] == null) {
        questionId = questions[questionId].nextquestion[indx]
        init_question()
    } else {
        location.href = "results.html" + "?=" + questions[questionId].results[indx]
    }
}