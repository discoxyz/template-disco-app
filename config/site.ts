// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Site
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
interface SiteConfig {
  name: string
  title: string
  emoji: string
  description: string
  localeDefault: string
  author: string
  links: {
    twitter: string
    github: string
  }
}

export const SITE_CANONICAL = 'https://network.turboeth.xyz'

export const siteConfig: SiteConfig = {
  name: 'networks',
  title: 'networks - disco app template',
  emoji: '🪩',
  description: 'A TurboETH template for building next generation identity applications.',
  localeDefault: 'en',
  author: 'District Labs',
  links: {
    twitter: 'https://twitter.com/KamesGeraghty',
    github: 'https://github.com/turbo-eth/template-disco-app',
  },
}
