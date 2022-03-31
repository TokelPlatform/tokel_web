import links from "./links";

const data = [
    {
        title: 'Open Source Technology',
        desc: 'All of the technology Tokel creates and uses is open source. Meaning anyone can use it, anyone can audit it and anyone can contribute. Using MIT licence, anybody can extend and utilize our technology within their projects',
        links: [
            {
                url: links.github_dapp,
                urlName: 'Tokel dApp Github'
            },
            {
                url: links.github_chain,
                urlName: 'Tokel Blockchain Github'
            },                      
        ]
    },
    {
        title: 'Transparent development',
        desc: 'One of our main philosophies is transparency. You can follow all of our affairs in Discord where we discuss development, project direction and make other important decisions with the help of our community.',
        links: [
            {
                url: links.discord,
                urlName: 'Join our Discord to see for yourself'
            }               
        ]
    },
    {
        title: 'Community funded',
        desc: 'Utilizing an IDO via the AtomicDEX application, the community enabled blockchain creation and development of the Tokel All-In-One dApp. Community members are key to the success of the platform.',
        links: [
            {
                url:'/ido#phases',
                urlName: 'IDO Phase 1: Price Discovery'
            },
            {
                url:'/ido#phases',
                urlName: 'IDO Phase 2: Main IDO'
            },                      
        ]
    }
]

export default data;