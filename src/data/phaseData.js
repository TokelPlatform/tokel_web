import React from 'react';
import links from "./links";

const phases = [
    {
        current: 1,
        phase: {
            title: 'Phase 4',
            label: 'In progress',
            timeInformation: 'Started November 2021'

        },
        phaseDetails: [
            {
                title: 'Improve current dApp release',
                description: 'The token wallet release was a huge milestone in the Tokel All-in-one decentralized application efforts. As we have completely changed the backend of the dApp from a libnspv binary, to the CC Javascript implementation, we will be allocating a lot of time ensuring this new backend works without fault. By doing this now, it ensures that future releases occur more seamlessly and are easier to implement.'
            },
            {
                title: 'DApp token creation tool (released 16.12.2021)',
                description: 'We are starting to shift focus to the in-dApp token creation tool. This tool will allow anybody to easily create a token or NFT through a step by step process, all within the dApp, and all over nSPV (a super light and quick blockchain client).'
            },
            {
                title: 'Development of Js CryptoConditions library via nSPV',
                description: 'This Javascript CryptoConditions library will form the foundation of a software development kit. It will allow for easy integration with TOKEL blockchain and any other notarization based chains. The library will expose an API which developers can use for free to retrieve information about transactions, sign transactions and send them over nSPV to the blockchain of their choice. The developer will be able to run a superlite client to achieve needed manipulations with the chain. It takes almost no time to start the client and all communication between client and the blockchain is extrememely quick.'
            },
            {
                title: 'more marketing efforts',
                description: ['We aim to further understand the needs and requirements of the main Tokel user groups. This user research will allow us to conduct marketing campaigns in a more targeted fashion. Focusing our efforts to where they are needed most.', <br key="nl1" />,<br key="nl22" />, 'The main Tokel target user groups:', <ul key="userList">  <li>Video game design/creation studios/projects</li>  <li>Digital content creators/buyers/sellers</li> <li>Software projects/companies that could integrate our API into their app/software</li></ul>]
            }

        ]
    },
    {
        current: 0,
        phase: {
            title: 'Phase 3',
            label: 'Completed',
            timeInformation: 'Finished October 2021'

        },
        phaseDetails: [
            {
                title: 'Tokel IDO',
                description: 'Tokel will be conducting an IDO through the AtomicDEX application. Early adopters will have the option to purchase Tokel through the app and assist the ongoing development of the Tokel Platform. Ensuring a successful IDO is critical to the success and ongoing efforts that are put into the platform.'
            },
            {
                title: 'Token Wallet Release',
                description: 'All-In-One application development efforts will be focused on allowing users to store and interact with all tokens available on the Tokel platform. This feature will include the ability to view all tokens within your wallet (alongside your TKL coins), as well as send and receive them.'
            },
            {
                title: 'Engage the Community',
                description: ['With the completion of the blockchain launch, we would like to now focus on ensuring the community (enthusiasts, creators, developers), have all the information and support they need to start utilizing the features on the blockchain. As GUI production is ongoing, we will focus on assisting people with command line interface and helping them understand all the options they have to use on the Tokel Platform. Along with this, we will ensure our marketing direction is clear, concise and provides simple to understand explanations of all things Tokel.', <br key="nl" />,<br key="nl2" />, 'We have 3 main areas of focus.', <ol key="focusList">  <li>Ensuring the continuing of the platform through the IDO </li>  <li>Development</li> <li>Marketing</li></ol>]
            }

        ]
    },
    {
        current: 0,
        phase: {
            title: 'Phase 2',
            label: "Completed",
            timeInformation: 'Finished July 2021'
        },
        phaseDetails: [
            {
                title: 'TOKEL Chain launch',
                description: 'We are working hard to ensure everything is in place for the chain launch. Stay tuned for the official announcement and keep your eyes peeled on the website, and the discord for details!.'
            },
            {
                title: 'TOKEL COIN wallet release',
                description: ['Alongside the chain launch, we aim to release the first stage of the Tokel all-in-one application. This release will feature the Tokel main coin wallet, via ', <a href={links.nspv} key='nspvLink'>nspv</a> ,' (super-lite client)', '. This will be one of the first nSPV only wallets available!']
            },
            {
                title: 'Tokel Explorer v1 launch',
                description: 'Traditional blockchain explorers are not currently setup to handle the exploration of tokens on the Tokel blockchain. We will be releasing an explorer that will allow users to explorer not only the native blockchain, but all of the tokens on it.'
            }

        ]
    },
    {
        current: 0,
        phase: {
            title: 'Phase 1',
            label: 'Completed',
            timeInformation: 'Finished March 2021'

        },
        phaseDetails: [
            {
                title: 'Discord Launch',
                description: 'Launching the community hub and introducing the team.'
            },
            {
                title: 'Website launch',
                description: 'Showing off our plans to the world.'
            },
            {
                title: 'TKLTEST chain launch',
                description: 'The Tokel projects launches off the ground in Q1 2021. The launch of the website and discord are critical to open communication efforts. The TKLTEST chain launch will provide a foundation to conduct testing for both the team, but people/projects that require it for their projects.'
            }

        ]
    },
]

export default phases;