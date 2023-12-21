import styled from "styled-components";
import {theme} from "../../../styles";
export const StyledTitle = styled.h2<StyledTitleProps>`
  font-weight: 600;
  font-size: ${props => props.fontSize || '42px'};
  line-height: 1.2;
  color: ${props => props.color || theme.colors.dark900};
  margin-bottom: ${props => props.marginBottom || '32px'};
  text-align: ${props => props.textAlign || 'left'};
  text-transform: ${props => props.transform || 'capitalize'};
  display: inline-block;
`

type StyledTitleProps = {
    fontSize?: string
    color?: string;
    marginBottom?: string
    textAlign?: string
    transform?: string
}
