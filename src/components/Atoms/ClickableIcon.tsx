import React, { ReactElement } from 'react';
import styled from '@emotion/styled';

type ClickableIconProps = {
  link: string;
  icon: string;
  width?: string;
};

const IconLink = styled.a`
  padding-right: 1rem;
  position: relative;
  z-index: 5;
  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.3);
  }
`;

const ClickableIcon = ({ link, icon, width }: ClickableIconProps): ReactElement => (
  <IconLink target="_blank" href={link}>
    <img width={width ?? '35px'} alt="clickableicon" src={icon}></img>
  </IconLink>
);

export default ClickableIcon;
