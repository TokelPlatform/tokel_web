import LogoText from '../Atoms/LogoText';
import Navigation from 'components/Organisms/Navigation';
import React from 'react';
// import breakpoints from '../../styles/breakpoints';
import styled from '@emotion/styled';
import Button, { Colors } from 'components/Atoms/Button';
import { Link } from 'gatsby';
// import { FlexRow } from 'styles/common';

const TopBarRoot = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;
  padding-left: 5rem;
  padding-right: 5rem;
`;

const ButtonWrapper = styled.div`
  z-index: 2;
`;

const ButtonLink = styled(Link)`
  text-decoration: none;
`;

// const NavigationWrapper = styled(FlexRow)``;

const TopBar = () => {
  return (
    <TopBarRoot>
      <LogoText />
      <Navigation />
      <ButtonWrapper>
        <ButtonLink to="/exchanges">
          <Button
            height="50px"
            width="150px"
            text="BUY TKL"
            theme={Colors.PURPLE}
            onClick={() => null}
          ></Button>
        </ButtonLink>
      </ButtonWrapper>
    </TopBarRoot>
  );
};

export default TopBar;
