import styled from "@emotion/styled"
import breakpoints from "../../styles/breakpoints"

const Title = styled.h1`
  color: var(--color-almostWhite);
  font-family: var(--font-family-primary);
  margin-top: 3rem;
  font-weight: 400;
  & > a {
    margin: 0 0.5rem 0 0.5rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: var(--font-size-h2);
    font-weigth: 400;
    margin-top: 1rem;
  }
`

export default Title