import * as React from "react"

import PageRootContainer from "./template"
import axios from 'axios';
import breakpoints from "../styles/breakpoints"
import links from "../data/links"
import styled from "@emotion/styled"

const RewardsRoot = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  font-family: 'ibm_plex', monospace;
  font-style: normal;
  font-weight: normal;

  padding: 50px 50px 150px 50px;

  h1 {
    font-size: 50px;
    color: white;
    margin-top: 150px;
    @media (max-width: ${breakpoints.mobile}) {
      line-height: 45px;
      margin-top: 0px;
      font-size: 40px;
      margin-bottom: 10px;

    }
  }
  h2 {
    color: white;
    opacity: 0.8;
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 18px;
      margin-top: 0px;      
    }
  }
} 
`

const ResultBlock = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Label = styled.h3`
  font-size: 18px;
  line-height: 23px;
  display: flex;
  align-items: flex-end;
  text-transform: uppercase;
  margin-bottom: 0;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 16px;      
  }

  /* Base/slate */

  color: #7C91A7;
`
const Result = styled.p`
  font-size: 24px;
  line-height: 31px;
  display: flex;
  align-items: flex-end;
  text-align: justify;
  text-transform: uppercase;
  color: white;
  margin-top: 10px;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 18px;      
  }
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

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 10px;
  }
`

const Input = styled.input`
  width: 350px;
  height: 60px;
  font-size: 20px;
  color: white;
  padding: 1px 10px;

  font-family: 'ibm_plex', monospace;

  border: 1px solid #DEDEDE;
  box-sizing: border-box;
  background-color: transparent;
`

const Error = styled.div`
  height: 20px;
  margin-bottom: 20px;
  color: #CE395F;
`

const Note = styled.div`
  color: white;
  height: 20px;
`

export const isAddressValid = (address) => /^[a-km-zA-HJ-NP-Z1-9]{26,35}$/.test(address);

const Rewards = () => {
  const [address, setAddress] = React.useState(null);
  const [balance, setBalance] = React.useState(null);
  const [rewards1, setRewards1] = React.useState(null);
  const [rewards2, setRewards2] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [fetching, setFetching] = React.useState(null);
  const [success, setSuccess]= React.useState(null);
  
  const getData = (address) => {
    setSuccess(false);
    setError(null)
    setFetching('Fetching data...')
   
  if(!address || address.length < 26 || !isAddressValid(address)) {
    setError('Invalid address');
    setFetching(null);
    return;
  }
  return axios(`https://dexstats.info/api/rewardstokel.php?address=${address}`)
    .then(res => {  
        if (res.data) {
          setSuccess(true)
          setFetching(null);
          setBalance(res.data.balance);
          setRewards1(res.data.FirstUnlock)
          setRewards2(res.data.SecondUnlock)
        }
    })
    .catch(e => {
      setSuccess(false);
      setError(e.message);
      setFetching(null);
    });
     
  }

  const handleChange = (val) => {
    setAddress(val);
    setBalance(null);
    setRewards1(null)
    setRewards2(null)
  }

  return (
    <PageRootContainer>
      <RewardsRoot>
        <h1>Early adopter rewards initiative</h1>
        <a href={links.mediumEarlyAdopters}><h2>Read about TKL time lock rewards here</h2></a>
    <div style={{marginTop: '30px'}}>
      <div style={{height: '20px'}}>
        {error ? <Error>{error}</Error>  : <Note>{fetching}</Note>} 
      </div>
      <Note>
      </Note>
      <Input placeholder="Your TKL address"onChange={val => handleChange(val.target.value)}></Input>
      <Submit onClick={() => getData(address)}> Submit </Submit>
    </div>
        {success &&
        <div style={{marginTop: '30px'}}>
          <ResultBlock>
            <Label>Address</Label>
            <Result>{address}</Result>
          </ResultBlock>
          <ResultBlock>
            <Label>current balance</Label>
            <Result>{Number(balance)} TKL</Result>
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
