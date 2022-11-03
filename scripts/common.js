const currentPage = document.location.href.replace(/.*\/|\.html.*/g, '') || 'index'

import(`./page-${currentPage}.js`)
