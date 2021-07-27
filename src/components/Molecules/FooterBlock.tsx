import React, { ReactElement } from "react"

import ClickableIcon from "../Atoms/ClickableIcon"
import breakpoints from "../../styles/breakpoints"
import iconImages from "../../data/icons"
import links from "../../data/links"
import styled from "@emotion/styled"

const defaultProps = {
}

type FooterBlockProps = {
    title: string,
    desc: string,
    icons: string[],
    idx: number
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background: ${props => (props.idx % 2 === 0 )? 'var(--color-gray-10opacity)' : 'transparent'};
    padding: 1rem 3rem 1rem 3rem;
    h2 {
        text-transform: uppercase;
        margin-bottom: 0.5rem;
        font-family: var(--font-family-secondary);
        font-size: 1.25rem;
    }
    p {
        font-size: 0.875rem; // 14px
        width: 180px;
        color: var(--color-darkestBlue);
        opacity: 0.5;
        @media (max-width: ${breakpoints.mobilebig}) {
            font-size: 1rem; // 14px
            text-align: center;
            width: 220px;
        }
    }
    width: 200px;
    height: 130px;
    @media (max-width: ${breakpoints.tablet}) {
        width: 175px;
    }
    @media (max-width: ${breakpoints.mobilebig}) {
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content:center;
    }
`
const FooterTitle = styled.div`
    display: flex;
    flex-direction: row;
    h2 {
        margin-right: 1rem;
    }
    @media (max-width: ${breakpoints.mobilebig}) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h2 {
            margin: 0 0 1rem 0;
        }
        div a img {
            height: 44px;
        }
    }
    div {
        padding: 1rem 0 0 0;
        & > a {
            padding: 0 0.3rem 0 0;
        }
    }
`

const FooterBlock = ({title, desc,icons, idx}: FooterBlockProps): ReactElement => {
  return (
    <Container idx={idx}>
        <FooterTitle>
            <h2>{title}</h2>
            <div style={{marginTop: '2px'}}>
                {icons.map((icon, idx) => (
                    <ClickableIcon key={idx} link={links[icon]} icon={iconImages[icon]}></ClickableIcon>
                ))}
            </div>
        </FooterTitle>
        <p>{desc}</p>
    </Container>
  )
}

FooterBlock.defaultProps = defaultProps
export default FooterBlock
