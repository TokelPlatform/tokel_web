import React from "react"
import PropTypes from 'prop-types'

import styled from "@emotion/styled"

import Stars from "../components/Atoms/Stars"
import TopBar from "../components/Molecules/TopBar"
import Footer from "../components/Organisms/Footer"
import links from "../data/links"
import features from '../images/launch/features.svg'
import flyingTokel from '../images/launch/flying-tokel.svg'
import planets from '../images/launch/planets-bg-desktop.svg'
import planetsMobile from '../images/launch/planets-bg-mobile.svg'
import planetsOrbits from '../images/launch/planets-orbits.svg'
import pointer from '../images/launch/pointer.svg'
import breakpoints from "../styles/breakpoints"

const ChainLaunchRoot = styled.div`
  background: linear-gradient(180deg, #13182A 0%, #263867 100%); 
`

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin-top: 35vh;
    font-size: 60px;
    line-height: 75px;
    color: white;
    text-align: center;
    margin-bottom: 0px;
    font-family: var(--font-family-primary);
    @media (max-width: ${breakpoints.smallScreen}) {
      font-size: 60px;
      line-height: 65px;
    } 
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 60px;
      line-height: 65px;
      margin-top: 20vh;
      width: 600px;
    } 
    @media (max-width: ${breakpoints.mobilemiddle}) {
      font-size: 50px;
      line-height: 55px;
      margin-top: 20vh;
      width: 600px;
    } 
    @media (max-width: 39rem) {
      width: 70vw;
      margin-top: 10vh;
      font-size: 40px;
      line-height: 45px;
    }    
    @media (max-width: ${breakpoints.minimobile}) {
      font-size: 30px;
      line-height: 35px;
    } 
    @media (max-width: ${breakpoints.supermini}) {
      margin-top: 10vh;
      font-size: 26px;
      line-height: 35px;
    } 
  }
  h2 {
    font-family: var(--font-family-primary);
    font-size: 32px;
    font-weight: 400;
    line-height: 38px;
    color: white;
    max-width: 800px;
    text-align: center;
    margin: 4px 0 18px 0;
    opacity: 0.7;
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 26px;
    } 
    @media (max-width: ${breakpoints.mobilebig}) {
      max-width: 500px;
    } 
    @media (max-width: ${breakpoints.mobilemiddle}) {
      font-size: 20px;
      max-width: 400px;
      line-height: 28px;
    } 
    @media (max-width: ${breakpoints.mobile}) {
      width: 70vw;
      max-width: 360px;
      line-height: 28px;
    } 
    @media (max-width: ${breakpoints.supermini}) {
      font-size: 18px;
      line-height: 24px;
    } 
    
  }
  h3 {
    font-family: var(--font-family-secondary);
    font-size: 26px;
    font-weight: 400;
    color: #FAB64B;
    @media (max-width: ${breakpoints.mobilemiddle}) {
      font-size: 18px;
    } 
    @media (max-width: ${breakpoints.supermini}) {
      font-size: 16px;
      line-height: 26px;
    } 
  }
`

const ChainLaunchWrapper = styled.div`
  background-image: url(${planets});
  background-repeat: no-repeat;
  background-position: 100px -5px;
  padding: 0;
  margin: 0;
  background-size: 110vw;
  @media (max-width: ${breakpoints.smallScreen}) {
    background-size: 120vw;
    background-position: 30px -5px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    background-size: 135vw;
    background-position: -80px -20px;
  }  
   @media (max-width: ${breakpoints.mobilebig}) {
    background-size: 140vw;
    background-position: -30px -40px;
  } 
  @media (max-width: ${breakpoints.mobilemiddle}) {
    background-size: 70vw;
    background-position: 220px -30px;
    background-image: url(${planetsMobile});
  } 
  @media (max-width: 39rem) {
    background-position: 200px -30px;
    background-image: url(${planetsMobile});
  } 
  @media (max-width: ${breakpoints.mobile}) {
    background-size: 60vw;
    background-position: 220px 0px;
    background-image: url(${planetsMobile});
  } 
  @media (max-width: 30rem) {
    background-size: 80vw;
    background-position: 120px 0px;
    background-image: url(${planetsMobile});
  }

