import React, { useRef, useState } from "react"

import Burger from "./Burger"
import NavigationSide from "./NavigationSide"
import breakpoints from "../../../styles/breakpoints"
import links from "../../../data/links"
import styled from "@emotion/styled"

const NavigationHorizontal = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  /* margin-left: -6rem; */
  justify-content: center;
  list-style-type: none;
  color: var(--color-almostWhite);
  padding-top: 0.5rem;
  @media (max-width: ${breakpoints.mobilebig}) {
    display: none;
  }
  li {
    margin-right: 2rem;
  }
  a {
    color: var(--color-almostWhite);
    text-decoration: none;
  }
`

const NavigationVertical = styled.div`
  display: none;
  margin-bottom: 10rem;
  @media (max-width: ${breakpoints.mobilebig}) {
    display: block;
  }
`
const menuLinks = [
  { link: '/how-to', name: "How to" },
  { link: '/blockchain', name: "Chain" },
  { link: links.whitepaper, name: "White Paper" },
  { link: '/roadmap', name: "Roadmap" },
  { link: links.explorer, name: "Explorer" },
  { link: links.documentationChain, name: "Documentation" },
];

const Navigation = () => {
    const [open, setOpen] = useState(false);
    const node = useRef();
  return (
    <div>
      <NavigationHorizontal>
        { menuLinks.map((item, idx) => (
            <li key={idx}><a href={item.link}>{item.name}</a></li>          
        ))}
      </NavigationHorizontal>
      <NavigationVertical ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <NavigationSide menuLinks={menuLinks} open={open} setOpen={setOpen} />
      </NavigationVertical>
    </div>
  )
}
export default Navigation
