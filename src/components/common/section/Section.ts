import styled from "styled-components";
import {adaptive, theme} from "../../../styles";

type Props = {
    backgroundColor?: string
    padding?: string
    mobilePadding?: string
}
export const Section = styled.section<Props>`
    background-color: ${props => props.backgroundColor || `${theme.colors.white}` };
    padding: ${props => props.padding || '100px 0'};
    position: relative;
  
    ${adaptive(theme.breakpoints.md, "max", "width", theme.breakpoints.md)} {
        padding: ${props => props.mobilePadding || '50px 0'}
    }
`