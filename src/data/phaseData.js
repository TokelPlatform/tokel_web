import React from 'react';
import links from "./links";

const phases = [
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
    {
        current: 1,
        phase: {
            title: 'Phase 2',
            label: "In progress",
            timeInformation: 'Started March 2021'
        },
        phaseDetails: [
            {
                title: 'TOKEL Chain launch',
                description: 'We are working hard to ensure everything is in place for the chain launch. Stay tuned for the official announcement and keep your eyes peeled on the website, and the discord for details!.'
            },
            {
                title: 'TOKEL COIN wallet release',
                description: ['Alongside the chain launch, we aim to release the first stage of the Tokel all-in-one application. This release will feature the Tokel main coin wallet, via ', <a href={links.nspv} key='nspvLink'>nspv (super-lite client)</a>, '. This will be one of the first nSPV only wallets available!']
            },
            {
                title: 'Tokel Explorer v1 launch',
                description: 'Traditional blockchain explorers are not currently setup to handle the exploration of tokens on the Tokel blockchain. We will be releasing an explorer that will allow users to explorer not only the native blockchain, but all of the tokens on it.'   
            }

        ]
    }
]

export default phases;