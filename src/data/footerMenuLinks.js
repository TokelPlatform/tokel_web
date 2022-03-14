import links from "./links";

const menuLinks = [
    {
      title: 'Get Started',
      links: [
        {
          name: 'Exchanges',
          url: '/exchanges',
        },
        {
          name: 'Roadmap',
          url: '/roadmap',
        },
        {
          name: 'Whitepaper',
          url: links.whitepaper,
        },        
        {
          name: 'Explorer',
          url: links.explorer,
        },
      ],
    },
    {
      title: 'Developers',
      links: [
        {
          name: 'How-to Guides',
          url: links.documentationChain,
        },
        {
          name: 'nSPV',
          url: links.github_nspv,
        },
        {
          name: 'nSPV API',
          url: links.nspvApi,
        },
        {
          name: 'Tokel Blockchain',
          url: links.github_chain,
        },
      ],
    },
    {
      title: 'Individuals',
      links: [
        {
          name: 'How-to Guides',
          url: links.documentationCreateTokenNFT,
        },
        {
          name: 'Coming soon...',
          url: null,
        },
      ],
    },
    {
      title: 'Businesses',
      links: [
        {
          name: 'Coming soon.....',
          url: null,
        },
      ],
    },
    {
      title: 'Media',
      links: [
        {
          name: 'Tokel Talk',
          url: '/tokeltalk',
        },
        {
          name: 'Tokel News',
          url: '/blog',
        },
        // {
        //   name: 'Media package',
        //   url: '#',
        // },
      ],
    },
    {
      title: 'Contact',
      links: [
        // {
        //   name: 'Report Bug',
        //   url: '#',
        // },
        {
          name: 'Become Partner',
          url: 'mailto:contact@tokel.io',
        },
        {
          name: 'Join Discord',
          url: links.discord,
        },
        {
          name: 'contact@tokel.io',
          url: 'mailto:contact@tokel.io',
        },
      ],
    },
  ];

  export default menuLinks;