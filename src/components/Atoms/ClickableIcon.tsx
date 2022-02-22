import React, { ReactElement } from 'react';
import styled from '@emotion/styled';

type ClickableIconProps = {
  link: string;
  icon: string;
};

const IconLink = styled.a`
  padding-right: 1rem;
  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.3);
  }
`;

const ClickableIcon = ({ link, icon }: ClickableIconProps): ReactElement => (
  <IconLink target="_blank" href={link}>
    <img src={icon}></img>
  </IconLink>
);

export default ClickableIcon;
