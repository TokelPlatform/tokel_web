import breakpoints from '../../styles/breakpoints';
import styled from '@emotion/styled';

export const PageHeader = styled.h2`
  margin-top: 200px;
  text-align: center;
  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 50px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    padding: 20px;
  }
`;
