#!/usr/bin/env node

// This script can be used to create or update language (or localization) files.

const fs = require('fs')
const path = require('path')
const readline = require('readline')
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

rl.question(`Input your new language's prefix (eg: en/es/fr/de): `, (lang) => {
    rl.question(`Input ${lang} language full name: `, (langName) => {
        rl.question(`Input your github username: `, (user) => {
            makeLang(lang, langName, user)
            rl.close()
        })
    })
})

function makeLang(lang, langName, user) {
    const file = path.normalize(`${__dirname}/../scripts/l10n/${lang}.json`)
    const enData = require("../scripts/l10n/en.json")
    let newData = {}
    try {
        newData = require(file)
        console.log(`Updating localization file ${file}...`)
    }
    catch(err) {
        newData.translators = `<li><a href="https://github.com/${user}">${user}</a></li>`
        console.log(`Creating new localization file ${file}...`)
    }
    Object.entries(enData).forEach(([key])=> newData[key] ||= "")
    newData.lang_name = langName
    fs.writeFileSync(file, JSON.stringify(newData, null, '  '))
}
