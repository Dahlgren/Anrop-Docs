module.exports = {
  title: 'Anrop',
  locales: {
    '/': {
      lang: 'sv-SE'
    },
    '/en/': {
      lang: 'en-US'
    }
  },
  themeConfig: {
    docsRepo: 'Anrop/Anrop-Docs',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    locales: {
      '/': {
        label: 'Svenska',
        selectText: 'Språk',
        editLinkText: 'Förbättra denna sida!',
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
                '/arma3/getstarted/arma3sync/'
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
              title: 'Guider',
              collapsable: false,
              children: [
                '/arma3/guides/eldledning/',
                '/arma3/guides/granatkastare/'
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
                '/dcs/modules/a10c/',
                '/dcs/modules/ajs37/',
                '/dcs/modules/av8/',
                '/dcs/modules/f5/',
                '/dcs/modules/f14/',
                '/dcs/modules/f18/',
                '/dcs/modules/f86/',
                '/dcs/modules/ka50/',
                '/dcs/modules/m2000c/',
                '/dcs/modules/mi8/',
                '/dcs/modules/mig15/',
                '/dcs/modules/mig19/',
                '/dcs/modules/mig21/',
                '/dcs/modules/uh1/'
              ]
            }
          ]
        }
      },
      '/en/': {
        label: 'English',
        nav: [
          { text: 'Start', link: '/en/' },
          { text: 'Arma 3', link: '/en/arma3/' },
          { text: 'Back to Anrop', link: 'https://www.anrop.se' },
        ],
        sidebar: {
          '/en/arma3/': [
            '/en/arma3/',
            {
              title: 'Getting Started',
              collapsable: false,
              children: [
                '/en/arma3/getstarted/steam/',
                '/en/arma3/getstarted/arma3sync/'
              ]
            }
          ]
        }
      }
    }
  }
}
