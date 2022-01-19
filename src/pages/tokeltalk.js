import * as React from "react"

import { Helmet } from "react-helmet"
import Img from "gatsby-image"
import PodcastRoot from "./template"
import PropTypes from 'prop-types'
import breakpoints from "../styles/breakpoints"
import { graphql } from "gatsby"
import links from "../data/links"
import styled from "@emotion/styled"

const PlayerContainer = styled.div`
  width: 100%;
  display: flex;
  max-width: 850px;
  margin: auto;
`

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: ${breakpoints.mobilemiddle}) {
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }
`

const Content = styled.div`
  padding: 10rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  h1 {
    font-size: 50px;
    line-height: 60px;
  }
  @media (max-width: ${breakpoints.smallScreen}) {
    padding: 5rem;
  }
  @media (max-width: ${breakpoints.mobilemiddle}) {
    padding: 2rem;
    h1 {
      font-size: 40px;
      line-height: 50px;
    }
  }
`

const Desc = styled.p`
  max-width: 800px;
  color: white;
`

const ListenOn = styled.div`
  margin: 5rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  a {
    transition: transform .2s;
  }
  a:hover {
    transform: scale(1.1);
    opacity: 1;
  }
`

const TokelTalk = ({data})  => {
  return (
      <PodcastRoot>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Tokel | Making NFT & Token Creation Easy For Everyone</title>
            <meta name="description" content="Tokel truly opens the door for every single person to create & access tokens and NFTs in an inexpensive, decentralized fashion." />
        </Helmet>
        <Content>
          <HeaderWrapper>
            <div>
              <h1><a href="https://www.bcast.fm/blog/best-nft-podcasts">One of the TOP best NFT podcasts</a></h1>              
              <Desc>Tokel Talk is the live stream and podcast of open-source, dedicated, fungible & non-fungible token (NFT) platform Tokel. The Tokel platform provides end-to-end token solutions to creators, businesses and projects alike.</Desc>
            </div>

          </HeaderWrapper>
          <PlayerContainer>
             <iframe src="https://embed.podcasts.apple.com/us/podcast/tokel-talk/id1598762562?itsct=podcast_box_player&amp;itscg=30200&amp;ls=1&amp;theme=dark" height="450px" frameBorder="0" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="autoplay *; encrypted-media *;" style={{width: "100%", overflow: "hidden", borderRadius: "10px", background: "transparent"}}></iframe>
          </PlayerContainer>  
          <ListenOn>
              <a href={links.podcast.apple}><Img fixed={data.apple.childImageSharp.fixed}></Img></a>
              <a href={links.podcast.amazon}><Img fixed={data.amazon.childImageSharp.fixed}></Img></a>
              <a href={links.podcast.deezer}><Img fixed={data.deezer.childImageSharp.fixed}></Img></a>
              <a href={links.podcast.google}><Img fixed={data.google.childImageSharp.fixed}></Img></a>
              <a href={links.podcast.spotify}><Img fixed={data.spotify.childImageSharp.fixed}></Img></a>
              <a href={links.podcast.stitcher}><Img fixed={data.stitcher.childImageSharp.fixed}></Img></a>

          </ListenOn>

        </Content>

      </PodcastRoot>
  )
}

export const query = graphql`
  query {
    tokeltalk: file(relativePath: { eq: "podcast/tokeltalk.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 900) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    apple: file(relativePath: { eq: "podcast/listen-on-apple.png" }) {
      childImageSharp {
        fixed(height: 58) {
          ...GatsbyImageSharpFixed
        }
      }
    } 
    amazon: file(relativePath: { eq: "podcast/listen-on-amazon.png" }) {
      childImageSharp {
        fixed(height: 58) {
          ...GatsbyImageSharpFixed
        }
      }
    } 
    deezer: file(relativePath: { eq: "podcast/listen-on-deezer.png" }) {
      childImageSharp {
        fixed(height: 58) {
          ...GatsbyImageSharpFixed
        }
      }
    } 
    google: file(relativePath: { eq: "podcast/listen-on-google.png" }) {
      childImageSharp {
        fixed(height: 58) {
          ...GatsbyImageSharpFixed
        }
      }
    }  
    spotify: file(relativePath: { eq: "podcast/listen-on-spotify.png" }) {
      childImageSharp {
        fixed(height: 58) {
          ...GatsbyImageSharpFixed
        }
      }
    }  
    stitcher: file(relativePath: { eq: "podcast/listen-on-stitcher.png" }) {
      childImageSharp {
        fixed(height: 58) {
          ...GatsbyImageSharpFixed
        }
      }
    }  
  }
`
TokelTalk.propTypes = {
    data: PropTypes.any
}
export default TokelTalk
