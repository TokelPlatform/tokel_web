import React from 'react';
// import breakpoints from "../../styles/breakpoints";
import styled from '@emotion/styled';
import FeatureHeader from 'components/Molecules/Features/FeatureHeader';
import Project from 'components/Molecules/Project';
import Download from 'components/Molecules/Download';
import ecosystem from 'images/ecosystem.svg';
import icons from 'data/icons';
import ClickableIcon from 'components/Atoms/ClickableIcon';
import links from 'data/links';

const EcosystemRoot = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  background: url(${ecosystem});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const podcastIcons = [
  'deezer',
  'applePodcasts',
  'spotify',
  'amazonMusic',
  'googlePodcasts',
  'stitcher',
];

const Ecosystem = () => {
  return (
    <EcosystemRoot>
      <FeatureHeader
        title="Get to know what we create at Tokel"
        subtitle="Tokel Ecosystem"
        desc="Try out the dApp, we know you will love it!"
      />
      <div></div>
      <Project
        title="Tokel All In One Platform"
        desc={
          <div>
            <ul>
              <li>Create NFTs and tokens in the click of a button</li>
              <li>Store and send tokens and NFTs</li>
              <li>Browse the Marketplace for new digital collectilbles</li>
              <li>Trade your NFTs and tokens using the on-chain DEX</li>
              <li>Uses a leading edge, decentralized, super light client</li>
              <li>Does not require blockchain download</li>
            </ul>
            <h5>FEATURES</h5>
            <p>TOKEN and COIN WALLET</p>
            <p>TOKEN DEX</p>
            <p>TOKEN CREATION TOOL</p>
            <p>NFT MARKETPLACE</p>
            <Download win="#" mac="#" lin="#" />
          </div>
        }
      />
      <Project
        title="Saturn"
        desc={
          <div>
            <p>Shhhh....... Nothing to see here!</p>
            <p>
              This is a top secret project that is currently in development. We hope to bring it to
              you all soon. Once it is out, it will make Tokel tokens and NFTs available everywhere
              on the web!
            </p>
            <p> Coming soon....</p>
          </div>
        }
      />
      <Project
        title="Tokel Talk Podcast"
        desc={
          <div>
            <p>
              <a href="#">Voted #2 in the Top 10 best NFT podcasts</a>{' '}
            </p>
            <p>
              Listened to in 49 countries. Downloaded in 142 cities. Streamed on 7 social networks.
            </p>
            <p>
              Listen live and engage with the guests, or listen anywhere you get your podcasts. The
              Tokel Talk podcast aims to educate and inform listeners of the latest in NFT and token
              trends while discussing the future of the space with top guests in the cryptosphere.
            </p>
            {podcastIcons.map((icon, key) => (
              <ClickableIcon key={key} link={links[icon]} icon={icons[icon]} />
            ))}{' '}
            <br />
            <br />
            <a href="#">Apply to Be a Guest on Tokel Talk Podcast</a>
          </div>
        }
      />
    </EcosystemRoot>
  );
};

export default Ecosystem;
