import breakpoints from '../../styles/breakpoints';
import styled from '@emotion/styled';

export const PageHeader = styled.h1`
  margin-top: 200px;
  font-size: 50px;
  line-height: 55px;
  text-align: center;
  color: var(--color-almostWhite);
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 40px;
    line-height: 45px;
    margin-top: 50px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 30px;
    line-height: 35px;
    margin-top: 50px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    padding: 20px;
  }
`;
