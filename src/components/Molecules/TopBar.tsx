import LogoText from '../Atoms/LogoText';
import Navigation from './Navigation';
import React from 'react';
// import breakpoints from '../../styles/breakpoints';
import styled from '@emotion/styled';
import Button, { Colors } from 'components/Atoms/Button';
import { Link } from 'gatsby';

const TopBarRoot = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;
  padding-left: 5rem;
  padding-right: 5rem;
`;

const IconWrapper = styled.div`
  z-index: 2;
`;

const ButtonLink = styled(Link)`
  text-decoration: none;
`;

const TopBar = () => {
  return (
    <TopBarRoot>
      <LogoText />
      <Navigation />
      <IconWrapper>
        <ButtonLink to="/exchanges">
          <Button
            height="50px"
            width="150px"
            text="BUY TKL"
            theme={Colors.YELLOW}
            onClick={() => null}
          ></Button>
        </ButtonLink>
      </IconWrapper>
    </TopBarRoot>
  );
};

export default TopBar;
