import React, { useState } from "react"
import styled from "@emotion/styled"
import Button from "../Atoms/Button"
import FunctionalityPreview from "./FunctionalityPreview"
import {tabs} from "../../data/constants"

const defaultProps = {
}

const Container = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 9rem;
    h1 {
      font-family: var(--font-family-secondary);
    }
`

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 6rem;
`

const Functionality = () => {
  const [openTab, setOpenTab] = useState(tabs.TRADE);

  return (
    <Container>
        <h1>Store and trade tokens easily</h1>
        <Buttons>
          <Button chosen={openTab === tabs.TRADE} onClick={()=>{setOpenTab(tabs.TRADE)}} theme='dark' text='Trade tokens'></Button>
          <Button chosen={openTab === tabs.NFT} onClick={()=>{setOpenTab(tabs.NFT)}} text='Buy NFTs'></Button>
          <Button chosen={openTab === tabs.TOKENS} onClick={()=>{setOpenTab(tabs.TOKENS)}} text='Create tokens'></Button>
        </Buttons>
        <FunctionalityPreview openTab={openTab} ></FunctionalityPreview>                
    </Container>
  )
}

Functionality.defaultProps = defaultProps
export default Functionality
