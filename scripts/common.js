import { loadL10n } from "./i18n.js"

const currentPage = document.location.href.replace(/.*\/|(\.html|\?).*/g, '') || 'index'

loadL10n().then(()=> import(`./page-${currentPage}.js`))
