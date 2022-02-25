import breakpoints from '../../styles/breakpoints';
import styled from '@emotion/styled';

export const Title = styled.h1`
  margin: 0;
  @media (max-width: ${breakpoints.mobilemiddle}) {
    font-size: 70px;
    line-height: 75px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 46px;
    line-height: 50px;
  }
`;
export const Header2 = styled.h2`
  margin: 0;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 20px;
  }
`;

export const Header3 = styled.h3``;

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
