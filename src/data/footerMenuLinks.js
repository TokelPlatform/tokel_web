import links from "./links";

const menuLinks = [
    {
      title: 'Get Started',
      links: [
        {
          title: 'Exchanges',
          url: '/exchanges',
        },
        {
          title: 'Roadmap',
          url: '/roadmap',
        },
        {
          title: 'Whitepaper',
          url: links.whitepaper,
        },        
        {
          title: 'Explorer',
          url: links.explorer,
        },
      ],
    },
    {
      title: 'Developers',
      links: [
        {
          title: 'How-to Guides',
          url: links.documentationChain,
        },
        {
          title: 'nSPV',
          url: links.github_nspv,
        },
        {
          title: 'nSPV API',
          url: links.nspvApi,
        },
        {
          title: 'Tokel Blockchain',
          url: links.github_chain,
        },
      ],
    },
    {
      title: 'Individuals',
      links: [
        {
          title: 'How-to Guides',
          url: links.documentationCreateTokenNFT,
        },
        {
          title: 'Coming soon...',
          url: null,
        },
      ],
    },
    {
      title: 'Businesses',
      links: [
        {
          title: 'Coming soon.....',
          url: null,
        },
      ],
    },
    {
      title: 'Media',
      links: [
        {
          title: 'Tokel Talk',
          url: '/tokeltalk',
        },
        {
          title: 'Tokel News',
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
          title: 'Become Partner',
          url: 'mailto:contact@tokel.io',
        },
        {
          title: 'Join Discord',
          url: links.discord,
        },
        {
          title: 'contact@tokel.io',
          url: 'mailto:contact@tokel.io',
        },
      ],
    },
  ];

  export default menuLinks;