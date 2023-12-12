import styled from "styled-components";

export const FlexWrapper = styled.div<FlexWrapperProps>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  gap: ${props => props.gap || '20px'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'flex-start' };
`

export type FlexWrapperProps = {
    direction?: string
    gap?: string
    align?: string
    justify?: string
}