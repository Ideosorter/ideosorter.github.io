import i18nBuilder from "https://unpkg.com/@aurium/i18n@0.4"

const langRequested = window.location.search.substring(1).split('&')[0]
const langEnforce = langRequested ? [langRequested] : null

export async function loadL10n() {
    const langs = ['en', 'pt']
    const [en, pt] = await Promise.all(
        langs.map(lang =>
            fetch(`./scripts/l10n/${lang}.json`).then(res => res.json())
        )
    ).catch(err =>
        alert(`Fail to load localization data.\n\n${err.message}`)
    )
    window.i18n = i18nBuilder({ en, pt }, langEnforce)
}
