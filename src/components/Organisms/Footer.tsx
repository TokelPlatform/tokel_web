import React from "react"
import styled from "@emotion/styled"
import FooterBlock from "../Molecules/FooterBlock"
import footerData from "../../data/footer"
import logoTextDark from "../../images/logo-text-dark.svg"
import breakpoints from "../../styles/breakpoints"

const defaultProps = {
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 3rem 4rem 0 4rem;
    padding-bottom: 2rem;

    @media (max-width: ${breakpoints.smallScreen}) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    @media (max-width: ${breakpoints.mobilebig}) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }    
`
const FooterMainBlock = styled.div`
    margin-right: 6rem;        
    @media (max-width: ${breakpoints.smallScreen}) {
       margin-bottom: 1rem;
    }
    @media (max-width: ${breakpoints.mobilebig}) {
        margin: 0 0 1rem 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }       
`

const FooterSecondaryBlock = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: ${breakpoints.smallScreen}) {
        justify-content: space-between;
        width: 100%;
    }
    @media (max-width: ${breakpoints.mobilebig}) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

const StyledFooter = styled.div`
    p, a {
        color: var(--color-darkestBlue-50opacity);
    }
` 
const Footnote = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-top: 1px solid var(--color-darkestBlue-10opacity);
    padding: 0 4rem;
    p, a {
        font-size: 0.75rem;
    }

    div {
        margin-top: 1rem;

        a {
            margin-left: 1rem;
        }
    }
    @media (max-width: ${breakpoints.mobilebig}) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
`

const Footer = () => (
    <StyledFooter>
        <Container>
            <FooterMainBlock>
                <img src={logoTextDark} />
                <p>Komodo ecosystem’s Token Platform. </p>
            </FooterMainBlock>
            <FooterSecondaryBlock>
            {footerData.map((col, idx) => (
                <FooterBlock
                    title={col.title}
                    icons={col.icons}
                    desc={col.desc}
                    key={idx}
                    idx={idx}
                />
            ))}
            </FooterSecondaryBlock>
        </Container>
        <Footnote>
            <p>Tokel 2021. Created with love and passion for blockchain and all things decentralized by <a href="https://daria.engineer">Daria</a></p>
            {/* <div>
                <a href="#">Terms of Service</a>
                <a href="#">Privacy Policy</a>                
            </div> */}
        </Footnote>
    </StyledFooter>
)

Footer.defaultProps = defaultProps
export default Footer
