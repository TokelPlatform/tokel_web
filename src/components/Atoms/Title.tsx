import breakpoints from "../../styles/breakpoints"
import styled from "@emotion/styled"

export const Title = styled.header`
  color: var(--color-almostWhite);
  font-size: 80px;
  line-height: 85px;
  text-align: center;
  font-family: var(--font-family-secondary);
  font-weight: 700;
  & > a {
    margin: 0 0.5rem 0 0.5rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: var(--font-size-h2);
    font-weigth: 400;
    margin-top: 1rem;
  }
`
export const SubTitle = styled.h1`
  text-transform: uppercase;
  color: var(--color-gray);
  opacity: 0.6;
  font-weight: 600;
`