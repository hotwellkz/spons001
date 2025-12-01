export type Language = 'ru' | 'en' | 'kk'

export interface Translations {
  title: string
  description: string
  whatsappButton: string
  telegramButton: string
  whatsappNumber: string
  telegramNumber: string
  email: string
  emailLabel: string
  otherContacts: string
  footerText: string
  footerCopyright: string
  whatsappMessage: string
  telegramMessage: string
  whatsappHint: string
  telegramHint: string
  emailHint: string
}

export const translations: Record<Language, Translations> = {
  ru: {
    title: 'Реклама и спонсорство',
    description: 'Если вы хотите разместить рекламу или обсудить спонсорство на наших YouTube-каналах, напишите нам в WhatsApp или Telegram. Мы ответим и предложим варианты сотрудничества.',
    whatsappButton: 'Написать в WhatsApp',
    telegramButton: 'Написать в Telegram',
    whatsappNumber: '+7 747 500 02 17',
    telegramNumber: '+7 747 500 02 17',
    email: 'hotwell.kz@gmail.com',
    emailLabel: 'Email',
    otherContacts: 'Другие способы связи',
    footerText: 'Страница только для рекламодателей и спонсоров.',
    footerCopyright: 'Контакты для рекламы',
    whatsappMessage: 'Здравствуйте! Хотим обсудить рекламу или спонсорство на ваших YouTube-каналах.',
    telegramMessage: 'Здравствуйте! Хотим обсудить рекламу или спонсорство на ваших YouTube-каналах.',
    whatsappHint: 'Откроется WhatsApp с готовым сообщением. Вы можете отредактировать текст перед отправкой.',
    telegramHint: 'Откроется Telegram с готовым сообщением. Вы можете отредактировать текст перед отправкой.',
    emailHint: 'Откроется почтовый клиент с готовым письмом.'
  },
  en: {
    title: 'Advertising and Sponsorship',
    description: 'If you want to place an advertisement or discuss sponsorship on our YouTube channels, contact us via WhatsApp or Telegram. We will respond and offer collaboration options.',
    whatsappButton: 'Write to WhatsApp',
    telegramButton: 'Write to Telegram',
    whatsappNumber: '+7 747 500 02 17',
    telegramNumber: '+7 747 500 02 17',
    email: 'hotwell.kz@gmail.com',
    emailLabel: 'Email',
    otherContacts: 'Other ways to contact',
    footerText: 'This page is only for advertisers and sponsors.',
    footerCopyright: 'Advertising contacts',
    whatsappMessage: 'Hello! We would like to discuss advertising or sponsorship on your YouTube channels.',
    telegramMessage: 'Hello! We would like to discuss advertising or sponsorship on your YouTube channels.',
    whatsappHint: 'WhatsApp will open with a ready message. You can edit the text before sending.',
    telegramHint: 'Telegram will open with a ready message. You can edit the text before sending.',
    emailHint: 'Your email client will open with a ready message.'
  },
  kk: {
    title: 'Жарнама және демеушілік',
    description: 'Егер сіз біздің YouTube арналарында жарнама орналастырғыңыз келсе немесе демеушілікті талқылағыңыз келсе, WhatsApp немесе Telegram арқылы бізбен байланысыңыз. Біз жауап береміз және ынтымақтастық нұсқаларын ұсынамыз.',
    whatsappButton: 'WhatsApp-қа жазу',
    telegramButton: 'Telegram-ға жазу',
    whatsappNumber: '+7 747 500 02 17',
    telegramNumber: '+7 747 500 02 17',
    email: 'hotwell.kz@gmail.com',
    emailLabel: 'Email',
    otherContacts: 'Байланыстың басқа жолдары',
    footerText: 'Бұл бет тек жарнама берушілер мен демеушілер үшін.',
    footerCopyright: 'Жарнама контактілері',
    whatsappMessage: 'Сәлеметсіз бе! Сіздің YouTube арналарыңызда жарнама немесе демеушілікті талқылағымыз келеді.',
    telegramMessage: 'Сәлеметсіз бе! Сіздің YouTube арналарыңызда жарнама немесе демеушілікті талқылағымыз келеді.',
    whatsappHint: 'WhatsApp дайын хабарламамен ашылады. Жібермес бұрын мәтінді өзгерте аласыз.',
    telegramHint: 'Telegram дайын хабарламамен ашылады. Жібермес бұрын мәтінді өзгерте аласыз.',
    emailHint: 'Пошта клиентіңіз дайын хабарламамен ашылады.'
  }
}

export const languageNames: Record<Language, string> = {
  ru: 'Русский',
  en: 'English',
  kk: 'Қазақша'
}

