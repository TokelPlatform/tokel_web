import React from 'react';
import breakpoints from 'styles/breakpoints';
import styled from '@emotion/styled';
import MailchimpForm from '../MailchimpForm';
import { FlexCol } from 'styles/common';

const BannerSubscribeRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1180px;
  margin: auto;
  border: 8px solid;
  border-image-slice: 1;
  border-image-source: var(--gradient-purple-to-lighblue);
  padding: 1rem 2rem;
  margin-top: 6rem;
  background-color: var(--color-darkestBlue);
  z-index: 3;
  position: relative;

  h4 {
    font-weight: 700;
    margin-bottom: 0;
  }
  p {
    margin-top: 1rem;
    max-width: 500px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-bottom: 2rem;
    margin-left: 2rem;
    margin-right: 2rem;
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
