import React from "react"
import astro from "../../images/astro.svg"
// import breakpoints from "../../styles/breakpoints"
import styled from "@emotion/styled"

const PageBreaker1Root = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 1000px;
    margin: auto;
`

const ImageWrapper = styled.div`
    max-width: 270px;
    width: 100%;
    margin-top: 1rem;
`

const PageBreaker1 = () => {
  return (
    <PageBreaker1Root>
        <h1>It only costs $0.000003 USD to mint an NFT or a token</h1>
        <ImageWrapper>
            <img src={astro}></img>
        </ImageWrapper>
    </PageBreaker1Root>
  )
}

PageBreaker1.propTypes = {
  }
export default PageBreaker1
