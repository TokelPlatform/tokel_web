import React from "react"
import styled from "@emotion/styled"
import features from "../../data/features"
import FeatureCard from "../Molecules/FeatureCard"
import icons from "../../data/icons"
import LogoImg from "../Atoms/LogoImg"

const defaultProps = {
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #13182A 22.92%, #3E315E 100%);
    padding: 7rem 0 5rem 0;
    h1 {
        text-transform: uppercase;
        color: var(--color-almostWhite);
        margin-top: 2.5rem;
    }
`
const FeaturesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 780px;
    flex-wrap: wrap;
    margin-top: 4rem;
`

const Features = () => (
    <Container>
        <LogoImg open={true} width={'150px'}/>
        <h1>Platform Features</h1>
        <FeaturesContainer>
            {features.map((val, idx) => 
                (
                    <FeatureCard
                        key={idx}
                        icon={icons[val.icon]}
                        title={val.title}
                        desc={val.desc}
                    />
                )
            )}
        </FeaturesContainer>
    </Container>
)

Features.defaultProps = defaultProps
export default Features
