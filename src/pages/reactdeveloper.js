import * as React from "react"
import styled from "@emotion/styled"
import Stars from "../components/Atoms/Stars"
import LogoText from "../components/Atoms/LogoText"

const Container = styled.div`
    background: linear-gradient(180deg, #13182A 0%, #263867 100%);
    h1 {
        text-align: center;
        padding-top: 10rem;
        font-weight: 400;
        color: var(--color-almostWhite);
    }
    padding-bottom: 5rem;

    a {
        color: var(--color-purple);
    }

`
const Disclaimer = styled.div`
    opacity: 0.7;
    margin:0;
    // border-top: 0.5px solid white;
    // border-bottom: 0.5px solid white;
    margin-top: 3rem;
    margin-bottom: 3rem;
    p {
        font-size: 0.875rem;
    }
    h4 {
        margin-bottom: 0;
    }

`
const Content = styled.div`
    margin: auto;
    width: 600px;
    p, h1, h3, h4, ul, li {
        color: var(--color-almostWhite);
    }
    p, ul, li {
        opacity: 0.85;
    }
    p {
        font-weight: 400;
    }
    h1 {
        text-align: center;
        margin:auto;
        font-weight: 400;
        color: var(--color-almostWhite);
    }
    h3 {
        margin-top: 4rem;
    }
`

// markup
const ReactDeveloper = () => {
  return (
      <Container>  
        <Stars starSize={'small'} />
        <Stars starSize={'medium'}/>
        <Stars starSize={'big'}/>   

        <h1><LogoText /> is hiring a React developer</h1> 
          <Content>
            <Disclaimer>
                <h4>DISCLAIMER</h4>
                <p>It is quite a lot to wrap your head around with all the crypto information. For now we just need a person who can implement designs and has a good understanding of React structure. You can slowly get involved and study all the other parts throughout the process. We will do our best to make it as easy as possible for you.</p>
            </Disclaimer>
            <h3 id="project"># The Project </h3>
            <p>We are creating an open source Electron app in React. It is a wallet (using nspv), DEX, NFT marketplace using Komodo Platform technologies. It will be Komodo’s main token platform. This project aims to support Komodo and allow users easy access to Komodo’s token technology. We love and support Komodo and this is where this project is born from.</p>
            
            <p>The app is in very early beginning so a lot can be changed if needed. </p>

            <p> The designs are based on a different already existing app, which was not successfully implemented. We are re-implementing the designs but adding our logic. </p>
            <p>Electron app will be working with Komodo Platform Crypto Conditions API (Antara Modules). All the APIs and instructions will be provided. The API already exists but some functions are not implemented yet and are being implemented by the Komodo team at the moment.</p>
            
            <p>Simply put, Komodo allows to create Smart Chains (link below). TOKEL is a smart chain and will allow anyone using TOKEL platform to create tokens on the platform. All the backend logic has already been implemented by the Komodo team (or in progress now).</p>

            <h3 id="requirements"># Requirements</h3>

            <ul>
                <li>Experience with React and Typescript (pretty important)</li> 
                <li>Experience with Electron is preferred</li>
                <li>Good level of English, can ask questions, read technical documentation</li>
                <li>Design sense - please speak up if something in the design doesn’t make sense</li>
                <li>Independence</li>
                <li>Please ask as many questions as you need</li>
                <li>Communicate everything that is going on, especially if you are unavailable or something has changed. Life happens but we need to know if anything is going on to adjust ourselves accordingly.</li>
            </ul>

            <h3 id="job"># The Job</h3>

            <p>You will work alongside another developer. We will create GitHub issues for you at the start with detailed explanations and later as the work progresses we can decide on what should be done next together, once you are more involved in the project. </p>
            <ul>
                <li>Continuous Implementation of designs (see below for link)</li>
                <li>Implementation of React application logic</li> 
                <li>Minimum availability about 10-15hrs/week</li>
                <li>All the tasks will be submitted as Pull Requests for revision. The smaller pull requests the better.</li>
                <li>Changes in the app structure are welcome</li>
            </ul>

            <h3># Budget</h3>

            <p>Your renumeration is open to dicussion.</p>
            <p>Payment can be made in USD/EUR or if interested in KMD.</p>
            
            <h3># Sources</h3>

            <a href="https://www.figma.com/file/KHt6RPqitWphkuchA8vo0I/TOKEL-UI?node-id=2709%3A17665">Figma Design resources</a><br/>
            <a href="https://tokel.io/">TOKEL website</a><br/>
            <a href="https://tokel.io/TokelPaper1stEdition.pdf">Check out the white paper</a><br/>
            <a href="https://developers.komodoplatform.com/basic-docs/smart-chains/smart-chain-setup/nspv.html">Komodo Smart Chains</a><br/>
            <a href="https://developers.komodoplatform.com/basic-docs/smart-chains/introduction-to-smart-chain-documentation.html">Komodo NSPV docs</a><br/>


            <h3># Contact</h3>
            
            <p>For any questions please reach out to <a href="mailto:hello@daria.engineer">hello@daria.engineer</a>.<br/>
            Feel free to join the <a href="https://discord.gg/R9u43zYZka">Tokel Discord</a> and find me there (daria).</p>

          </Content>

      </Container>
  )
}

export default ReactDeveloper
