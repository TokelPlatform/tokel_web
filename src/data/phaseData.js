// import { PhaseProp } from "../components/Molecules/Phase"

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
                description: 'TOKEL is going live and right into your wallets. Stay tuned on the news about the official launch.'
            },
            {
                title: 'TOKEL COIN wallet release',
                description: 'First planned development release of coin wallet application.' 
            },
            {
                title: 'Tokel Explorer v1 launch',
                description: 'This quarter focuses on the initial releases of the all-in-one application and the Token explorer launch. Along with that, we plan to launch the Tokel main blockchain for everybody to utilize. This will become a reality after conducting rigorous testing of the Antara modules with the KMD team.'   
            }

        ]
    }
]

export default phases;