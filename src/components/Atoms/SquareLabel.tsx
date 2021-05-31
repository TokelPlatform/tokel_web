import React, { ReactElement } from "react"

import styled from "@emotion/styled"

type SquareLabelProps = {
    text: string;
}
const SquareLabelRoot = styled.div`
    background: var(--color-yellow-label);
    border-radius: 5px;
    padding: 8px 16px;
    height: 30px;
    /* width: 200px; */
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    h3 {
        text-transform: uppercase;
        color: var(--color-darkestBlue);
        margin: 0;
        font-weight: 700;
    }
`

const SquareLabel = ({text}: SquareLabelProps): ReactElement => (
    <SquareLabelRoot>
        <h3>
            {text}
        </h3>
    </SquareLabelRoot>
)

export default SquareLabel