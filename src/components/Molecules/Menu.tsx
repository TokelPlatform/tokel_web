import React from "react"
import links from "../../data/links"
import styled from "@emotion/styled"

const MenuRoot = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  /* margin-left: -6rem; */
  justify-content: center;
  list-style-type: none;
  color: var(--color-almostWhite);
  padding-top: 0.5rem;
  
  li {
    margin-right: 2rem;
  }
  a {
    color: var(--color-almostWhite);
    text-decoration: none;
  }
`

const Menu = () => {
  return (
    <MenuRoot>
        <li><a href={links.github}>Project</a></li>
        <li><a href={links.whitepaper}>WhitePaper</a></li>
        <li><a href="#">Roadmap</a></li>
        <li><a href="#">Explorer</a></li>
    </MenuRoot>
  )
}

export default Menu
