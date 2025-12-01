import { Language, languageNames } from '../i18n/translations'

interface LanguageSwitcherProps {
  currentLanguage: Language
  onLanguageChange: (lang: Language) => void
}

export function LanguageSwitcher({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) {
  const languages: Language[] = ['ru', 'en', 'kk']

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-slate-800/90 backdrop-blur-sm rounded-xl p-2 border border-slate-700/50 shadow-xl">
        <div className="flex items-center gap-2">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => onLanguageChange(lang)}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                ${
                  currentLanguage === lang
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }
              `}
              aria-label={`Switch to ${languageNames[lang]}`}
            >
              {languageNames[lang]}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

