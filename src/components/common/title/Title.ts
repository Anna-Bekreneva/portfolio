import styled from "styled-components";
import {theme} from "../../../styles";
export const StyledTitle = styled.h2<StyledTitleProps>`
  font-weight: 600;
  font-size: ${props => props.fontSize || '24px'};
  line-height: ${props => props.lineHeight || 1.2};
  color: ${props => props.color || theme.colors.dark900};
  display: ${props => props.display || 'inline-block'};
`

type StyledTitleProps = {
    fontSize?: string
    color?: string;
    lineHeight?: number
    display?: string
}