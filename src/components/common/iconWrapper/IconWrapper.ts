import styled from "styled-components";

type Props = {
    width?: string
    height?: string
}

export const IconWrapper = styled.span<Props>`
  width: ${props => props.width || '54px'};
  height: ${props => props.height || '54px'};
  display: flex;
  justify-content: center;
  align-items: center;
`