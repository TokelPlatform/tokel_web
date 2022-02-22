import React from 'react';
// import breakpoints from "../../styles/breakpoints"
import styled from '@emotion/styled';
import Button, { Colors } from 'components/Atoms/Button';

const BannerBorderRoot = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  // max-width: 1000px;
  width: 100%;
  border: 8px solid;
  border-image-slice: 1;
  // border-image-source: var(--gradient-purple-direct);
  border-image-source: linear-gradient(97.43deg, #973af5 0%, #4ca6fe 100%);
  padding: 1rem 2rem;
  margin: 3rem auto 3rem auto;
  h4 {
    font-weight: 700;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const BannerBorder = () => {
  return (
    <BannerBorderRoot>
      <h4>Explore Tokel Technology</h4>
      <ButtonWrapper>
        <Button width="200px" theme={Colors.WHITE} text="White Paper">
          White Paper
        </Button>
        <Button
          width="200px"
          theme={Colors.TRANSPARENT}
          text="Documentation"
          showButtonDecor={false}
        ></Button>
      </ButtonWrapper>
    </BannerBorderRoot>
  );
};

export default BannerBorder;
