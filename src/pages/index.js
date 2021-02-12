import * as React from "react"
import styled from "@emotion/styled"
import { css, keyframes } from '@emotion/react'
import ClickableIcon from "../components/Atoms/ClickableIcon"
import icons from "../data/icons"
import links from "../data/links"
import Header from "../components/Molecules/Header"
import LogoText from "../components/Atoms/LogoText"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import PropTypes from 'prop-types';
import Functionality from "../components/Organisms/Functionality"
import Features from "../components/Organisms/Features"
import Footer from "../components/Organisms/Footer"

const MainPage = styled.div`
  background: linear-gradient(180deg, #13182A 0%, #263867 100%);
  height: 100vh;
`
const WelcomeText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const Title = styled.h1`
  color: var(--color-almostWhite);
  font-family: var(--font-family-primary);
  margin-top: 3rem;
  font-weight: 400;
`

const Links = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Dashboard = styled.div`
  margin: auto;
  margin-top: -20rem;
  width: 900px;
`

const rand = () => Math.random() * 2000 + 1

const getStars = (n, div) => {
  let value = () => rand() + 'px ' + rand() + 'px #F0F0F0'
  let result = value(n)
  for (let i = 2; i < n/div; i++) {
    result = result.concat(', ', value())
  }
  return result;
}

const shadows = {
  small: getStars(1700, 2),
  medium: getStars(1700, 4),
  big: getStars(1700, 6)
}

const getSize = (type) => type == 'small' ? '0.5px' : (type === 'medium' ? '1px' : '2px')
const animStar = keyframes`
    from {transform: translateY(0px)}
    to {transform: translateY(-700px)}
`

const Stars = styled.div`
    width: ${props => getSize(props.size)};
    height: ${props => getSize(props.size)};
    background: transparent;
    box-shadow: ${props => shadows[props.size]};
    &:after {
      content: " ";
      position: absolute;
      top: 2000px;
      width: ${props => getSize(props.size)};
      height: ${props => getSize(props.size)};
      background: transparent;
      box-shadow: ${props => shadows[props.size]};
    }   
`

const IndexPage = ({data})  => {
  return (
    <MainPage>
      <Stars size={'small'}  css={css`animation: ${animStar} 120s linear infinite;`} />
      <Stars size={'medium'} css={css`animation: ${animStar} 120s linear infinite;`}/>
      <Stars size={'big'}  css={css`animation: ${animStar} 120s linear infinite;`}/>
      <Header />
      <WelcomeText>
        <LogoText/>
        <Title>Komodo ecosystem’s Token Platform.</Title>        <Links>        
          <ClickableIcon link={links.github} />
          <ClickableIcon icon={icons.discord} link={links.discord} />
        </Links>
      </WelcomeText>
      <Dashboard>
        <Img fluid={data.dash.childImageSharp.fluid}></Img>
      </Dashboard>
      <Functionality />
      <Features />
      <Footer />
    </MainPage>
  )
}

export const query = graphql`
  query {
    dash: file(relativePath: { eq: "dashboard.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 900) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
IndexPage.propTypes = {
  data: PropTypes.any
}
export default IndexPage
