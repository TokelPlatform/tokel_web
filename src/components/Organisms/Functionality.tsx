import React, { useState } from "react"
import styled from "@emotion/styled"
import Button from "../Atoms/Button"
import FunctionalityPreview from "./FunctionalityPreview"
import {tabs} from "../../data/constants"
import breakpoints from "../../styles/breakpoints"
import Divider from "../Atoms/Divider"

const defaultProps = {
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 9rem;
    h1 {
      z-index: 10;
      @media (max-width: ${breakpoints.mobilebig}) {
        padding-bottom: 2rem;
      } 
      @media (max-width: ${breakpoints.mobile}) {
        text-align: center;
        margin-top: 1rem;
      }      
    }
    @media (max-width: ${breakpoints.mobilebig}) {
      margin-top: 3.5rem;
    }    
    
`

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 5rem;
    @media (max-width: ${breakpoints.mobilebig}) {
      display: none;
  } 
`
const MobileFunctionality = styled.div`
    display: none;
    max-width: 1150px;
    width: 100%;
    @media (max-width: ${breakpoints.mobilebig}) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      background-color: var(--color-gray-10opacity);
    } 
`

const BigScreenView = styled.div`
  max-width: 1150px;
  width: 100%;
  @media (max-width: ${breakpoints.mobilebig}) {
    display: none;
  } 
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
        <BigScreenView>
          <FunctionalityPreview openTab={openTab} />
        </BigScreenView>
      <MobileFunctionality>
        <FunctionalityPreview hiddenParts={true} openTab={tabs.TRADE} />
        <Divider />
        <FunctionalityPreview hiddenParts={true} openTab={tabs.NFT} />
        <Divider />
        <FunctionalityPreview hiddenParts={true} openTab={tabs.TOKENS} />                
      </MobileFunctionality>
    </Container>
  )
}

Functionality.defaultProps = defaultProps
export default Functionality
