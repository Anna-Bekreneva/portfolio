import styled from "styled-components";

export const FlexWrapper = styled.div<FlexWrapperProps>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  gap: ${props => props.gap || '20px'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'flex-start' };
  flex-wrap: ${props => props.wrap || 'nowrap'};
`

// todo: do i need to do so?
type FlexWrapperProps = {
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
    gap?: string
    align?: 'stretch' | 'center' | 'start' | 'end'
    justify?: 'start' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
}