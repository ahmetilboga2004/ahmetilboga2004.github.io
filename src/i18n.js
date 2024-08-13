import { createI18n } from 'vue-i18n'
import tr from '@/locales/tr.json'
import en from '@/locales/en.json'

export default createI18n({
  legacy: false,
  locale: 'tr',
  fallbackLocale: 'en',
  messages: { tr, en }
})
