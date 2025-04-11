// stores/language.ts
import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', {
  state: () => ({
    lang: localStorage.getItem('selectedLang') || 'uz' // Default language is Uzbek
  }),
  actions: {
    setLang(lang: string) {
      this.lang = lang
      localStorage.setItem('selectedLang', lang) // Store the selected language in localStorage
    }
  }
})
