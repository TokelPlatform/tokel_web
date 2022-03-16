import styled from '@emotion/styled';
import { FlexRow } from 'styles/common';

type DropDownMenuRootProps = {
  open: boolean;
};
const DropDownMenuRoot = styled(FlexRow)<DropDownMenuRootProps>`
  display: ${p => (p.open ? 'flex' : 'none')};
  width: ${p => (p.wide ? '800px' : 'inherit')};
  height: inherit;
  flex-wrap: wrap;
  background-color: var(--color-almostWhite);
  position: absolute;
  margin-top: 20px;
  margin-left: -100px;
  border-radius: 4px;

  z-index: 3;
  h4 {
    font-size: 1.125rem;
    text-transform: uppercase;
    font-weight: 700;
  }
  h5 {
    font-size: 1rem;
    margin: 0;
  }
  p {
    font-size: 14px;
    opacity: 0.6;
    margin-top: 4px;
  }
  a {
    text-decoration: none;
    transition: color 0.1s, background-color 0.1s;
  }
  h4 {
    margin-top: 0px;
  }
  h4,
  h5,
  a,
  p {
    color: #000;
  }
`;

export default DropDownMenuRoot;
