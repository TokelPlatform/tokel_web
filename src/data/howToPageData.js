import links from "./links";

const sections = [
    {
      title: 'For all users:',
      subtitle: 'Tokel All-in-one Application',
      image: 'app',
      imageAlt: 'all-users-screen',
      links: [
        {
          url: links.github_release_page,
          urlName: "Download latest release (Desktop)"
        }
      ]
    },
    {
      title: 'For tech savvy or curious:', 
      subtitle: 'Cli interface',
      image: 'cli',
      imageAlt: 'tech-savvy-screen',
      links: [
        {
          url: links.documentationChain + 'guides/LaunchTheChain/',
          urlName: "Run Tokel blockchain"
        },
        {
          url: links.documentationCreateTokenNFT,
          urlName: "Create your tokens/NFTs"
        },
        {
          url: links.documentationChain + '/api/assets/#introduction/',
          urlName: "Use the tokenDEX"
        }
      ]
    },
    {
      title: 'For all users:',
      subtitle: 'Tokel Documenation',
      image: 'docs',
      imageAlt: 'users-screen',
      links: [
        {
          url: links.documentationChain + '#what-is-the-tokel-platform',
          urlName: 'What is the Tokel Platform?'
        },
        {
          url: links.documentationChain + '#tokel-blockchain-specifics',
          urlName: 'Tokel Blockchain Specifics'
        },
        {
          url: links.documentationChain + 'guides/FindYourPubkey/',
          urlName: 'Find your pubkey to receive tokens'
        }
      ]
    },
    {
      title: 'For developers:', 
      subtitle: 'Nspv-js',
      image: 'nspv',
      imageAlt: 'tech-savvy-screen',
      links: [
        {
          url: links.github_nspv + '#why-nspv',
          urlName: 'Why Nspv-js?'
        },
        {
          url: links.github_nspv + '#prerequisites' ,
          urlName: 'Installation Prerequisites'
        },
        {
          url: links.github_nspv + '/blob/development/API.md',
          urlName: 'Nspv-js API'
        }
      ]
    }
  ]

  export default sections;