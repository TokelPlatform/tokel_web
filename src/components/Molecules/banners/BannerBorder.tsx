import React from 'react';
import breakpoints from 'styles/breakpoints';
import styled from '@emotion/styled';
import Button, { Colors } from 'components/Atoms/Button';
import { FlexRow } from 'styles/common';
import links from 'data/links';

const BannerBorderRoot = styled(FlexRow)`
  align-items: center;
  justify-content: space-between;
  gap: 5rem;

  border: 8px solid;
  border-image-slice: 1;
  border-image-source: var(--gradient-purple-to-lightblue);

  padding: 1rem 2rem;
  margin: 4rem auto;

  h4 {
    font-weight: 700;
  }
  @media (max-width: ${breakpoints.mobilebig}) {
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const BannerBorder = () => {
  return (
    <BannerBorderRoot>
      <h4>Explore Tokel Technology</h4>
      <ButtonWrapper>
        <Button width="200px" theme={Colors.WHITE} text="White Paper" url={links.whitepaper} />
        <Button
          width="200px"
          theme={Colors.TRANSPARENT}
          text="Documentation"
          showButtonDecor={false}
          url={links.documentationChain}
        ></Button>
      </ButtonWrapper>
    </BannerBorderRoot>
  );
};

export default BannerBorder;
