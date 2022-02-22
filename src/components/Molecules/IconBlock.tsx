import React, { ReactElement } from 'react';

// import breakpoints from '../../styles/breakpoints';
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
  width: 300px;

  h5 {
    font-weight: 700;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
`;

const IconBlock = ({ title, desc, iconsList }: IconBlockProps): ReactElement => {
  return (
    <FooterBlockRoot>
      <h5>{title}</h5>
      <p>{desc}</p>
      <IconsWrapper>
        {iconsList.map((icon, key) => (
          <ClickableIcon key={key} link={links[icon]} icon={icons[icon]} />
        ))}
      </IconsWrapper>
    </FooterBlockRoot>
  );
};

export default IconBlock;
