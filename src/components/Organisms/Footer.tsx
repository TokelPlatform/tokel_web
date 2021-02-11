import React from "react"
import styled from "@emotion/styled"
import FooterBlock from "../Molecules/FooterBlock"
import footerData from "../../data/footer"
import logoTextDark from "../../images/logo-text-dark.svg"

const defaultProps = {
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin: 3rem 0 0 0;
    border-bottom: 1px solid var(--color-darkestBlue-50opacity);
    padding-bottom: 2rem;
`
const FooterMainBlock = styled.div`
    margin-right: 6rem;
`

const StyledFooter = styled.div`
    margin: 0 4rem 0 4rem;
    p, a {
        color: var(--color-darkestBlue-50opacity);
    }
` 
const Footnote = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    p, a {
        font-size: 0.75rem;
    }

    div {
        margin-top: 1rem;

        a {
            margin-left: 1rem;
        }
    }
`

const Footer = () => (
    <StyledFooter>
        <Container>
            <FooterMainBlock>
                <img src={logoTextDark} />
                <p>Komodo ecosystem’s <br/> Token Platform. </p>
            </FooterMainBlock>
            {footerData.map((col, idx) => (
                <FooterBlock
                    title={col.title}
                    icons={col.icons}
                    desc={col.desc}
                    key={idx}
                    idx={idx}
                />
            ))}
        </Container>
        <Footnote>
            <p>Tokel 2021. Created with love and passion for blockchain and all things centralized by <a href="https://daria.engineer">Daria</a></p>
            <div>
                <a href="#">Terms of Service</a>
                <a href="#">Privacy Policy</a>                
            </div>
        </Footnote>
    </StyledFooter>
)

Footer.defaultProps = defaultProps
export default Footer
