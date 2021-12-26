var lang
var ideo

function throw404(){
    let lottieScript = document.createElement("script")
    lottieScript.setAttribute("src", "https://unpkg.com/@lottiefiles/lottie-player@0.4.0/dist/lottie-player.js")
    document.body.appendChild(lottieScript)
    document.getElementById("result").innerHTML = "Result not found"
    document.getElementById("indexbutton").style.display = "None"
    document.getElementById("creditsbutton").style.display = "None"
    document.getElementById("desc").innerHTML = "<lottie-player src='https://assets7.lottiefiles.com/temp/lf20_0txt7u.json' background='transparent' speed='1' style='width: 300px; height: 300px;margin:auto' loop autoplay></lottie-player>"
}

function load_results(data){
    if (typeof data[ideo] != "undefined"){
        document.getElementById("image").src = `assets/flags/${ideo}_flag.svg`
        document.getElementById("result").innerHTML = data[ideo].result
        document.getElementById("desc").innerHTML = data[ideo].desc
    } else {
        throw404()
    }
}

function load_ui(results){
    document.getElementById("results_title").innerHTML = results.title
    document.getElementById("indexbutton").innerHTML = results.back
    document.getElementById("indexbutton").onclick = () => location.href = `index.html?${lang}`
    document.getElementById("creditsbutton").innerHTML = results.credits
    fetch(`./json/${lang}/results-${lang}.json`)
        .then(response => response.json())
        .then(data => load_results(data))
}

function parse_langs(data){
    let langs = []
    for(let i=0; i < data.length; i++){
        langs.push(data[i].id)
    }
    let queryVars = window.location.search.substring(1).split("&")
    ideo = queryVars[1]
    if (langs.some(element => element === queryVars[0])){
        lang = queryVars[0]
        fetch(`./json/${lang}/ui-${lang}.json`)
            .then(response => response.json())
            .then(data => load_ui(data.results))
    } else {
        throw404()
    }
}

window.onload = () => fetch(`./json/langs.json`)
    .then(response => response.json())
    .then(data => parse_langs(data))