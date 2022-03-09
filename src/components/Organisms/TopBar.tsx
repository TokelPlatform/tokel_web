import LogoText from '../Atoms/LogoText';
import Navigation from 'components/Organisms/Navigation';
import React from 'react';
import styled from '@emotion/styled';
import Button, { Colors } from 'components/Atoms/Button';
import breakpoints from 'styles/breakpoints';
import { FlexRow } from 'styles/common';

const TopBarRoot = styled(FlexRow)`
  align-items: center;
  justify-content: space-between;
  padding: 2rem 5rem 0 5rem;
  @media (max-width: ${breakpoints.tablet}) {
    padding-left: 2rem;
  }
`;

const TopBar = () => {
  return (
    <TopBarRoot>
      <LogoText />
      <Navigation />
      <Button
        height="50px"
        width="150px"
        text="BUY TKL"
        theme={Colors.WHITE}
        onClick={() => null}
        url="/exchanges"
        className="desktopOnly"
      ></Button>
    </TopBarRoot>
  );
};

export default TopBar;
