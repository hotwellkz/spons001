import { useMemo } from 'react'

// Константы для легкой настройки
const WHATSAPP_NUMBER = "77475000217" // без плюса для ссылки
const WHATSAPP_DISPLAY = "+7 747 500 02 17" // для отображения
const WHATSAPP_MESSAGE = "Здравствуйте! Хотим обсудить рекламу или спонсорство на ваших YouTube-каналах."

const TELEGRAM_NUMBER = "77475000217" // без плюса для ссылки
const TELEGRAM_DISPLAY = "+7 747 500 02 17" // для отображения
const TELEGRAM_MESSAGE = "Здравствуйте! Хотим обсудить рекламу или спонсорство на ваших YouTube-каналах."

const DESCRIPTION_TEXT = "Если вы хотите разместить рекламу или обсудить спонсорство на наших YouTube-каналах, напишите нам в WhatsApp или Telegram. Мы ответим и предложим варианты сотрудничества."

const EMAIL = "hotwell.kz@gmail.com"

const CURRENT_YEAR = new Date().getFullYear()

function App() {
  const whatsappUrl = useMemo(() => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
  }, [])

  const telegramUrl = useMemo(() => {
    return `https://t.me/+${TELEGRAM_NUMBER}`
  }, [])

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank')
  }

  const handleTelegramClick = () => {
    window.open(telegramUrl, '_blank')
  }

  const handleEmailClick = () => {
    window.location.href = `mailto:${EMAIL}?subject=Реклама и спонсорство&body=${encodeURIComponent(TELEGRAM_MESSAGE)}`
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 py-8 px-4">
      {/* Анимированный фон с градиентами */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Декоративные элементы */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-1500"></div>
      </div>

      <div className="max-w-[600px] mx-auto relative z-10">
        {/* Заголовок с премиальными эффектами */}
        <div className="text-center mb-10 relative">
          {/* Декоративные линии */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-32 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4 animate-gradient bg-[length:200%_auto]">
              Реклама и спонсорство
            </h1>
            {/* Свечение вокруг заголовка */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-2xl -z-10"></div>
          </div>
          
          {/* Премиальная декоративная линия */}
          <div className="relative mx-auto w-32 mt-4">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full h-1 blur-sm"></div>
            <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full h-1"></div>
          </div>
          
          {/* Декоративные элементы по бокам */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-blue-500/50"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full ml-auto mt-1"></div>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block">
            <div className="w-12 h-px bg-gradient-to-r from-pink-500/50 to-transparent"></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full mt-1"></div>
          </div>
        </div>

        {/* Описание с премиальным дизайном */}
        <div className="relative bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-800/60 backdrop-blur-xl rounded-3xl p-8 mb-8 border border-slate-700/50 shadow-2xl overflow-hidden group">
          {/* Декоративный градиент сверху */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          
          {/* Блестящий эффект */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          
          <div className="relative">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-500"></div>
            </div>
            <p className="text-slate-200 text-base md:text-lg text-center leading-relaxed font-light">
              {DESCRIPTION_TEXT}
            </p>
          </div>
        </div>

        {/* Кнопки связи с премиальным дизайном */}
        <div className="space-y-5 mb-8">
          {/* Кнопка WhatsApp */}
          <div className="relative group">
            {/* Внешнее свечение */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-pulse"></div>
            
            <div className="relative bg-gradient-to-br from-slate-800/80 via-slate-800/60 to-slate-800/80 backdrop-blur-xl rounded-3xl p-7 border border-slate-700/50 shadow-2xl overflow-hidden">
              {/* Декоративный градиент */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent"></div>
              
              {/* Блестящий эффект при наведении */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <button
                onClick={handleWhatsAppClick}
                className="relative w-full bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-400 hover:via-emerald-400 hover:to-green-500 text-white font-bold text-lg py-5 px-8 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-green-500/60 transform hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
              >
                {/* Внутреннее свечение */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Блеск на кнопке */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/30 via-transparent to-transparent"></div>
                
                <span className="relative flex items-center justify-center gap-3 z-10">
                  <svg className="w-7 h-7 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span className="drop-shadow-lg">Написать в WhatsApp</span>
                </span>
              </button>
              
              <div className="mt-5 text-center">
                <p className="text-xs text-slate-400">
                  Номер: <span className="text-slate-300 font-semibold">{WHATSAPP_DISPLAY}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Кнопка Telegram */}
          <div className="relative group">
            {/* Внешнее свечение */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-pulse"></div>
            
            <div className="relative bg-gradient-to-br from-slate-800/80 via-slate-800/60 to-slate-800/80 backdrop-blur-xl rounded-3xl p-7 border border-slate-700/50 shadow-2xl overflow-hidden">
              {/* Декоративный градиент */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
              
              {/* Блестящий эффект при наведении */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <button
                onClick={handleTelegramClick}
                className="relative w-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 hover:from-blue-400 hover:via-cyan-400 hover:to-blue-500 text-white font-bold text-lg py-5 px-8 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-blue-500/60 transform hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
              >
                {/* Внутреннее свечение */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Блеск на кнопке */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/30 via-transparent to-transparent"></div>
                
                <span className="relative flex items-center justify-center gap-3 z-10">
                  <svg className="w-7 h-7 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.223s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  <span className="drop-shadow-lg">Написать в Telegram</span>
                </span>
              </button>
              
              <div className="mt-5 text-center">
                <p className="text-xs text-slate-400">
                  Номер: <span className="text-slate-300 font-semibold">{TELEGRAM_DISPLAY}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Email с премиальным дизайном */}
        <div className="relative group bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-800/60 backdrop-blur-xl rounded-2xl p-6 mb-8 border border-slate-700/50 shadow-xl overflow-hidden">
          {/* Декоративный градиент */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
          
          {/* Блестящий эффект */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          
          <div className="relative">
            <p className="text-xs text-slate-400 text-center mb-4 font-semibold uppercase tracking-widest flex items-center justify-center gap-2">
              <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
              Email
              <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
            </p>
            <button
              onClick={handleEmailClick}
              className="w-full flex items-center justify-center gap-3 text-slate-200 hover:text-white transition-all duration-300 group/btn"
            >
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 group-hover/btn:from-purple-500/30 group-hover/btn:to-pink-500/30 transition-all">
                <svg className="w-5 h-5 text-purple-300 group-hover/btn:text-purple-200 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-sm md:text-base font-semibold">{EMAIL}</span>
            </button>
          </div>
        </div>

        {/* Футер с премиальным дизайном */}
        <footer className="text-center space-y-4 pt-6 relative">
          {/* Декоративная линия */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
          
          <p className="text-sm text-slate-400 font-light">
            Страница только для рекламодателей и спонсоров.
          </p>
          <p className="text-xs text-slate-500 flex items-center justify-center gap-2">
            <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
            <span>© {CURRENT_YEAR} Контакты для рекламы</span>
            <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App

