import React, { ReactElement } from "react"

import { StyledBurger } from "../../Atoms/StyledBurger"

type BurgerProps = {
  open: boolean,
  setOpen: Function
}

const defaultProps = {
  open: false,
  setOpen: o => !o,
}

const Burger = ({ open, setOpen }: BurgerProps): ReactElement => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

Burger.defaultProps = defaultProps
export default Burger
