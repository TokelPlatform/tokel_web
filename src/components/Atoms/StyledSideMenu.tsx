import breakpoints from "../../styles/breakpoints"
import styled from "@emotion/styled"

type StyledSideMenuProps = {
  open: boolean;
}

export const StyledSideMenu = styled.nav<StyledSideMenuProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--color-almostWhite);
  height: 100vh;
  text-align: left;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(-100%)")};
  z-index: 9;

  @media (max-width: ${breakpoints.mobilebig}) {
    width: 100%;
  }

  a {
    font-size: var(--font-size-h3);
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: var(--color-darkPurple);
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${breakpoints.mobilebig}) {
      font-size: 1.5rem;
      text-align: center;
    }
  }
`
