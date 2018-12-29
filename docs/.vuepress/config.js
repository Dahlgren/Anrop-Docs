module.exports = {
  title: 'Anrop',
  themeConfig: {
    nav: [
      { text: 'Start', link: '/' },
      { text: 'Arma 3', link: '/arma3/' },
      { text: 'Tillbaka till Anrop', link: 'https://www.anrop.se' },
    ],
    sidebar: {
      '/arma3/': [
        '/arma3/',
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
            '/arma3/editing/zeus/',
            '/arma3/editing/sqf/'
          ]
        }
      ]
    }
  }
}
