import { defaultLang, translations } from './translations'

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/')
  if (lang in translations) return lang as keyof typeof translations
  return defaultLang
}

export function getTranslations(lang: keyof typeof translations) {
  const selectedLang =
    lang in translations ? (lang as keyof typeof translations) : 'es'

  return translations[selectedLang]
}
