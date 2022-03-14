import links from "./links";

const menuLinks = [
    {
      title: 'About',
      links: [
        {
          name: 'nSPV',
          url: '#',
        },
        {
          name: 'Wallets',
          url: '#',
        },
        {
          name: 'Exchanges',
          url: '/exchanges',
        },
        {
          name: 'Partners',
          url: '#partners',
        },
        {
          name: 'Roadmap',
          url: '/roadmap',
        },
        {
          name: 'Whitepaper',
          url: links.whitepaper,
        },
      ],
    },
    {
      title: 'Developers',
      links: [
        {
          name: 'How-to Guides',
          url: '#',
        },
        {
          name: 'API',
          url: '#',
        },
        {
          name: 'GitHub',
          url: links.github,
        },
      ],
    },
    {
      title: 'Individuals',
      links: [
        {
          name: 'How-to Guides',
          url: '#',
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
          name: 'Tokel Talks',
          url: '/tokeltalk',
        },
        {
          name: 'News',
          url: '#',
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