import { loadL10n } from "./i18n.js"

const currentPage = document.location.href.replace(/.*\/|(\.html|\?).*/g, '') || 'index'

const loadingEl = document.createElement('div')
loadingEl.id = 'loading'
document.body.appendChild(loadingEl)

loadL10n()
    .then(()=> import(`./page-${currentPage}.js`))
    .then(()=> {
        loadingEl.className = 'hide'
        setTimeout(()=> loadingEl.remove(), 1000)
    })
