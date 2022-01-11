import breakpoints from "../../styles/breakpoints"
import styled from "@emotion/styled"

export const Title = styled.header`
  color: var(--color-almostWhite);
  font-size: 80px;
  line-height: 85px;
  text-align: center;
  font-family: var(--font-family-primary);
  font-weight: 700;
  & > a {
    margin: 0 0.5rem 0 0.5rem;
  }
  @media (max-width: ${breakpoints.mobilemiddle}) {
    font-size: 70px;
    line-height: 75px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 46px;
    line-height: 50px;
  }
`
export const SubTitle = styled.h1`
  text-transform: uppercase;
  font-family: var(--font-family-primary);
  color: var(--color-gray);
  opacity: 0.6;
  font-weight: 600;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 20px;
  }
`
export const PageHeader = styled.h1`
    margin-top: 50px;
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
`
