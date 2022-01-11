import Footer from "../components/Organisms/Footer"
import { Helmet } from "react-helmet"
import { PageHeader } from "../components/Atoms/Title"
import PropTypes from 'prop-types'
import React from "react"
import Stars from "../components/Atoms/Stars"
import TopBar from "../components/Molecules/TopBar"
import { Video } from "../components/Atoms/Video"
import breakpoints from "../styles/breakpoints"
import features from '../images/launch/features.svg'
import flyingTokel from '../images/launch/flying-tokel.svg'
import links from "../data/links"
import planetsOrbits from '../images/launch/planets-orbits.svg'
import styled from "@emotion/styled"

const ChainLaunchRoot = styled.div`
  background: linear-gradient(180deg, #13182A 0%, #263867 100%); 
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

export default function Faq() {
  return (
    <div>
    <Helmet>
        <meta charSet="utf-8" />
        <title>FAQ | Tokel Platform </title>
        <meta name="description" content="With the Tokel App you can sell art, browse NFTs, create and trade tokens for your projects. All on a unified and inexpensive platform." />
    </Helmet>
    <ChainLaunchRoot> 
      <Stars starSize={'small'} />
      <Stars starSize={'medium'}/>
      <Stars starSize={'big'}/>
      <TopBar />  

      <TokelQuestionsWrapper>
        <WhyTokel>
          <PageHeader>TOKEL FAQ</PageHeader>
          <div>
            <WhiteHeader>
              What can Tokel do for you?
            </WhiteHeader>
            <Answer>
              <ul>
                <li>Simplify the way you interact with the blockchain.</li>
                <li>Bring ease to your token project processes.</li>
                <li>Tokenize and sell your art.</li>
                <li>Create and distribute ticket tokens.</li>
                <li>Create, manage and trade tokens for your project.</li>
                <li>Remove the unnecessary hassle that comes with running your own blockchain, explorer and wallet.</li>
              </ul>
            </Answer>
          </div>
          <div>
            <WhiteHeader>
            WHAT IS TOKEL?
            </WhiteHeader>
            <Answer>
            Tokel is a blockchain. One of our products is a Tokel Plarform dApp, An ALL-in-ONE platform for your token projects. Tokel is a Komodo smart chain, secured against 51% attacks with dPoW (delayed Proof of Work).
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
            Your token is safe from 51% attacks as Tokel is secured through dPoW. Tokel and your tokens are protected by Komodo&apos;s &amp; Litecoin&apos;s hashrate using Komodo dPoW technology.<br/> <br/>

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
            Please be aware we are still in development. Currently the GUI application has a working coin and token wallets and a Token Creation Tool. All other features are already active on the Tokel blockchain and can be accessed via the command line. See our <a href={links.documentationChain}>documentation</a> for instructions. 
            <br /><br /> 
            Also have a look at the <a href="/roadmap">Roadmap</a> for development plans.
            </Answer>
          </div> 
          <div>
            <WhiteHeader>
            What features are currently available?
            </WhiteHeader>
            <Answer>
            The GUI application currently works as a coin wallet, token wallet and a token creation tool. NFT marketplace and DEX are coming soon too. <br /> <br /> However, you can access all feature using the command line, as the chain itself supports all the features from the start. See the <a href={links.documentationChain}>documentation</a> for instructions.
            </Answer>
          </div>
          <div>
            <WhiteHeader>
            Is the application still in development?
            </WhiteHeader>
            <Answer>
            Yes, the Tokel desktop dApp is currently in development and is moving fast. You can already use it. Download the latest release <a href={links.github_release_page}>here</a>.
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
            Download the latest release <a href={links.github_release_page}>here</a> and see the video below for instructions.
              <Video>
                <iframe
                    src="https://www.youtube.com/embed/dZikw30vO2U">
                </iframe>
              </Video>
            </Answer>
          </div>   
          <div>            
            <WhiteHeader>
            How did you raise money?
            </WhiteHeader>
            <Answer>
              Ah, glad you asked. We had a first of a kind IDO on AtomicDEX. Please see <a href="/ido">this page for details</a>.
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
                <a href={links.youtube}>Youtube</a>  <br/>
                <a href={links.spotify}>Spotify</a>  <br/>
                <a href={links.apple_podcasts}>Apple Podcasts</a>
              </p>
            </Answer>
          </div>  
        </WhyTokel>
        <Contact>
          <h3>Contact us at <a href="mailto:contact@tokel.io">contact@tokel.io</a> or join <a href="https://discord.gg/SQzdUQWXrn">Tokel Discord</a> </h3>
          <img src={flyingTokel}></img>
        </Contact>
      </TokelQuestionsWrapper>
    </ChainLaunchRoot>
      <Footer/>
    </div>
  )
}

Faq.propTypes = {
    data: PropTypes.any
  }