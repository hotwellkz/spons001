import { Language, languageNames } from '../i18n/translations'

interface LanguageSwitcherProps {
  currentLanguage: Language
  onLanguageChange: (lang: Language) => void
}

export function LanguageSwitcher({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) {
  const languages: Language[] = ['ru', 'en', 'kk']

  return (
    <div
      className="
        w-full mb-4 flex justify-center
        px-2
        md:w-auto md:mb-0 md:justify-end
        md:fixed md:top-4 md:right-4 md:z-50
      "
    >
      <div className="bg-slate-800/90 backdrop-blur-sm rounded-xl p-1.5 md:p-2 border border-slate-700/50 shadow-xl max-w-full">
        <div className="flex items-center gap-1.5 md:gap-2">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => onLanguageChange(lang)}
              className={`
                px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-200
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

