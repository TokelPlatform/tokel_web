import * as React from "react"

import Announcement from "../components/Molecules/Announcement"
import LogoImg from "../components/Atoms/LogoImg"
import PageRootContainer from "./template"
import PropTypes from 'prop-types'
import breakpoints from "../styles/breakpoints"
import idoBg from '../images/ido/ido-bg.svg'
import idoBgMobile from '../images/ido/ido-bg-mobile.svg'
import links from "../data/links"
import styled from '@emotion/styled'
import tokelGalaxy from '../images/ido/galaxy.svg'

const IdoRoot = styled.div`
    background-image: url(${idoBg});
    background-repeat: no-repeat;
    background-position: center 120px;
    padding: 80px 50px 150px 50px;
    @media (max-width: ${breakpoints.mobilebig}) {
        background-image: url(${idoBgMobile});
        background-position: center 150px;
        padding: 20px 20px 150px 20px;   
    }      
    @media (max-width: ${breakpoints.mobile}) {
        background-image: none;
    }
    @media (max-width: ${breakpoints.minimobile}) {
        padding: 20px 20px 50px 20px;
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

const InfoTable = styled.div`
    border: 1px solid white;
    width: 500px;
    height: 100%;
    padding-top: 20px;
    padding-bottom: 20px;    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .yellow {
        font-weight: 600;
        color: #FAB64B;
    }
    &>h2 {
        margin-bottom: 0px;
        margin-top: 0px;
    }
    &>h1 {
        margin-top: 5px;
    }
    &>p {
        margin-bottom: 0;
    }
    @media (max-width: ${breakpoints.mobile}) {
        width: 100%;
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
    margin-bottom: 30px;
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
        margin-bottom: 10px;
        padding: 20px;
    }   
    @media (max-width: ${breakpoints.minimobile}) {
        margin-top: 0px;
    }
`
const SectionHeader = styled.h3`
    margin-bottom: 0px;
    font-size: 28px !important;
    @media (max-width: ${breakpoints.mobile}) {
        text-align: center;
        font-size: 20px !important;
    } 
`

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 620px;
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

const Highlight = styled.span`
    color: white;
    font-weight: 700;
    font-size: 20px;
    opacity: 1;
`

const Ido = ()  => {

  return (
    <PageRootContainer>
        <Announcement />
        <IdoRoot>
            <LogoImg width="80px" mobileWidth="50px"/>
            <div>
                <Title>TOKEL IDO</Title>
                <InfoTable>
                    <h2>SOLD</h2>
                    <h1 className="yellow">2,695,306 TKL</h1>
                    <h2>RAISED</h2>
                    <h1 className="yellow">722,837 KMD</h1>
                    <h2>EQUIVALENT</h2>
                    <h1 className="yellow">$831,262</h1>
                    <p>KMD price on 15.09.2021 8pm UTC</p>
                </InfoTable>
            </div>
            <Section>
                <SectionHeader>
                TIME-lock rewards plan
                </SectionHeader>

                <p style={{textAlign: 'center'}}>The Early Adopters that held TKL at the end of the IDO (8pm UTC on the 15th of September 2021) will receive:<br/><br/><br/>
                    <Highlight>1 TKL</Highlight> you hold = <Highlight>extra 6.258 TKL</Highlight><br/><br/>

                    <Highlight>3.129 TKL</Highlight> unlocked on the 15th June 2022<br/>
                    <Highlight>3.129 TKL</Highlight> unlocked on the 15th March 2023<br/><br/></p>

                    <h4 style={{textTransform:'uppercase'}}><a href="/rewards">Calculate your rewards here</a></h4>

                    <p style={{textAlign: 'center'}}>Thank you everyone for participating,<br/><br/>

                    The Tokel Team 💙</p>

            </Section>
            <Section>
                <SectionHeader>Where to buy TOKEL?</SectionHeader>
                <p>IDO is over but you can still purchase TOKEL in the open market on AtomicDEX.</p>
                <p style={{textAlign: 'center'}}><a href={links.aDEXStepByStep}>AtomicDEX Step by Step tutorial</a></p>
                <p style={{textAlign: 'center'}}><a href={links.ca333interview}>Komodo CTO ca333 talks about AtomicDEX</a></p>
                <Video>
                    <iframe
                        src="https://www.youtube.com/embed/fUs2l8kkBRQ">
                    </iframe>
                </Video>
            </Section>

            <Section>
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
                            <td>30th Aug 8:00pm UTC</td>
                        </tr>
                        <tr>
                        <td className="uppercase">Finished</td>
                            <td>30th Aug 8:30pm UTC</td>
                        </tr>
                        <tr>
                            <td className="uppercase">TKL sold</td>
                            <td>500 000 TKL</td>
                        </tr>
                        <tr>
                        <td className="uppercase">TKL left</td>
                            <td>0</td>
                        </tr> 
                        <tr>
                        <td className="uppercase">KMD raised</td>
                            <td>102 953 KMD</td>
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

                    <h4><a style={{color: '#FAB64B', marginLeft: '0'}} href={links.idoLiveStream}>Watch Tokel Discussion about NFTs and Tokens (Part 1)</a></h4>
                    <br></br>
                    <Phase1Table>

                        <tbody>
                        <tr>
                            <td className="uppercase">Started</td>
                            <td>1st  Sept 8pm UTC</td>
                        </tr>
                        <tr>
                        <td className="uppercase">Finished</td>
                            <td>15th Sept 8pm UTC</td>
                        </tr>
                        <tr>
                            <td className="uppercase">TKL sold</td>
                            <td>2 195 306 TKL</td>
                        </tr>
                        <tr>
                        <td className="uppercase">Time Lock rewards</td>
                            <td>17 304 694 TKL</td>
                        </tr> 
                        <tr>
                        <td className="uppercase">KMD raised</td>
                            <td>619 884 KMD</td>
                        </tr>     
                        </tbody>                                           
                    </Phase1Table>
                    <br/><br/>
                   <h3>Phase 2: About</h3>

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
