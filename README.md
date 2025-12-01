# Страница для рекламодателей и спонсоров

Простое одностраничное веб-приложение для связи с рекламодателями через WhatsApp.

## Технологии

- React 18
- TypeScript
- Vite
- Tailwind CSS

## Быстрый старт

### Установка зависимостей

```bash
npm install
```

### Запуск в режиме разработки

```bash
npm run dev
```

Приложение будет доступно по адресу `http://localhost:5173`

### Сборка для продакшена

```bash
npm run build
```

Собранные файлы будут в папке `dist`

### Предпросмотр продакшен-сборки

```bash
npm run preview
```

## Настройка контактов

Все контакты и тексты находятся в файле `src/App.tsx` в виде констант:

- `WHATSAPP_NUMBER` - номер WhatsApp (без плюса)
- `WHATSAPP_MESSAGE` - готовое сообщение для WhatsApp
- `DESCRIPTION_TEXT` - описание на странице
- `EMAIL` - email для контакта
- `TELEGRAM` - Telegram для контакта

## Деплой

### Netlify

1. Зарегистрируйтесь на [netlify.com](https://www.netlify.com)
2. Перейдите в раздел "Sites" → "Add new site" → "Import an existing project"
3. Подключите ваш Git-репозиторий или загрузите папку `dist` через "Deploy manually"
4. Если используете Git:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Нажмите "Deploy site"
6. Получите публичную ссылку вида `https://your-site-name.netlify.app`

### Vercel

1. Зарегистрируйтесь на [vercel.com](https://www.vercel.com)
2. Установите Vercel CLI: `npm i -g vercel`
3. В корне проекта выполните: `vercel`
4. Следуйте инструкциям в терминале
5. Или используйте веб-интерфейс:
   - Перейдите в Dashboard → "Add New Project"
   - Подключите Git-репозиторий
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Получите публичную ссылку вида `https://your-site-name.vercel.app`

## Использование

После деплоя скопируйте полученную ссылку и вставьте её в настройки YouTube-канала в разделе "Ссылки" / "Для сотрудничества и рекламы".

