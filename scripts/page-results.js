const ideo = window.location.search.split("&")[1]

function throw404(){
    let lottieScript = document.createElement("script")
    lottieScript.setAttribute("src", "https://unpkg.com/@lottiefiles/lottie-player@0.4.0/dist/lottie-player.js")
    document.body.appendChild(lottieScript)
    document.getElementById("result").innerHTML = "Result not found"
    document.getElementById("indexbutton").style.display = "None"
    document.getElementById("creditsbutton").style.display = "None"
    document.getElementById("desc").innerHTML = "<lottie-player src='https://assets7.lottiefiles.com/temp/lf20_0txt7u.json' background='transparent' speed='1' style='width: 300px; height: 300px;margin:auto' loop autoplay></lottie-player>"
}

document.getElementById("results_title").innerHTML = i18n.ui_results_title
document.getElementById("indexbutton").innerHTML = i18n.ui_results_back
document.getElementById("indexbutton").onclick = () => location.href = `index.html?${i18n.$lang}`
document.getElementById("creditsbutton").innerHTML = i18n.ui_results_credits

if (i18n.$l10nData.en[`ideo_${ideo}`]) { // has translation defined to this ideo.
    document.getElementById("image").src = `assets/flags/${ideo}_flag.svg`
    document.getElementById("result").innerHTML = i18n[`ideo_${ideo}`]
    document.getElementById("desc").innerHTML = i18n[`ideo_${ideo}_desc`]
} else {
    throw404()
}
