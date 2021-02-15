import React, { ReactElement } from "react"
import styled from "@emotion/styled"
import icons from "../../data/icons"

type FeatureCardProps = {
    icon: string,
    title: string,
    desc: string
}
const defaultProps = {
    icon: icons.coinWallet,
    title: 'coin wallet',
    desc: 'alal'
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 370px;
    height: 260px;
    background: rgb(78, 85, 110, 1);
    background: rgba(78, 85, 110, 0.3);
    border-radius: 10px;
    margin: 0.5rem 0.5rem;
    transition: transform .3s;
    h2 {
        font-family: var(--font-family-secondary);
        font-weight: 600;
    }
    &:hover {
        background-color: rgb(95, 104, 134);
        background-color: rgba(95, 104, 134, 0.5);
        transform: scale(1.025);
    }
`

const Content = styled.div`
    padding: 2rem 2.5rem 1.5rem 2.5rem;
    h2 {
        text-transform: uppercase;
        color: var(--color-almostWhite);
    }
    p { 
        color: var(--color-almostWhite);
    }
`

const Icon = styled.img`
    height: 50px;
    width: 50px;
`

const FeatureCard = ({icon, title, desc}: FeatureCardProps): ReactElement =>  (
    <Container>
        <Content>
            <Icon src={icon}></Icon>
            <h2>{title}</h2>
            <p>{desc}</p>
        </Content>
    </Container>
  )

FeatureCard.defaultProps = defaultProps
export default FeatureCard
