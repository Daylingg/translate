interface LanguageMap {
  [key: string]: string;
}
//tipos de lenguages q va a soportar
export const SUPPORT_LANGUAGES: LanguageMap = {
  'es': 'Español',
  'en': 'English',
  'de': 'Deutsch',
  "fr": 'French',
  "it": 'Italian',
  "pt": 'Portuguese',
  "ru": 'Russian',
  "zh": 'Chinese'
}

//de este sitio saco las referencias del audio https://www.techonthenet.com/js/language_tags.php
export const VOICE_FOR_LANGUAGE = {
  en: 'en-GB',
  es: 'es-MX',
  de: 'de-DE',
  fr: 'fr-FR',
  it: 'it-IT',
  pt: 'pt-PT',
  ru: 'ru-RU',
  zh: 'zh-CN'
}

//lenguage automatico
export const AUTO_LANGUAGE = 'auto'