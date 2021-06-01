import React, { useRef, useState } from "react"

import Burger from "./Burger"
import NavigationSide from "./NavigationSide"
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
  @media (max-width: 49em) {
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
  margin-top: 10rem;
  @media (max-width: 49em) {
    display: block;
  }
`
const menuLinks = [
  { link: links.github, name: "Project" },
  { link: links.whitepaper, name: "White Paper" },
  { link: '/', name: "Roadmap" },
  { link: '/', name: "Explorer" },
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
