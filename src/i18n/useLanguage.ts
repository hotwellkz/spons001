import { useState, useEffect, useCallback } from 'react'
import { Language, translations, languageNames } from './translations'

const STORAGE_KEY = 'selected-language'
const IP_API_URL = 'https://ipapi.co/json/'

// Определение языка по коду страны
const getLanguageByCountry = (countryCode: string): Language => {
  const countryToLanguage: Record<string, Language> = {
    'KZ': 'kk', // Казахстан - казахский
    'RU': 'ru', // Россия - русский
    'BY': 'ru', // Беларусь - русский
    'UA': 'ru', // Украина - русский
    'KG': 'ru', // Кыргызстан - русский
    'UZ': 'ru', // Узбекистан - русский
    'TJ': 'ru', // Таджикистан - русский
    'TM': 'ru', // Туркменистан - русский
    'AM': 'ru', // Армения - русский
    'AZ': 'ru', // Азербайджан - русский
    'GE': 'ru', // Грузия - русский
    'MD': 'ru', // Молдова - русский
  }
  
  return countryToLanguage[countryCode] || 'en' // По умолчанию английский
}

// Определение языка по IP
export const detectLanguageByIP = async (): Promise<Language> => {
  try {
    const response = await fetch(IP_API_URL)
    const data = await response.json()
    
    if (data.country_code) {
      return getLanguageByCountry(data.country_code)
    }
  } catch (error) {
    console.warn('Failed to detect language by IP:', error)
  }
  
  // Fallback: определение по языку браузера
  const browserLang = navigator.language || (navigator as any).userLanguage
  if (browserLang.startsWith('kk')) return 'kk'
  if (browserLang.startsWith('ru')) return 'ru'
  if (browserLang.startsWith('en')) return 'en'
  
  return 'en' // По умолчанию английский
}

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('en')
  const [isDetecting, setIsDetecting] = useState(true)

  // Инициализация языка
  useEffect(() => {
    const initializeLanguage = async () => {
      // Проверяем сохраненный язык
      const savedLanguage = localStorage.getItem(STORAGE_KEY) as Language | null
      
      if (savedLanguage && ['ru', 'en', 'kk'].includes(savedLanguage)) {
        setLanguage(savedLanguage)
        setIsDetecting(false)
        return
      }

      // Если язык не сохранен, определяем по IP
      try {
        const detectedLanguage = await detectLanguageByIP()
        setLanguage(detectedLanguage)
        localStorage.setItem(STORAGE_KEY, detectedLanguage)
      } catch (error) {
        console.warn('Failed to detect language:', error)
        setLanguage('en')
      } finally {
        setIsDetecting(false)
      }
    }

    initializeLanguage()
  }, [])

  // Смена языка
  const changeLanguage = useCallback((newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem(STORAGE_KEY, newLanguage)
  }, [])

  return {
    language,
    changeLanguage,
    t: translations[language],
    languageNames,
    isDetecting
  }
}

