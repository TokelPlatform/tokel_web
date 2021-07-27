import React from 'react'

const phases = [
    {
        current: 1,
        phase: {
            title: 'Phase 3',
            label: 'In progress',
            timeInformation: 'Started July 2021'

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
                description: 'Alongside the chain launch, we aim to release the first stage of the Tokel all-in-one application. This release will feature the Tokel main coin wallet, via nspv (super-lite client) [hyperlink for more info on nspv]. This will be one of the first nSPV only wallets available!'
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