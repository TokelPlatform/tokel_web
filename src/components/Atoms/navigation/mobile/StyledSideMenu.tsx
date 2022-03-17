import breakpoints from 'styles/breakpoints';
import styled from '@emotion/styled';

type StyledSideMenuProps = {
  open: boolean;
};

export const StyledSideMenu = styled.nav<StyledSideMenuProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--color-almostWhite);
  /* height: 100vh; */
  text-align: left;
  /* padding: 0.5rem; */
  padding-top: 4rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(-100%)')};
  z-index: 9;

  @media (max-width: ${breakpoints.mobilebig}) {
    width: 100%;
  }

  a {
    color: var(--color-darkPurple);
    text-decoration: none;
    transition: color 0.3s linear;
    font-size: 1.5rem;

    @media (max-width: ${breakpoints.mobilebig}) {
      font-size: 1.5rem;
      text-align: center;
    }

    /* &:hover {
      background-color: var(--color-lightBlue);
    } */
  }
`;
