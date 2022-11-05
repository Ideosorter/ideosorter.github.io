let langList = ""

Object.entries(i18n.$l10nData).forEach(([lang, langData])=>
    langList +=
        `<p>${langData.lang_name}:</p>` +
        `<ul>${langData.translators}</ul>`
)

document.getElementById("credits_body").innerHTML = langList
