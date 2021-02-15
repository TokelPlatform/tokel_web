import React, { ReactElement } from "react"
import styled from "@emotion/styled"
import icons from "../../data/icons"

type ClickableIconProps = {
  link: string,
  icon: string
}

const defaultProps = {
  link: "https://link.com",
  icon: icons.github,
}

const IconLink = styled.a`
  transition: transform .5s ease;
  &:hover {
    transform: scale(1.3);
  }
`

const ClickableIcon = ({ link, icon }: ClickableIconProps): ReactElement => (
  <IconLink href={link}>
    <img src={icon}></img>
  </IconLink>
)

ClickableIcon.defaultProps = defaultProps
export default ClickableIcon