`

const Terminal = styled.div`
  /* min-height: 534px; */
  max-width: 640px;
  background-color: black;
  border: 1px solid #8C8C8C;
  box-sizing: border-box;
  padding: 20px 40px;
  border-radius: 10px;
  margin-left: 300px;
  z-index: 1;
  @media (max-width: ${breakpoints.smallScreen}) {
    margin: auto;
  }
  @media (max-width: ${breakpoints.mobile}) {
    margin: auto;
    width: 100vw;
  }
`

const KomodoCommand = styled.p`
  line-height: 26px;
  padding-bottom: 20px;
  color: #DEDEDE;
  font-size: 14px;
  font-family: 'ibm_plex', monospace;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 12px;
  } 
`

const KomodoExplanatory = styled(KomodoCommand)`
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 12px;
  } 
  @media (max-width: ${breakpoints.minimobile}) {
    /* font-size: 10px; */
  }
  @media (max-width: ${breakpoints.supermini}) {
    /* font-size: 10px; */
    display: none;
  } 
`

const TokelQuestionsWrapper = styled.div`
  background-image: url(${planetsOrbits});
  background-repeat: no-repeat;
  background-position: center 1070px;
  padding: 0;
  margin: 0;
  @media (max-width: ${breakpoints.mobile}) {
    padding: 40px;
  }  
`
const WhyTokel = styled.div`
  display: grid;
  grid-gap: 50px;
  padding-top: 150px;
  max-width: 540px;
  margin: auto;
  @media (max-width: ${breakpoints.mobile}) {  
    padding-top: 50px;
  }
`

const Hightlighted = styled.h3`
  text-transform: uppercase;
  margin-bottom: 10px;
  color: #FBB74D; 
  font-weight: 700;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 16px;
  } 
`

const Contact = styled.div`
  text-align: center;
  padding: 50px 0 50px 0;
  h3 {
    font-size: 26px;
    color: white;
    line-height: 36px;
  }
`

const HowToRun = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 100px;
  font-size: 14px;
  font-family: 'ibm_plex', monospace;
  height:  150px;
  margin-left: 20px;
  @media (max-width: ${breakpoints.smallScreen}) {
      margin-top: 30px;
      margin: auto;
  }
  img {
    @media (max-width: ${breakpoints.smallScreen}) {
      transform: rotate(180deg);
    }
    @media (max-width: ${breakpoints.mobile}) {
      width: 60px;
    }
  }
  a {
    margin-left: 10px;
    @media (max-width: ${breakpoints.smallScreen}) {
      padding-top: 150px;
      margin-left: -100px;
    }
  }
`


const TerminalWrapper = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  @media (max-width: ${breakpoints.smallScreen}) {
    grid-template-columns: none;
    grid-template-rows: auto;
  }
`

const WhiteHeader = styled.h2`
  font-size: 26px;
  font-family: var(--font-family-secondary);
  text-transform: uppercase;
  color: #F0F0F0;
  margin-bottom: 30px;
  font-weight: 700;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 20px;
  }
`

const Answer = styled.p`
  font-family: 'ibm_plex', monospace;
  font-size: 16px;
  font-weight: 400;
  color: white;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
  }
`

const TokelTokenBenefits = styled.div`
  padding: 0;
  margin: 0;
