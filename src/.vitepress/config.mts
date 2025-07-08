//import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  lang: 'ca-ES',
  title: 'UF3.1',
  description: 'Descripció',
  base: '/UF3_1/',
  outDir: '../docs',
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },
  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },
  mermaidPlugin: {
    class: "mermaid my-class", // set additional css classes for parent container 
  },
  head: [
    //['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    //['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    //['link', { href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap', rel: 'stylesheet' }],
    //['link', { rel: 'icon', type: 'image/png', href: '/img/logo.png' }]
  ],
  themeConfig: {
    siteTitle: 'Introducció a Java',
    logo: '/img/logo.png',
    nav: [
      { text: '🏠 Inici', link: '/' },
      { text: '📋 Objectius', link: '/objectius' },
      { text: '📚 Continguts', items: [
        { text: '1. Introducció', link: '/1-introduccio' },
        { text: "2. Tipus d'IDE", link: '/2-tipus_ides' },
        { text: '3. Extensions', link: '/3-extensions' },
        { text: "4. Projectes", link: '/4-projectes' },
        { text: "5. Depuració", link: '/5-depuracio' },
        { text: "6. Control de versions", link: '/6-control_versions' },
        { text: "✏️Exercicis", link: '/7-exercicis' },
      ]},
      { text: '📚 Continguts addicionals', items: [
        { text: 'Guia configuració Netbeans', link: '/8-guia_netbeans' },
        { text: 'Guia configuració VSC', link: '/9-guia_vsc' },
      ]}
    ],
    sidebar: [
      {
        text: '📚 Continguts',
        items: [
          { text: '1. Introducció', link: '/1-introduccio' },
          { text: "2. Tipus d'IDE", link: '/2-tipus_ides' },
          { text: '3. Extensions', link: '/3-extensions' },
          { text: "4. Projectes", link: '/4-projectes' },
          { text: "5. Depuració", link: '/5-depuracio' },
          { text: "6. Control de versions", link: '/6-control_versions' },
          { text: "✏️Exercicis", link: '/7-exercicis' },
        ]
      },
      { text: '📚 Continguts addicionals', items: [
        { text: 'Guia configuració Netbeans', link: '/8-guia_netbeans' },
        { text: 'Guia configuració VSC', link: '/9-guia_vsc' },
        { text: '<img src="img/logo-gva.png" class="logo-anim" style="vertical-align:middle; height:150px; margin-top:100px;">', link: '' },
        { text: '<img src="img/logo-centro.png" class="logo-anim" style="vertical-align:middle; height:150px;">', link: '' }
      ]}
    ],
    socialLinks: [
      { icon: 'github', link: '' }
    ],
    footer: {
      message: "CEEDCV - Centre Específic d'Educació a Distància de la Comunitat Valenciana",
      copyright: 'Copyright © 2024-2025'
    },
    outline: {
      label: 'En aquesta pàgina'
    },
    docFooter: {
      prev: 'Anterior',
      next: 'Següent'
    }
  }
})
