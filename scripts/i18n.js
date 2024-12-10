const langRequested = window.location.search.substring(1).split('&')[0]
const langEnforce = langRequested ? [langRequested] : null

export async function loadL10n() {
    const langs = ['cs', 'de', 'en', 'es', 'ca', 'ko', 'ms', 'pt', 'zhcn', 'zhtw', 'fr', 'uk']
    const [l10nDataList, i18nBuilderMod] = await Promise.all([
        Promise.all(langs.map(lang =>
            fetch(`./scripts/l10n/${lang}.json`)
                .then(res => res.json())
                .catch(err => {
                    throw Error(`Fail to load ${lang} lang data.\n\n${err.message}`)
                })
        )),
        import("https://unpkg.com/@aurium/i18n@0.4.1") // parallel loading
    ])
    const i18nBuilder = i18nBuilderMod.default
    const l10nData = {}
    langs.forEach((lang, i) => l10nData[lang] = l10nDataList[i])
    window.i18n = i18nBuilder(l10nData, langEnforce)
}
