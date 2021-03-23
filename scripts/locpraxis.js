function getParameterByName(name) {
    url = window.location.href
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
function changeLang(toLang) {
    window.location.href = window.location.href.replace("lang=" + lang, "lang=" + toLang)
}
lang = getParameterByName("lang")

if (lang != undefined) {
    switch (location.href.split("/").slice(-1)[0].split("?")[0]) {
        case "index.html":
            document.getElementById("title").innerHTML = localisation[lang].title
            document.getElementById("index_startbutton").innerHTML = localisation[lang].index_startbutton
            document.getElementById("index_text").innerHTML = localisation[lang].index_text
            document.getElementById("index_contacts_text").innerHTML = localisation[lang].index_contacts_text
            document.getElementById("index_contacts").innerHTML = localisation[lang].index_contacts
            // buttons
            document.getElementById("index_startbutton").onclick = function () {
                location.href = "instructions.html?lang=" + lang
            }
            // dropdown
            window.onclick = function (event) {
                if (!(event.target.id == "dropbtn")) {
                    var dropdown = document.getElementById("dropdown-content")
                    if (dropdown.classList.contains('show')) {
                        dropdown.classList.remove('show')
                    }
                }
            }
            // dropdown settings
            document.getElementById("dropbtn").innerHTML = localisation[lang].name
            for (var i = 0; i < Object.keys(localisation).length; i++) {
                document.getElementById("dropdown-content").innerHTML += "<a onclick=\"changeLang(\'" + Object.keys(localisation)[i] + "\')\">" + Object.values(localisation)[i].name + "</a>"
            }
            break
        case "instructions.html":
            document.getElementById("title").innerHTML = localisation[lang].title
            document.getElementById("instructions_title").innerHTML = localisation[lang].instructions_title
            document.getElementById("instructions_text").innerHTML = localisation[lang].instructions_text
            document.getElementById("instructions_gotitbutton").innerHTML = localisation[lang].instructions_gotitbutton
            document.getElementById("instructions_nevermind").innerHTML = localisation[lang].instructions_nevermind
            // buttons
            document.getElementById("instructions_gotitbutton").onclick = function () {
                location.href = "quiz.html?lang=" + lang
            }
            document.getElementById("instructions_nevermind").onclick = function () {
                location.href = "index.html?lang=" + lang
            }
            break
        case "quiz.html":
            document.getElementById("title").innerHTML = localisation[lang].title
        case "results.html":
            document.getElementById("title").innerHTML = localisation[lang].title
    }
} else {
    if (window.location.href.includes("?")) {
        window.location.href = window.location.href + "&lang=en"
    } else if (window.location.href.endsWith("/")) {
        window.location.href = window.location.href + "index.html?lang=en"
    } else {
        window.location.href = window.location.href + "?lang=en"
    }
}