`

const FeaturesImage = styled.img`
  margin-top: 50px;
  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`

const HiddenDots = styled.span`
  display: inline;
  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`
export default function ChainLaunch() {
  return (
    <div>
    <ChainLaunchRoot>  
      <ChainLaunchWrapper>
      <Stars starSize={'small'} />
      <Stars starSize={'medium'}/>
      <Stars starSize={'big'}/>
      <TopBar />  
      <Hero>
        <h1>We have launched the Tokel chain!</h1>
        <h2>Sell art. Browse NFTs. Create and trade tokens for your projects. All on a unified and inexpensive platform.</h2>
        <h3>IDO coming soon on <a href="https://komodoplatform.com/en/wallets.html">Atomic DEX</a></h3>
        
        <TerminalWrapper>
          <Terminal>
            <KomodoCommand>
            ./komodod -ac_name=TOKEL -ac_supply=100000000 -ac_eras=2 -ac_cbmaturity=1 -ac_reward=100000000,4250000000 -ac_end=80640,0 -ac_decay=0,77700000 -ac_halving=0,525600 -ac_cc=555 -ac_ccenable=236,245,246,247 -ac_adaptivepow=6 -addnode=135.125.204.169 -addnode=192.99.71.125 -addnode=144.76.140.197 -addnode=135.181.92.123 &
            </KomodoCommand>
            <KomodoExplanatory>
              komodod..........<HiddenDots>........</HiddenDots>.....komodo daemon <br/>
              -ac_name........<HiddenDots>........</HiddenDots>......chain name <br/>
              -ac_supply<HiddenDots>........</HiddenDots>............total supply <br/>
              -ac_eras<HiddenDots>........</HiddenDots>..............reward variation<br/>
              -ac_cbmaturity<HiddenDots>........</HiddenDots>........cb maturity alteration <br/>
              -ac_reward<HiddenDots>........</HiddenDots>............reward/block <br/>
              -ac_end<HiddenDots>........</HiddenDots>...............rewards end <br/>
              -ac_decay<HiddenDots>........</HiddenDots>.............reward decrease <br/>
              -ac_halving<HiddenDots>........</HiddenDots>...........halving blocks <br/>
              -ac_cc<HiddenDots>........</HiddenDots>................network cluster <br/>
              -ac_ccenable..<HiddenDots>........</HiddenDots>........Antara modules <br/>
              -ac_adaptivepow<HiddenDots>........</HiddenDots>.......APow version <br/>
              -addnode<HiddenDots>........</HiddenDots>..............seed nodes <br/>
              &.<HiddenDots>........</HiddenDots>....................run in the background <br/>
            </KomodoExplanatory>
          </Terminal>

          <HowToRun>
            <img width="90px"src={pointer}/>
            <a href="https://docs.tokel.io/guides/LaunchTheChain/">how to run Tokel chain</a>
          </HowToRun>
        </TerminalWrapper>

      </Hero>
      <TokelQuestionsWrapper>
        <WhyTokel>
          <div>
            <WhiteHeader>
              What can Tokel do for you?
            </WhiteHeader>
            <Answer>
              <ul>
                <li>Tokenize and sell your art.</li>
                <li>Create and distribute ticket tokens.</li>
                <li>Create, manage and trade tokens for your project.</li>
                <li>Simplify the way you interact with the blockchain.</li>
                <li>Bring ease to your token project processes.</li>
                <li>Remove the unnecessary hassle that comes with running your own blockchain, explorer and wallet.</li>
              </ul>
            </Answer>
          </div>
          <div>
            <WhiteHeader>
            WHAT IS TOKEL?
            </WhiteHeader>
            <Answer>
            An ALL-in-ONE platform for your token projects. Tokel is a Komodo smart chain, secured against 51% attacks with dPoW (delayed Proof of Work).
            <FeaturesImage src={features}/>
            </Answer>
          </div>
          <TokelTokenBenefits>
            <WhiteHeader>
            THE benefits of creating a token on the tokel blockchain
            </WhiteHeader>
            <Answer>
            <Hightlighted>no chain requirements</Hightlighted>
            There are no requirements to create and manage your own blockchain. <br/> <br/>
            
            <Hightlighted>simple to use GUI</Hightlighted>
            Free, simple to use GUI for token usage, management and creation. <br/> <br/>

            <Hightlighted>token wallet integration</Hightlighted>
            Your token will have immediate token wallet integration.<br/> <br/>

            <Hightlighted> token explorer integration</Hightlighted>
            Your token will have immediate token explorer integration.<br/> <br/>

            <Hightlighted>safe from 51% attacks</Hightlighted>
            Your token is safe from 51% attacks as Tokel is secured through dPoW. Tokel and your tokens are protected by Bitcoin’s hashrate using Komodo's dPoW technology.<br/> <br/>

            <Hightlighted>sell your tokens immediately</Hightlighted> 
            You will have the ability to sell your tokens immediately after creation with Tokel’s built-in tokenDEX and NFT marketplace integration.<br/> <br/>

            <Hightlighted>exchange partnerships</Hightlighted>
            Tokel exchange partnerships mean your token will have a centralized exchange listing option. Exchanges only need to run the Tokel chain in order to access every single token on it.

            </Answer>
          </TokelTokenBenefits>
          <div>
            <WhiteHeader>
            Where can I download the application from?
            </WhiteHeader>
            <Answer>
            You can download it from our <a href={links.github_release_page}>Release page</a>. 
            <br /><br />
            Please be aware we are still in heavy development, and currently the GUI application only functions as a coin wallet. All other features are already active on the Tokel blockchain and can be accessed via the command line. See our <a href={links.documentationChain}>documentation</a> for instructions. 
            <br /><br /> 
            Also have a look at the <a href="/roadmap">Roadmap</a> for development plans.
            </Answer>
          </div> 
          <div>
            <WhiteHeader>
            What features are currently available?
            </WhiteHeader>
            <Answer>
            The GUI application currently works as a coin wallet and the token wallet is currently in progress. NFT marketplace and DEX are coming soon too. <br /> <br /> However, you can access all feature using the command line, as the chain itself supports all the features from the start. See the <a href={links.documentationChain}>documentation</a> for instructions.
            </Answer>
          </div>
          <div>
            <WhiteHeader>
            Is the application still in development?
            </WhiteHeader>
            <Answer>
            Yes, the Tokel desktop application is currently in development and is moving fast. You can already use it as a functional coin wallet by downloading the first release <a href={links.github_release_page}>here</a>.
            </Answer>
          </div>
          <div>
            <WhiteHeader>
            IS THIS AN OPEN SOURCE PROJECT?
            </WhiteHeader>
            <Answer>
            Yes, we are very proud to be a completely transparent and open source project. Please check out the <a href="https://github.com/TokelPlatform">github</a> or join the <a href="https://discord.gg/SQzdUQWXrn">Discord server</a> and get involved with the community!
            </Answer>
          </div>   
          <div>
            <WhiteHeader>
            HOW IS THIS PROJECT CONNECTED TO KOMODO?
            </WhiteHeader>
            <Answer>
            Our project uses Komodo technology and we are also in strategic partnership with Komodo. Oh and also, we love Komodo!
            </Answer>
          </div>   
          <div>
            <WhiteHeader>
            HOW DO I CREATE TOKENS?
            </WhiteHeader>
            <Answer>
            Currently, we are working on a easy to use GUI to create tokens. In the meantime, you can try the CLI interface. See the documentation for details.
            </Answer>
          </div>          
          <div>
            <WhiteHeader>
            Where can I get more information?
            </WhiteHeader>
            <Answer>
            <p>
                <a href={links.bitcoinTalk}>Bitcoin talk</a><br/>              
                <a href={links.discord}>Discord</a><br/>
                <a href={links.documentationChain}>Documentation</a> <br/>                
                <a href={links.floteApp}>Flote</a> <br/>
                <a href={links.github}>Github</a><br/>           
                <a href={links.medium}>Medium</a> <br/>
                <a href={links.reddit}>Reddit</a> <br/>
                <a href={links.telegram}>Telegram</a> <br/>
                <a href={links.twitter}>Twitter</a> <br/>
                <a href={links.whitepaper}>WhitePaper</a> <br/>
                <a href={links.youtube}>Youtube</a>
              </p>
            </Answer>
          </div>  
        </WhyTokel>
        <Contact>
          <h3>Contact us at <a href="mailto:contact@tokel.io">contact@tokel.io</a> or join <a href="https://discord.gg/SQzdUQWXrn">Tokel Discord</a> </h3>
          <img src={flyingTokel}></img>
        </Contact>
      </TokelQuestionsWrapper>
      </ChainLaunchWrapper> 
    </ChainLaunchRoot>
      <Footer/>
    </div>
  )
}

ChainLaunch.propTypes = {
    data: PropTypes.any
  }