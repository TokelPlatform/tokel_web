import React, { ReactElement } from "react"
import styled from "@emotion/styled"
import { css, keyframes } from '@emotion/react'
import breakpoints from "../../styles/breakpoints"

type StarProps = {
    starSize: string,
    top: string
}

const rand = () => Math.random() * 4000 + 1
const getSize = (type: string):string => type == 'small' ? '0.5px' : (type === 'medium' ? '0.75px' : '1px')

const getStars = (n: number, div: number): string => {
  let value = () => rand() + 'px ' + rand() + 'px #F0F0F0'
  let result = value()
  for (let i = 2; i < n/div; i++) {
    result = result.concat(', ', value())
  }
  return result;
}

const shadows = {
    small: getStars(3000, 2),
    medium: getStars(3000, 4),
    big: getStars(3000, 6)
}
  

const animStar = keyframes`
    from {transform: translateY(0px)}
    to {transform: translateY(-1000px)}
`

/**
 * will-change was added coz the stars were blurry in Chrome
 * https://css-tricks.com/almanac/properties/w/will-change/
 */
const StarContainer = styled.div` 
    will-change: transform;
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
        top: ${props =>  props.top ? props.top : '4000px'};
      }
    }   
`

const Stars = ({starSize, top}: StarProps): ReactElement => (
    <StarContainer size={starSize} top={top} css={css`animation: ${animStar} 120s linear infinite;`} />
)

Stars.defaultProps = {
  starSize: 'small',
  top: null
}
export default Stars
