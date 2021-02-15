import React, { ReactElement } from "react"
import styled from "@emotion/styled"
import { css, keyframes } from '@emotion/react'
import breakpoints from "../../styles/breakpoints"

type StarProps = {
    starSize: string
}

const rand = () => Math.random() * 2000 + 1
const getSize = (type: string):string => type == 'small' ? '0.5px' : (type === 'medium' ? '1px' : '1.5px')

const getStars = (n: number, div: number): string => {
  let value = () => rand() + 'px ' + rand() + 'px #F0F0F0'
  let result = value()
  for (let i = 2; i < n/div; i++) {
    result = result.concat(', ', value())
  }
  return result;
}

const shadows = {
    small: getStars(1700, 2),
    medium: getStars(1700, 4),
    big: getStars(1700, 6)
}
  

const animStar = keyframes`
    from {transform: translateY(0px)}
    to {transform: translateY(-700px)}
`

const StarContainer = styled.div`
    width: ${props => getSize(props.size)};
    height: ${props => getSize(props.size)};
    background: transparent;
    box-shadow: ${props => shadows[props.size]};
    &:after {
      content: " ";
      position: absolute;
      top: 2000px;
      width: ${props => getSize(props.size)};
      height: ${props => getSize(props.size)};
      background: transparent;
      box-shadow: ${props => shadows[props.size]};

      @media (max-width: ${breakpoints.mobile}) {
        top: 4000px;
      }
    }   
`

const Stars = ({starSize}: StarProps): ReactElement => (
    <StarContainer size={starSize}  css={css`animation: ${animStar} 120s linear infinite;`} />
)

export default Stars
