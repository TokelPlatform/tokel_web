import * as React from "react"

import { formatDuration, intervalToDuration } from 'date-fns'
import { useEffect, useState } from "react"

import LogoImg from "../components/Atoms/LogoImg"
import PageRootContainer from "./template"
import PropTypes from 'prop-types'
import axios from 'axios';
import breakpoints from "../styles/breakpoints"
import idoBg from '../images/ido/ido-bg.svg'
import idoBgMobile from '../images/ido/ido-bg-mobile.svg'
import links from "../data/links"
import styled from '@emotion/styled'
import tokelGalaxy from '../images/ido/galaxy.svg'
import useCountDown from 'react-countdown-hook';

const IdoRoot = styled.div`
    background-image: url(${idoBg});
    background-repeat: no-repeat;
    background-position: center 190px;
    padding: 120px 50px 150px 50px;
    @media (max-width: ${breakpoints.mobilebig}) {
        background-image: url(${idoBgMobile});
        background-position: center 150px;
        padding: 20px 20px 150px 20px;   
    }      
    @media (max-width: ${breakpoints.mobile}) {
        background-image: none;
    }
    @media (max-width: ${breakpoints.minimobile}) {
        padding: 0px 20px 50px 20px;
    }    
    h2, h3, p, td {

        color: var(--color-almostWhite);
        font-family: 'ibm_plex', monospace;
    }
    p {
        opacity: 0.8;
    }
    h3 {
        font-size: 20px;
        line-height: 30px;
        text-transform: uppercase;
    }
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: ${breakpoints.tablet}) {
        .tokelGalaxy {
            width: 100%;
            
        }
    }
`

const Phases = styled.div`
    display: flex;
    flex-direction: row;
    gap: 100px;
    margin: 100px 0 0 0;
    .phase {
        width: 400px;
        @media (max-width: ${breakpoints.mobile}) {
            width: 100%;
        } 
    }
    @media (max-width: ${breakpoints.tablet}) {
        flex-direction: column;
    } 
`

const Participate = styled.div`
    width: 600px;
    text-align: center;
    margin-top: 90px;
    &>p {
        text-align: justify;
        @media (max-width: ${breakpoints.mobile}) {
            text-align: left;
        } 
    }
    @media (max-width: ${breakpoints.mobilemiddle}) {
        width: 100%;
    } 
`

const InfoTable = styled.div`
    border: 1px solid white;
    width: 500px;
    height: 100%;
    padding-top: 20px;
    padding-bottom: 20px;    
    display: flex;
    align-items: center;
    justify-content: center;
    &>table {
        border-spacing: 40px 8px;
        @media (max-width: ${breakpoints.mobile}) {
            border-spacing: 20px 4px;
        }         
        @media (max-width: ${breakpoints.minimobile}) {
            border-spacing: 30px 4px;
        }  
        @media (max-width: ${breakpoints.supermini}) {
            border-spacing: 10px 4px;
        }      
    }
    @media (max-width: ${breakpoints.mobile}) {
        height: 100%;
        width: 100%;
    } 
  
    td {
        @media (max-width: ${breakpoints.mobile}) {
            font-size: 14px;
        }        
    }
    tr {
        td:first-of-type {
         width: 120px;   
        }
    }
    .yellow {
        font-weight: 600;
        color: #FAB64B;
    }
`
const Phase1Table = styled.table`
    margin-left: 0;
    padding-left: 0;
    text-align: left;
    .uppercase {
        text-transform: uppercase;
        font-weight: 600;
    }
    td {
        padding: 10px 20px 0px 0px;
    }
`

