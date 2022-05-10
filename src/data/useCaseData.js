import links from './links';

const boxData = [
  {
    title: 'Individuals',
    desc:
      'We welcome both the experienced blockchain veteran and those curious, with little to no knowledge. Don’t know where to start? ',
    // icon: individuals,
    links: [
      {
        url: '/nft-token',
        urlName: 'What is the difference between an NFT and a token?',
      },
    ],
  },
  {
    title: 'Businesses',
    desc:
      'Are you looking to expand your business into the blockchain and cryptocurrency space? Tokel offers a wide range of tokenization technology.',
    // icon: businesses,
    links: [
      {
        url: '/business-use-case',
        urlName: 'How do I use Tokens in my business?',
      },
    ],
  },
  {
    title: 'Blockchain Developers',
    desc:
      'The Tokel blockchain uses leading edge UTXO management technology. Work alongside some of the brightest in the industry and leverage our strategic partnership with the Komodo team.',
    // icon: bchaindevs,
    links: [
      {
        url: links.nspvApi,
        urlName: 'Create dApps on Tokel',
      },
    ],
  },
  {
    title: 'Game Developers',
    desc:
      'We are actively looking for video game projects that are interested in using the latest in token technology with web3.0 integrations within their games.',
    // icon: gamedevs,
    links: [
      {
        url: links.nspvApi,
        urlName: 'Use Tokel as Game Currency',
      },
      {
        url: links.nspvApi,
        urlName: 'Get Started Quick Dev Tutorial',
      },
    ],
  },
  {
    title: 'Content creators',
    desc:
      'Web3.0 gives power to the creator. Tokel offers the first step for content creators to truly take charge of their data and their community.',
    // icon: creators,
    links: [
      {
        url: links.documentationCreateTokenNFT,
        urlName: 'How to Create NFT on Tokel?',
      },
      {
        url: links.createTokelWallet,
        urlName: 'How to install Tokel Platform?',
      },
    ],
  },
];

export default boxData;
