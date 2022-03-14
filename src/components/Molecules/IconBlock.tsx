import React, { ReactElement } from 'react';

import breakpoints from 'styles/breakpoints';
import styled from '@emotion/styled';
import ClickableIcon from 'components/Atoms/ClickableIcon';
import links from 'data/links';
import icons from 'data/icons';

type IconBlockProps = {
  title: string;
  desc: string;
  iconsList: string[];
  idx: number;
};

const FooterBlockRoot = styled.div`
  width: 270px;
  h5 {
    font-weight: 700;
  }
  display: grid;
  padding: 2rem;
  @media (max-width: ${breakpoints.mediumScreen}) {
    width: 230px;
  }
  p {
    opacity: 0.8;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  justify-items: start;
  align-items: flex-start;
`;

const IconBlock = ({ title, desc, iconsList }: IconBlockProps): ReactElement => {
  return (
    <FooterBlockRoot>
      <div>
        <h5 style={{ height: '30px' }}>{title}</h5>
        <p>{desc}</p>
      </div>
      <IconsWrapper>
        {iconsList.map((icon, key) => (
          <ClickableIcon key={key} link={links[icon]} icon={icons[icon]} />
        ))}
      </IconsWrapper>
    </FooterBlockRoot>
  );
};

export default IconBlock;
