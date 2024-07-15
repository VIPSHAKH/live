const siteMetadata = {
  title: 'VIPSHAKH',
  author: 'Shaxrux Shakirov',
  headerTitle: 'vipshakh',
  description: 'developer',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://vipshakh.live',
  siteRepo: 'https://github.com/vipshakh',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.webp',
  socialBanner: '/static/images/twitter-card.png',
  email: 'dlarroder@gmail.com',
  github: 'https://github.com/vipshakh',
  twitter: 'https://twitter.com/vipshakh',
  facebook: 'https://facebook.com/vipshakh',
  linkedin: 'https://www.linkedin.com/in/vipshakh/',
  spotify: 'https://open.spotify.com/vipshakh',
  steam: 'https://steamcommunity.com/id/vipshakh/',
  locale: 'en-US',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
};

module.exports = siteMetadata;
