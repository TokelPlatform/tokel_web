
import { PageHeader } from "../components/Atoms/Title"
import PropTypes from 'prop-types'
import React from "react"
import TeamPageRoot from './template'
import { graphql } from "gatsby"
// import breakpoints from "../styles/breakpoints"
import styled from "@emotion/styled"
import PageMeta from "components/Molecules/PageMeta"
import contributors from "data/contributors"
import Contributor from "components/Molecules/Contributor"
import {  FlexColCenter, FlexRowCenter, VSpacerBig } from "styles/common"
import heart from "images/heart.png"
import icons from "data/icons"
import links from "data/links"
import ClickableIcon from "components/Atoms/ClickableIcon"

const ContributorsMesh = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width:860px;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 100px;
`

const Heart = styled.img`
  z-index: 5;
  height: 150px;
`

const ContributorSection = styled(FlexColCenter)`
  padding: 1rem;
`

export default function Team({data}) {
  return (
    <div>
      <PageMeta
        title="About Tokel - Create NFTs & Tokens Easily"
        description="Tokel is an open-source, dedicated, token & NFT creation platform with no gas fees and no complicated smart contracts."
      />
      <TeamPageRoot>
        <PageHeader>Tokel Contributors</PageHeader>
        <ContributorsMesh>
          {contributors.map(person => 
            <Contributor key={person.name} name={person.name} imageCircle={data[person.image].childImageSharp.fixed} position={person.position} socials={person.socials}/>
          )}
        </ContributorsMesh>
        <ContributorSection>
          <h3 style={{marginBottom: '4px'}}>Want to become a contributor?</h3>
          <h5 style={{marginTop: 0, fontWeight: 400, color: 'var(--color-base-slate)'}}>Everyone is welcome to contribute to Tokel Platform.</h5>
          <Heart src={heart}></Heart>
          <p style={{maxWidth: '600px', lineHeight: '26px'}}>Check out issues in our <a href={links.github}>Github</a> and reach out in case you want to work on any of them. We are always on lookout for people to help us test the dapp and find or fix smaller bugs.</p>
          {/* <h4>Join The Tokel Platform Discord!</h4> */}
          <FlexRowCenter>
            <ClickableIcon width="35px" link={links.discord} icon={icons.discord} />
            <ClickableIcon width="35px" link={links.github} icon={icons.github} />
          </FlexRowCenter>
        </ContributorSection>
        <VSpacerBig />
        <VSpacerBig />
        <VSpacerBig />
      </TeamPageRoot>
    </div>
  )
}

export const query = graphql`
  query {
    acnebs: file(relativePath: { eq: "team/acnebs.png" }) {
      childImageSharp {
        fixed(height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }     
    ahmedDhaif: file(relativePath: { eq: "team/ahmed.png" }) {
      childImageSharp {
        fixed(height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    alright: file(relativePath: { eq: "team/alright-image.png" }) {
      childImageSharp {
        fixed(height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    cascrypto: file(relativePath: { eq: "team/cascrypto.png" }) {
      childImageSharp {
        fixed(height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    blue: file(relativePath: { eq: "team/blue.png" }) {
      childImageSharp {
        fixed(height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    daria: file(relativePath: { eq: "team/daria.png" }) {
      childImageSharp {
        fixed(height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    dimxy: file(relativePath: { eq: "team/dimxy.png" }) {
      childImageSharp {
        fixed(height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    } 
    dreamTim: file(relativePath: { eq: "team/dreamTim.png" }) {
      childImageSharp {
        fixed(height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }  
    ejuliano: file(relativePath: { eq: "team/ejuliano.png" }) {
      childImageSharp {
        fixed(height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    } 
    gingerDesign: file(relativePath: { eq: "team/gingerDesign.png" }) {
      childImageSharp {
        fixed(height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }  
    gray: file(relativePath: { eq: "team/gray.png" }) {
      childImageSharp {
        fixed(height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    } 
    kelcie: file(relativePath: { eq: "team/kelcie.png" }) {
      childImageSharp {
        fixed(height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    } 
    lenilsonjr: file(relativePath: { eq: "team/lenilsonjr.png" }) {
      childImageSharp {
        fixed(height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    } 
    nutella: file(relativePath: { eq: "team/nutella.png" }) {
      childImageSharp {
        fixed(height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }                             
  }
`

Team.propTypes = {
    data: PropTypes.any
  }