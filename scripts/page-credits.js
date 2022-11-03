function parse_langs(data){
    let langList = ""
    for(let i=0; i < data.length; i++){
        langList += "<p>" + data[i].name + ":</p><ul>" + data[i].authors + "</ul>"
    }
    document.getElementById("credits_body").innerHTML = langList
}

window.onload = () => fetch(`./json/langs.json`)
    .then(response => response.json())
    .then(data => parse_langs(data))