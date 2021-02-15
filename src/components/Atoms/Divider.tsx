import React, { ReactElement } from "react"
import styled from "@emotion/styled"


const StyledDivider = styled.div`
    width: 90px;
    height: 5px;
    margin: auto;
    opacity: 0.2;
    background-color: var(--color-darkestBlue);
`

const Divider = ( ): ReactElement => (
  <StyledDivider></StyledDivider>
)

export default Divider
