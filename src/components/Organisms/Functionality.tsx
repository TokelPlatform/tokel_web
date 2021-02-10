import React from "react"
import styled from "@emotion/styled"
import Button from "../Atoms/Button"
import FunctionalityPreview from "./FunctionalityPreview"

const defaultProps = {
}

const Container = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 9rem;
`

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 6rem;
`

const Functionality = () => {
  return (
    <Container>
        <h1>Store and trade tokens easily</h1>
        <Buttons>
          <Button theme='dark' text='Trade tokens'></Button>
          <Button text='Buy NFTs'></Button>
          <Button text='Create tokens'></Button>
        </Buttons>
        <FunctionalityPreview></FunctionalityPreview>
    </Container>
  )
}

Functionality.defaultProps = defaultProps
export default Functionality
