import * as React from 'react';

import PageRootContainer from './template';
import axios from 'axios';
import breakpoints from '../styles/breakpoints';
import links from '../data/links';
import styled from '@emotion/styled';
import { isAddressValid } from 'helpers/general';
import Error from 'components/Atoms/Error';

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
`;

const ResultBlock = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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

  color: #7c91a7;
`;
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
`;

const Submit = styled.button`
  width: 155px;
  height: 60px;
  cursor: pointer;

  background: #f0f0f0;
  border: 1px solid #dedede;
  box-sizing: border-box;
  font-size: 20px;
  color: #000000;

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 10px;
  }
`;

const Input = styled.input`
  width: 350px;
  height: 60px;
  font-size: 20px;
  color: white;
  padding: 1px 10px;

  font-family: 'ibm_plex', monospace;

  border: 1px solid #dedede;
  box-sizing: border-box;
  background-color: transparent;
`;

const Note = styled.div`
  color: white;
  height: 20px;
`;

const SectionHeader = styled.h3`
  color: white;
  opacity: 0.8;
  margin-bottom: 0px;
  @media (max-width: ${breakpoints.mobile}) {
    text-align: center;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  margin-top: 45px;
  text-align: left;
  @media (max-width: ${breakpoints.tablet}) {
    width: 400px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    text-align: left;
  }
  p {
    color: white;
    opacity: 0.8;
  }
`;

const Rewards = () => {
  const [address, setAddress] = React.useState(null);
  const [balance, setBalance] = React.useState(null);
  const [rewards1, setRewards1] = React.useState(null);
  const [rewards2, setRewards2] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [fetching, setFetching] = React.useState(null);
  const [success, setSuccess] = React.useState(null);

  const getData = (address) => {
    setSuccess(false);
    setError(null);
    setFetching('Fetching data...');

    if (!isAddressValid(address)) {
      setError('Invalid address');
      setFetching(null);
      return;
    }
    return axios(
      `https://dexstats.info/api/rewardstokel.php?address=${address}`
    )
      .then((res) => {
        if (res.data) {
          setSuccess(true);
          setFetching(null);
          setBalance(res.data.balance);
          setRewards1(res.data.FirstUnlock);
          setRewards2(res.data.SecondUnlock);
        }
      })
      .catch((e) => {
        setSuccess(false);
        setError(e.message);
        setFetching(null);
      });
  };

  const handleChange = (val) => {
    setAddress(val);
    setBalance(null);
    setRewards1(null);
    setRewards2(null);
  };

  return (
    <PageRootContainer>
      <RewardsRoot>
        <h1>Early adopter rewards initiative</h1>
        <a href={links.mediumEarlyAdopters}>
          <h3>Read about TKL time lock rewards here</h3>
        </a>
        <div style={{ marginTop: '30px' }}>
          <div style={{ height: '20px' }}>
            {error ? <Error>{error}</Error> : <Note>{fetching}</Note>}
          </div>
          <Note></Note>
          <Input
            placeholder="Your TKL address"
            onChange={(val) => handleChange(val.target.value)}
          ></Input>
          <Submit onClick={() => getData(address)}> Submit </Submit>
        </div>
        {success && (
          <div style={{ marginTop: '30px' }}>
            <ResultBlock>
              <Label>Address</Label>
              <Result>{address}</Result>
            </ResultBlock>
            <ResultBlock>
              <Label>final balance on 15.09.21 8pm</Label>
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
        )}
        <Section>
          <SectionHeader>DISCLAIMER</SectionHeader>
          <p>
            This rewards calculator uses current conditions to populate these
            estimations. These estimations should be used as a guide based on
            the current amount of TKL sold, and is in no way a guarantee that
            you will eventually receive this many coins.
          </p>
        </Section>
      </RewardsRoot>
    </PageRootContainer>
  );
};

export default Rewards;
