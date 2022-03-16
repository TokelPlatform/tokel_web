import links from "data/links";
import nSPVLinks from "data/nSpvLinks";
const bigMenuLinks = [
    {
      link: '#',
      name: 'Get Started',
      type: 'listing',
      submenu: [
        {
          title: 'Wallets',
          subitems: [
            {
              name: 'Tokel dAPP',
              desc: 'Store, send,  receive and create NFTs and tokens',
              link: '/#ecosystem',
              logo: 'tokel',
            },
            {
              name: 'Local wallet',
              desc: 'Sync the chain locally and you can run your own wallet.',
              link: '#',
              logo: 'cli',
            },
          ],
        },
        {
          title: 'Exchanges',
          subitems: [
            {
              name: 'Atomic DEX',
              desc: 'Decentralized Exchange, no KYC',
              link: links.atomicDex,
              logo: 'atomicDexSmall',
            },
            {
              name: 'DEX Trade',
              desc: 'Centralized exchange',
              link: links.dexTrade,
              logo: 'dexTradeSmall',
            },
          ],
        },
        {
          title: 'Explorer',
          subitems: [
            {
              name: 'Tokel Explorer',
              link: links.explorer,
              desc: 'Explore tokens, nfts and transaction on Tokel chain',
              logo: 'tokel',
            },
          ],
        },
      ],
      submenuSide: [
        {
          title: 'Guides',
          links: [
            {
              link: links.documentationCreateTokenNFT,
              name: 'Create NFT/tokens',
            },
            {
              link: links.aDexBuyTKLVideo,
              name: 'Buy TKL on AtomicDEX',
            },
            {
              link: '/how-to',
              name: 'How to use Tokel Blockchain',
            },
          ],
        },
      ],
    },
    { 
        link: '#', 
        name: 'Developers',
        type: 'header',
        submenu: [
            {
            title: 'Documentation',
            icon: '',
            desc: 'Start building on Tokel',
            subitems: [
                {
                    title: 'Tokel Blockchain',
                    links: [
                        {
                            name: 'Launch the Tokel Chain',
                            link: 'https://docs.tokel.io/guides/LaunchTheChain/#introduction'
                        },
                        {
                            name: 'Launch the TKLTEST Chain',
                            link: 'https://docs.tokel.io/guides/LaunchTKLTESTchain/'
                        },
                        {
                            name: 'Create Tokel or NFT',
                            link: 'https://docs.tokel.io/guides/CreateAToken/#suggested-reading'
                        }
                    ]
                },
                {
                    title: 'Next-gen SPV',
                    links: [
                        {
                            name: 'nSPV-js',
                            link: links.github_nspv
                        },
                        {
                            name: 'nSPV-js API',
                            link: links.nspvApi
                        }
                    ]
                }
            ] 
        }],
        submenuSide: [
            {
              title: 'Articles',
              desc: 'Learn about Tokel Technology',
              links: [
                {
                  link: nSPVLinks[2].url,
                  name: 'nSPV - The Next Generation of Simple Payment Verification.',
                },
                {
                  link: nSPVLinks[3].url,
                  name: 'nSPV means a truly decentralized and secure communication.',
                },
              ],
            },
          ]},
    { link: '/blog', name: 'Tokel News' },
    { link: '/tokeltalk', name: 'Tokel Talk' },
    { 
      link: '#', 
      name: 'About',
      type: 'simple',
      submenu: {
        // title: 'About Tokel',
        subitems: [{
          title: 'Tokel Team',
          url: '/team'
        },
        {
          title: 'White Paper',
          url: links.whitepaper
        },
        {
          title: 'Roadmap',
          url: '/roadmap'
        }] 
      }
    },
    { link: '/faq', name: 'FAQ' },
  ];

  export default bigMenuLinks;