const Title = styled.h1 `
    margin-bottom: 0px;
    font-size: 50px;
    line-height: 55px;
    text-align: center;
    color: var(--color-almostWhite);
    font-weight: 400;
    @media (max-width: ${breakpoints.tablet}) {
        font-size: 40px;
        line-height: 45px;
        margin-top: 50px;
    }
    @media (max-width: ${breakpoints.mobile}) {
        font-size: 30px;
        line-height: 35px;
        margin-top: 10px;
        padding: 20px;
    }   
    @media (max-width: ${breakpoints.minimobile}) {
        margin-top: 0px;
    }
`
const SectionHeader = styled.h3`
    margin-bottom: 0px;
    @media (max-width: ${breakpoints.mobile}) {
        text-align: center;
    } 
`

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    /* margin-bottom: 50px; */
    margin-top: 45px;
    text-align: left;
    @media (max-width: ${breakpoints.tablet}) {
        width: 400px;
    }
    @media (max-width: ${breakpoints.mobile}) {
        width: 100%;
        text-align: left;
    }   
`

const Galaxy = styled.img`
        /* display: none; */
    @media (max-width: ${breakpoints.mobile}) {
        display: none;
    } 
`
const Video = styled.div`
    margin-top: 30px;
    border: 3px solid #9F9F9F;
    border-radius: 4px;
    iframe {
        border: none;
        width: 600px;
        height: 300px;
        @media (max-width: ${breakpoints.tablet}) {
            width: 400px;
            height: 200px;
        }
        @media (max-width: ${breakpoints.mobile}) {
            width: 300px;
            height: 150px;
        }
    }
`

const IDOResults = styled.div`
    display: flex;
    flex-direction: row;

    .col {
        padding-right: 15px;
        padding-left: 15px;
    }
    @media (max-width: ${breakpoints.mobile}) {
        flex-direction: column;
    }

    .big {
        font-size: 30px;
        color: white;
    }
    .label {
        color: #B8BCDD;
    }
    
