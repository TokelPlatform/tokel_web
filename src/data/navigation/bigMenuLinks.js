import links from "data/links";
import nSPVLinks from "data/nSpvLinks";
const bigMenuLinks = [
    {
      url: '#',
      title: 'Get Started',
      type: 'listing',
      submenu: [
        {
          title: 'Wallets',
          subitems: [
            {
              title: 'Tokel dAPP',
              desc: 'Store, send,  receive and create NFTs and tokens',
              url: '/#ecosystem',
              logo: 'tokel',
            },
            {
              title: 'Local wallet',
              desc: 'Sync the chain locally and you can run your own wallet.',
              url: '#',
              logo: 'cli',
            },
          ],
        },
        {
          title: 'Exchanges',
          subitems: [
            {
              title: 'Atomic DEX',
              desc: 'Decentralized Exchange, no KYC',
              url: links.atomicDex,
              logo: 'atomicDexSmall',
            },
            {
              title: 'DEX Trade',
              desc: 'Centralized exchange',
              url: links.dexTrade,
              logo: 'dexTradeSmall',
            },
          ],
        },
        {
          title: 'Explorer',
          subitems: [
            {
              title: 'Tokel Explorer',
              url: links.explorer,
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
              url: links.documentationCreateTokenNFT,
              title: 'Create NFT/tokens',
            },
            {
              url: links.aDexBuyTKLVideo,
              title: 'Buy TKL on AtomicDEX',
            },
            {
              url: '/how-to',
              title: 'How to use Tokel Blockchain',
            },
          ],
        },
      ],
    },
    { 
        url: '#', 
        title: 'Developers',
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
                            title: 'Launch the Tokel Chain',
                            url: 'https://docs.tokel.io/guides/LaunchTheChain/#introduction'
                        },
                        {
                            title: 'Launch the TKLTEST Chain',
                            url: 'https://docs.tokel.io/guides/LaunchTKLTESTchain/'
                        },
                        {
                            title: 'Create Tokel or NFT',
                            url: 'https://docs.tokel.io/guides/CreateAToken/#suggested-reading'
                        }
                    ]
                },
                {
                    title: 'Next-gen SPV',
                    links: [
                        {
                            title: 'nSPV-js',
                            url: links.github_nspv
                        },
                        {
                            title: 'nSPV-js API',
                            url: links.nspvApi
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
                  url: nSPVLinks[2].url,
                  title: 'nSPV - The Next Generation of Simple Payment Verification.',
                },
                {
                  url: nSPVLinks[3].url,
                  title: 'nSPV means a truly decentralized and secure communication.',
                },
              ],
            },
          ]},
    { url: '/blog', title: 'Tokel News' },
    { url: '/tokeltalk', title: 'Tokel Talk' },
    { 
      url: '#', 
      title: 'About',
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
    { url: '/faq', title: 'FAQ' },
  ];

  export default bigMenuLinks;