import React from 'react';
// import breakpoints from "../../styles/breakpoints"
import styled from '@emotion/styled';
import MailchimpForm from '../MailchimpForm';
import { FlexCol, FlexRow } from 'styles/common';

const BannerSubscribeRoot = styled(FlexRow)`
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  width: 100%;
  border: 8px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(97.43deg, #973af5 0%, #4ca6fe 100%);
  padding: 1rem 2rem;
  margin: 3rem auto 3rem auto;
  h4 {
    font-weight: 700;
    margin-bottom: 0;
  }
  p {
    margin-top: 1rem;
    max-width: 500px;
  }
`;

const BannerSubscribe = () => {
  return (
    <BannerSubscribeRoot>
      <FlexCol>
        <h4>Subscribe to our newlsetter</h4>
        <p>You will receive news and updates about development and the growth of Tokel Platform.</p>
      </FlexCol>
      <MailchimpForm />
    </BannerSubscribeRoot>
  );
};

export default BannerSubscribe;
