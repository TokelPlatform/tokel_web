
import { PageHeader } from "../components/Atoms/Title"
import PropTypes from 'prop-types'
import React from "react"
import TeamPageRoot from './template'
// import breakpoints from "../styles/breakpoints"
import styled from "@emotion/styled"
import PageMeta from "components/Molecules/PageMeta"
import contributors from "data/contributors"
import Contributor from "components/Molecules/Contributor"
import {  FlexColCenter, FlexRowCenter } from "styles/common"
import heart from "images/heart.png"
import icons from "data/icons"
import links from "data/links"
import ClickableIcon from "components/Atoms/ClickableIcon"
// import { FlexRow } from "styles/common"

const ContributorsMesh = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  max-width:860px;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 100px;
`

const Heart = styled.img`
  z-index: 5;
  height: 150px;
`

export default function Team() {
  return (
    <div>
      <PageMeta
        title="About Tokel | Tokel Platform"
        description="Learn about Tokel Platform, its ideals and its contributors"
      />
      <TeamPageRoot starsTop='3700px'>
        <PageHeader>Tokel Contributors</PageHeader>
        <ContributorsMesh>
          {contributors.map(person => 
            <Contributor key={person.name} name={person.name} image={person.image} position={person.position} socials={person.socials}/>
          )}
        </ContributorsMesh>
        <FlexColCenter>
          <h3 style={{marginBottom: '4px'}}>Want to become a contributor?</h3>
          <h5 style={{marginTop: 0, fontWeight: 400, color: 'var(--color-base-slate)'}}>Everyone is welcome to contribute to Tokel Platform.</h5>
          <Heart src={heart}></Heart>
          <p style={{maxWidth: '600px', lineHeight: '26px'}}>Check out issues in our <a href={links.github}>Github</a> and reach out in case you want to work on any of them. We are always on lookout for people to help us test the dapp and find or fix smaller bugs.</p>
          {/* <h4>Join The Tokel Platform Discord!</h4> */}
          <FlexRowCenter>
            <ClickableIcon width="35px" link={links.discord} icon={icons.discord} />
            <ClickableIcon width="35px" link={links.github} icon={icons.github} />
          </FlexRowCenter>
        </FlexColCenter>
      </TeamPageRoot>
    </div>
  )
}

Team.propTypes = {
    data: PropTypes.any
  }