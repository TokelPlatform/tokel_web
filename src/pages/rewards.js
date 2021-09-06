import * as React from "react"

import PageRootContainer from "./template"
import axios from 'axios';
import links from "../data/links"
import styled from "@emotion/styled"

const RewardsRoot = styled.div`
  text-align: center;
  height: 100vh;

  padding: 50px 50px 150px 50px;
  h1 {
    font-size: 50px;
    color: white;
    margin-top: 150px;
  }
  h2 {
    color: white;
    opacity: 0.8;
  }
  
`
const ResultBlock = styled.div`
text-align: center;
display: flex;
flex-direction: column;
align-items: center;

`

const Label = styled.h3`
  font-family: 'ibm_plex';
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  display: flex;
  align-items: flex-end;
  text-transform: uppercase;
  margin-bottom: 0;

  /* Base/slate */

  color: #7C91A7;
`
const Result = styled.p`
font-family: 'ibm_plex';
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 31px;
  display: flex;
  align-items: flex-end;
  text-align: justify;
  text-transform: uppercase;
  color: white;
  margin-top: 10px;
`

const Submit = styled.button`
  width: 155px;
  height: 60px;
  cursor: pointer;

  background: #F0F0F0;
  border: 1px solid #DEDEDE;
  box-sizing: border-box;
  font-size: 20px;
  color: #000000;
  font-family: 'ibm_plex';

`

const Input = styled.input`
  width: 350px;
  height: 60px;
  font-size: 20px;
  color: white;
  padding: 1px 10px;
  font-family: 'ibm_plex';

  border: 1px solid #DEDEDE;
  box-sizing: border-box;
  background-color: transparent;
`
const Rewards = () => {
  const [address, setAddress] = React.useState(null);
  const [balance, setBalance] = React.useState(null);
  const [rewards1, setRewards1] = React.useState(null);
  const [rewards2, setRewards2] = React.useState(null);
  
  const getData = (address) =>
  console.log(address)
    axios(`https://dexstats.info/api/rewardstokel.php?address=${address}`)
    .then(res => {  
      console.log(res)
        if (res.data) {
          setBalance(res.data.balance);
          setRewards1(res.data.FirstUnlock)
          setRewards2(res.data.SecondUnlock)
        }
    })
    .catch(e => console.error(e));

  return (
    <PageRootContainer>
      <RewardsRoot>
        <h1>Early adopter rewards initiative</h1>
        <a href={links.mediumEarlyAdopters}><h2>Read about TKL time lock Rewards here</h2></a>
    <div style={{marginTop: '80px'}}>
      <Input placeholder="Your TKL address"onChange={val => setAddress(val.target.value)}></Input>
      <Submit onClick={() => getData(address)}> Submit </Submit>
    </div>
        {balance && rewards1 && rewards2 &&
        <div style={{marginTop: '50px'}}>
          <ResultBlock>
            <Label>Address</Label>
            <Result>{address}</Result>
          </ResultBlock>
          <ResultBlock>
            <Label>current balance</Label>
            <Result>{balance} TKL</Result>
          </ResultBlock>
          <ResultBlock>
            <Label>Rewards unlockable 15th June 2022</Label>
            <Result>{rewards1} TKL</Result>
          </ResultBlock>
          <ResultBlock>
            <Label>Rewards unlockable 15th March 2023</Label>
            <Result>{rewards2} TKL</Result>
          </ResultBlock>
        </div>
        }
      </RewardsRoot>
    </PageRootContainer>
  )
}

export default Rewards
