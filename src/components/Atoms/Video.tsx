import breakpoints from "../../styles/breakpoints"
import styled from "@emotion/styled"

export const Video = styled.div`
    margin-top: 30px;
    border: 3px solid #9F9F9F;
    border-radius: 4px;
    iframe {
        border: none;
        width: 600px;
        height: 300px;
        @media (max-width: ${breakpoints.tablet}) {
            width: 400px;
            height: 200px;
        }
        @media (max-width: ${breakpoints.mobile}) {
            width: 300px;
            height: 150px;
        }
    }
`