module.exports = {
  title: 'Anrop',
  themeConfig: {
    nav: [
      { text: 'Start', link: '/' },
      { text: 'Arma 3', link: '/arma3/' },
      { text: 'DCS', link: '/dcs/' },
      { text: 'Tillbaka till Anrop', link: 'https://www.anrop.se' },
    ],
    sidebar: {
      '/arma3/': [
        '/arma3/',
        {
          title: 'Kom igång',
          collapsable: false,
          children: [
            '/arma3/getstarted/steam/',
            '/arma3/getstarted/a3sync/'
          ]
        },
        {
          title: 'Modifikationer',
          collapsable: false,
          children: [
            '/arma3/mods/ace/',
            '/arma3/mods/acre/',
            '/arma3/mods/tfar/',
            '/arma3/mods/clientside/'
          ]
        },
        {
          title: 'Editing',
          collapsable: false,
          children: [
            '/arma3/editing/eden/',
            '/arma3/editing/firesupport/',
            '/arma3/editing/headless/',
            '/arma3/editing/sqf/',
            '/arma3/editing/zeus/'
          ]
        }
      ],
      '/dcs/': [
        '/dcs/',
        {
          title: 'Moduler',
          collapsable: false,
          children: [
            '/dcs/modules/ajs37/',
            '/dcs/modules/f18/'
          ]
        }
      ]
    },
    docsRepo: 'Anrop/Anrop-Docs',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Förbättra denna sida!'
  }
}
