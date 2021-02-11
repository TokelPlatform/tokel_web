import React, { ReactElement } from "react"
import styled from "@emotion/styled"
import iconImages from "../../data/icons"

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
    background: ${props => (props.idx % 2 === 0 )? 'rgb(222,222,222,0.3)' : 'transparent'};
    padding: 1rem 3rem 1rem 3rem;
    h2 {
        text-transform: uppercase;
        margin-bottom: 0.5rem;
        font-family: var(--font-family-secondary);
        font-size: 1.25rem;
    }
    p {
        font-size: 0.875rem;
        width: 180px;
        color: var(--color-darkestBlue-50opacity);
    }
    width: 200px;
    height: 130px;
`
const FooterTitle = styled.div`
    display: flex;
    flex-direction: row;
    h2 {
        margin-right: 1rem;
    }
    a {
        margin: 1rem 1rem 0 0;
    }
    a:hover {
        transition: transform .3s;
        transform: scale(1.3);
    }
`

const FooterBlock = ({title, desc, icons, idx}: FooterBlockProps): ReactElement => {
  return (
    <Container idx={idx}>
        <FooterTitle>
            <h2>{title}</h2>
            {icons.map((icon, idx) => (
                <a key={idx} href="#"><img src={iconImages[icon]} /></a>
            ))}
        </FooterTitle>
        <p>{desc}</p>
    </Container>
  )
}

FooterBlock.defaultProps = defaultProps
export default FooterBlock
