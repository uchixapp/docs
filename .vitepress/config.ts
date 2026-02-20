import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'UchiX',
  description: 'документация UchiX — космический помощник по решению заданий',
  lang: 'ru-RU',
  appearance: 'force-dark',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Unbounded:wght@300;400;500;600;700;800;900&family=Onest:wght@300;400;500;600;700&display=swap',
      },
    ],
  ],

  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'UchiX',

    nav: [
      { text: 'наш сайт', link: 'https://uchix.app' },
      { text: 'telegram-канал', link: 'https://t.me/uchirux' },
      { text: 'telegram-бот', link: 'https://t.me/uchixbot' },
    ],

    sidebar: [
      {
        text: 'руководства',
        collapsed: false,
        items: [
          { text: 'установка расширения', link: '/guides/install' },
          { text: 'использование расширения', link: '/guides/how-to-use' },
          { text: 'как получить космо-коины', link: '/guides/how-to-get-coins' },
        ],
      },
      { text: 'правила использования', link: '/rules' },
      { text: 'решение проблем', link: '/troubleshooting' },
    ],

    outline: {
      label: 'на этой странице',
    },

    docFooter: {
      prev: 'предыдущая',
      next: 'следующая',
    },

    sidebarMenuLabel: 'меню',
    returnToTopLabel: 'наверх',

    footer: {
      copyright: '© команда UchiX, 2024-2026',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'поиск', buttonAriaLabel: 'поиск' },
          modal: {
            noResultsText: 'ничего не найдено',
            resetButtonTitle: 'сбросить',
            footer: { selectText: 'выбрать', navigateText: 'навигация', closeText: 'закрыть' },
          },
        },
      },
    },
  },
})
