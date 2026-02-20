import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'UchiX',
  description: 'Документация UchiX — космический помощник по решению заданий на Учи.ру и SkySmart',
  lang: 'ru-RU',
  appearance: 'force-dark',
  srcExclude: ['**/AGENTS.md'],

  sitemap: {
    hostname: 'https://docs.uchix.app',
  },

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
    ['meta', { name: 'keywords', content: 'uchix документация, учи ру ответы, skysmart ответы, uchix расширение, космо-коины, установка uchix' }],
    ['meta', { name: 'author', content: 'UchiX' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'ru_RU' }],
    ['meta', { property: 'og:site_name', content: 'UchiX Документация' }],
    ['meta', { property: 'og:image', content: 'https://docs.uchix.app/logo.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: 'https://docs.uchix.app/logo.png' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'theme-color', content: '#0a0512' }],
    [
      'script',
      { type: 'application/ld+json' },
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'UchiX Документация',
        url: 'https://docs.uchix.app',
        description: 'Документация расширения UchiX — помощник по решению заданий на Учи.ру и SkySmart',
        publisher: {
          '@type': 'Organization',
          name: 'UchiX',
          url: 'https://uchix.app',
          logo: { '@type': 'ImageObject', url: 'https://docs.uchix.app/logo.png' },
        },
      }),
    ],
  ],

  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'UchiX',

    nav: [
      { text: 'Наш сайт', link: 'https://uchix.app' },
      { text: 'Telegram-канал', link: 'https://t.me/uchirux' },
      { text: 'Telegram-бот', link: 'https://t.me/uchixbot' },
    ],

    sidebar: [
      {
        text: 'Руководства',
        collapsed: false,
        items: [
          { text: 'Установка расширения', link: '/guides/install' },
          { text: 'Использование расширения', link: '/guides/how-to-use' },
          { text: 'Как получить космо-коины', link: '/guides/how-to-get-coins' },
        ],
      },
      { text: 'Правила использования', link: '/rules' },
      { text: 'Решение проблем', link: '/troubleshooting' },
    ],

    outline: {
      label: 'На этой странице',
    },

    docFooter: {
      prev: 'Предыдущая',
      next: 'Следующая',
    },

    sidebarMenuLabel: 'Меню',
    returnToTopLabel: 'Наверх',

    footer: {
      copyright: '© Команда UchiX, 2024-2026',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Поиск', buttonAriaLabel: 'Поиск' },
          modal: {
            noResultsText: 'Ничего не найдено',
            resetButtonTitle: 'Сбросить',
            footer: { selectText: 'Выбрать', navigateText: 'Навигация', closeText: 'Закрыть' },
          },
        },
      },
    },
  },
})
