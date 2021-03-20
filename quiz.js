questionNumber = 0
init_question()
function init_question() {
    document.getElementById("question-text").innerHTML = questions[questionNumber].question
    // hides everything
    document.getElementById("Answer1").style.display = "none"
    document.getElementById("Answer2").style.display = "none"
    document.getElementById("Answer3").style.display = "none"
    document.getElementById("Answer4").style.display = "none"
    document.getElementById("Answer5").style.display = "none"
    document.getElementById("Answer6").style.display = "none"
    document.getElementById("Answer7").style.display = "none"
    document.getElementById("Answer8").style.display = "none"
    document.getElementById("Answer9").style.display = "none"
    document.getElementById("Answer10").style.display = "none"
    document.getElementById("Answer11").style.display = "none"
    document.getElementById("Answer12").style.display = "none"
    document.getElementById("Answer13").style.display = "none"
    document.getElementById("Answer14").style.display = "none"
    document.getElementById("Answer15").style.display = "none"
    document.getElementById("Answer16").style.display = "none"
    switch (questions[questionNumber].answers) { // todo fix the fucking numbers holy shit
        case "1": // Answer 1 (Yes) and Answer 2 (No) are displayed
            document.getElementById("Answer1").style.display = "block"
            document.getElementById("Answer2").style.display = "block"
            break
        case "2": // Answer 1 (Yes), Answer 2 (No) and Answer 3 (The state shouldn"t exist) are displayed
            document.getElementById("Answer1").style.display = "block"
            document.getElementById("Answer2").style.display = "block"
            document.getElementById("Answer3").style.display = "block"
            break
        case "3": // Answer 4 (Conditional) and Answer 5 (Unconditional) are displayed
            document.getElementById("Answer4").style.display = "block"
            document.getElementById("Answer5").style.display = "block"
            break
        case "4": // Answer 6 (Capitalism) and Answer 7 (Corporatism) are displayed
            document.getElementById("Answer6").style.display = "block"
            document.getElementById("Answer7").style.display = "block"
            break
        case "5": // Answer 8 (Workers) and Answer 10 (State) are displayed
            document.getElementById("Answer8").style.display = "block"
            document.getElementById("Answer10").style.display = "block"
            break
        case "6": // Answer 9 (Unions) and Answer 10 (State) are displayed
            document.getElementById("Answer9").style.display = "block"
            document.getElementById("Answer10").style.display = "block"
            break
        case "7": // Answer 11 (Electoralism) and Answer 12 (Revolution) are displayed
            document.getElementById("Answer11").style.display = "block"
            document.getElementById("Answer12").style.display = "block"
            break
        case "8": // Answer 13 (Welfare) and Answer 14 (Not needed) are displayed
            document.getElementById("Answer13").style.display = "block"
            document.getElementById("Answer14").style.display = "block"
            break
        case "9": // Answer 15 (Dasein) and Answer 16 (Class/Nation) are displayed
            document.getElementById("Answer15").style.display = "block"
            document.getElementById("Answer16").style.display = "block"
    }
}
function next_question(indx) {
    switch(indx) {
        // gets the right answer
        // todo turn it into arrays perhaps?
        // so that we don't have to do this perhaps?
        case 1:
            if (questions[questionNumber].results.a == 0) {
                questionNumber = questions[questionNumber].answer.a
                init_question()
            } else {
                location.href = "results.html" + "?=" + questions[questionNumber].results.a
            }
            break
        case 2:
            if (questions[questionNumber].results.b == 0) {
                questionNumber = questions[questionNumber].answer.b
                init_question()
            } else {
                location.href = "results.html" + "?=" + questions[questionNumber].results.b
            }
            break
        case 3:
            if (questions[questionNumber].results.c == 0) {
                questionNumber = questions[questionNumber].answer.c
                init_question()
            } else {
                location.href = "results.html" + "?=" + questions[questionNumber].results.c
            }

    }
}