`

const initialTime = Date.UTC('2021', '08', '01', '20', '00', '00', '00'); 
const INTERVAL_MS = 60 * 1000


const getIDOData = () =>
    axios('https://api1.barterdexapi.net/tokeldico.php')
    .then(res => {  
        if (res.data) {
            return res.data
        }
    })
    .catch(e => console.error(e));

const Ido = ()  => {
    const [timeLeft, { start, pause  }] = useCountDown(initialTime, 1000);
    const [dateCounter, setDateCounter] = useState(timeLeft)
    const [started, setStarted] = useState(false);
    const [kmdRaised, setKmdRaised] = useState(0);
    const [usdRaised, setUsdRaised] = useState(0);
    const [tklSold, setTklSold] = useState(0);
    
    useEffect(() => {
        start();
        getIDOData()
        .then(res => setIDOData(res))
    }, []);

    useEffect(() => {
        let duration = intervalToDuration({
            end: new Date(initialTime), 
            start: new Date(),
        })
        if (initialTime < new Date().getTime()) {
            pause();
            setStarted(true)
        }
        setDateCounter(formatDuration(duration, {
            delimiter: ', '
        }))
    }, [timeLeft]);


    const setIDOData = (res) => {
        setTklSold(res.sold.toFixed(0));
        setKmdRaised(res.KMDraised.toFixed(0));
        setUsdRaised(res.USDraised.toFixed(0));
    }
  useEffect(() => {
    const idoDataInterval = setInterval(() => {
        getIDOData()
        .then(res => setIDOData(res))

    }, INTERVAL_MS);

    return () => {
      clearInterval(idoDataInterval);
    };
  }, []);
  return (
    <PageRootContainer>
        <IdoRoot>
            <LogoImg width="80px" mobileWidth="50px"/>
            <div>
                <Title>TOKEL IDO</Title>
                {!started ?
                    <p style={{textAlign: 'center'}}>Main IDO in: {dateCounter}</p>:
                    <p style={{textAlign: 'center'}}>Main IDO IN PROGRESS</p>
                }
                <InfoTable>
                    <table>
                        <tbody>
                        <tr>
                            <td>START?</td>
                            <td className="yellow">1st Sept 2021 8pm UTC</td>
                        </tr>
                        <tr>
                            <td>FINISH?</td>
                            <td className="yellow">15th Sept 2021 8pm UTC</td>
                        </tr>
                        <tr>
                            <td>WHAT PHASE?</td>
                            <td className="yellow">Phase 2: Main IDO</td>
                        </tr>                    
                        <tr>
                            <td>WHERE?</td>
                            <td className="yellow">Atomic DEX</td>
                        </tr>                                                
                        <tr>
                            <td>WHAT PAIRS?</td>
                            <td className="yellow">TKL/KMD</td>
                        </tr>
                        <tr>
                            <td>CAN I JOIN?</td>
                            <td className="yellow">Yes, anyone can join</td>
                        </tr>
                        <tr>
                            <td>GET READY?</td>
                            <td className="yellow">BUY KMD</td>
                        </tr>
                        <tr>
                            <td>PHASE 1?</td>
                            <td className="yellow"> <a href={links.idoLiveStream}>Watch Finished Live Stream</a></td>
                        </tr>
                        </tbody>
                    </table>
                </InfoTable>
            </div>
            <Section>
                <SectionHeader>
                    IDO LIVE data
                </SectionHeader>

                {(tklSold && kmdRaised && usdRaised) ?
                        <IDOResults>
                            <div className="col">
                                <h3 className="label">TKL Sold</h3>
                                <p className="big">{tklSold}</p>
                            </div>
                            <div className="col">
                                <h3 className="label">KMD Raised</h3>
                                <p className="big">{kmdRaised}</p>
                            </div>
                            <div className="col">
                                <h3 className="label">USD Raised</h3>
                                <p className="big">{usdRaised}</p>
                            </div>                    
                        </IDOResults>

                    : <h3>loading...</h3>
            }
            </Section>
            <Participate>
                <SectionHeader>HOW to participate</SectionHeader>
                <p>In order to participate, make sure you have downloaded AtomicDEX and have created a wallet there. All you need to do is purchase KMD and have it ready in your AtomicDEX wallet. Then, check AtomicDEX for KMD/TKL orders and purchase them during the 2 week period. It is as simple as that.</p>
                <p style={{textAlign: 'center'}}><a href={links.aDEXStepByStep}>AtomicDEX Step by Step tutorial</a></p>
                <p style={{textAlign: 'center'}}><a href={links.ca333interview}>Komodo CTO ca333 talks about AtomicDEX</a></p>
            </Participate>

            <Section>
                <SectionHeader>
                All you need to know about TOKEL IDO
                </SectionHeader>
                <Video>
                <iframe
                    src="https://www.youtube.com/embed/6Neor1_xRnU">
                </iframe>
                </Video>
            
             <Phases>
                <div className="phase"><h3>PHASE 1: Price discovery</h3>

                    <h4><a style={{color: '#FAB64B', marginLeft: '0'}} href={links.idoLiveStream}>Watch Finished Live Stream</a></h4>
                    <br></br>
                    <Phase1Table>

                        <tbody>
                        <tr>
                            <td className="uppercase">Started</td>
                            <td>30th Aug 8:00 PM UTC</td>
                        </tr>
                        <tr>
                        <td className="uppercase">Finished</td>
                            <td>30th Aug 8:30pm UTC</td>
                        </tr>
                        <tr>
                            <td className="uppercase">TKL sold</td>
                            <td>500 000</td>
                        </tr>
                        <tr>
                        <td className="uppercase">TKL left</td>
                            <td>0</td>
                        </tr> 
                        <tr>
                        <td className="uppercase">KMD raised</td>
                            <td>102953.6</td>
                        </tr>     
                        </tbody>                                           
                    </Phase1Table>
                    <br/><br/>
                   <h3>Phase 1: About</h3>
                    <p style={{fontSize: '14px'}}>The purpose of this phase is to conduct a level of price discovery. If you think TKL is worth more than the current lowest offer, purchase it. If you do not, wait for Phase 2 to purchase more. If you wish to wait until the price has been discovered, wait for Phase 2 to start before participating. </p><br/>
                    <p>Total TKL: 500 000 TKL <br/><br/>
                        Time period: 48 hrs<br/><br/>
                        Total offers: 50<br/><br/>
                        Amount per offer: 10,000 TKL each<br/><br/>
                        Starting at: 0.01 KMD<br/><br/>
                        Increasing by: 0.008 KMD per offer<br/><br/>
                        Ending at: 0.402 KMD<br/><br/>

                        I.e<br/><br/>
                        Order 1: 10,000 TKL @ 1 TKL for 0.01 KMD<br/>
                        Order 2: 10,000 TKL @ 1 TKL for 0.018 KMD<br/>
                        Order 3: 10,000 TKL @ 1 TKL for 0.026 KMD<br/>
                        ...<br/> 
                        ...<br/>
                        ...<br/>
                        Order 48: 10,000 TKL @ 1 TKL for 0.386 KMD<br/>
                        Order 49: 10,000 TKL @ 1 TKL for 0.394 KMD<br/>
                        Order 50: 10,000 TKL @ 1 TKL for 0.402 KMD<br/><br/></p>
                </div>
                <div className="phase">
                    <h3>Phase 2: Main ido</h3>
                    <p style={{fontSize: '14px'}}>During this phase, the total 19.5 million TKL will listed at a single price. This price will be 70% of the final Phase 1 price. You can swap any amount of KMD for TKL at your convenience within the 14 days that Phase 2 will be running. 
                        </p><br/><br/>
                    <p>Total TKL: 19 500 000 + leftover Phase 1 <br/><br/>
                        Time period: 14 days<br/><br/>
                        TKL price: 0.2814 KMD/TKL<br/><br/><br/><br/><br/></p>
                </div>                
            </Phases>
            </Section>
            <Section>
                <SectionHeader>In depth IDO details</SectionHeader>
                <p>If you would like a more indepth look into the IDO details and offers, please take a look at this excel document that outlines every Phase 1 offer, and the equivalent Phase 2 price should the price discovery stop on that offer. <br/> <a href="/IDODetails.xlsx">IDO details for download</a></p>                
            </Section>

            <Section>
                <SectionHeader>
                Tokel Platform Showcase
                </SectionHeader>
                <Video>
                <iframe
                    src="https://www.youtube.com/embed/rcNCMYblk2M">
                </iframe>
                </Video>
            </Section>
            <Section>
                <SectionHeader>
                    DISCLAIMER
                </SectionHeader>
                <p>As always, you are required to do your own research and not take any of this as financial advice; we do not endorse any specific activity. Ownership of the TKL coin carries no rights; it is used to create tokens and send transactions on the Tokel blockchain. These TKL are being sold to creators and users of the blockchain for this sole purpose. There are no guarantees of TKLs future value. There should be no expectation that TKL will ever generate any value other than for the use case described. All trades on AtomicDEX are non-refundable. Nobody in the Tokel community or team are liable for any loss caused, whether due to negligence or otherwise arising from the use of, or reliance on, any information provided directly or indirectly.</p>
            </Section> 
            <Section>
                <div style={{marginBottom: '150px', textAlign: 'center'}}>
                    <SectionHeader>
                        QUESTIONS?
                    </SectionHeader>
                    <p style={{textAlign: 'center', marginBottom: '20px'}}>Contact us at <a href="mailto:contact@tokel.io">contact@tokel.io</a> or join <a href={links.discord}>Tokel Discord</a> </p>
                </div>    
            </Section>       
            <Galaxy className="tokelGalaxy" src={tokelGalaxy}/>
        </IdoRoot>
    </PageRootContainer>
  )
}

Ido.propTypes = {
  data: PropTypes.any
}
export default Ido
