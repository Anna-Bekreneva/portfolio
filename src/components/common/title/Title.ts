import styled from "styled-components";
import {adaptiveValue, theme} from "../../../styles";
export const StyledTitle = styled.h2<StyledTitleProps>`
  font-size: ${props => props.fontSize || adaptiveValue(42, 28)};
  color: ${props => props.color || theme.colors.dark900};
  margin-bottom: ${props => props.marginBottom || '32px'};
  text-align: ${props => props.textAlign || 'left'};
  text-transform: ${props => props.transform || 'capitalize'};
  display: ${props => props.display || 'inline-block'};
  line-height: 1.2;
  font-weight: 600;
`

type StyledTitleProps = {
    fontSize?: string
    color?: string;
    marginBottom?: string
    textAlign?: string
    transform?: string
    display?: string
}
