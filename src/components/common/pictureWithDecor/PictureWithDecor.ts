import styled from "styled-components";
import {adaptive, theme} from "../../../styles";
import {Picture} from "../picture";

export const StyledWrapperPictureWithDecor = styled.div`
  max-width: 460px;
  width: 100%;
  height: 460px;
  position: relative;
  z-index: 1;
  border-radius: 20px;

  ${adaptive(theme.breakpoints.sm, "max", "width", theme.breakpoints.sm)} {
    width: 92%;
    height: 360px;
  }
  
  &::before {
    width: 100%;
    height: 100%;
    position: absolute;
    content: "";
    background-color: ${theme.colors.orange200};
    top: -6%;
    left: -6%;
    z-index: -1;
    border-radius: inherit;

    ${adaptive(theme.breakpoints.md, "max", "width", theme.breakpoints.md)} {
      top: -4%;
      left: -4%;
      width: 96%;
      height: 96%;
    }
  }
`
export const StyledPictureWithDecor = styled(Picture)`
  width: 100%;
  border-radius: 20px;
  height: 100%;

  ${adaptive(theme.breakpoints.md, "max", "width", theme.breakpoints.md)} {
    border-radius: 14px;
  }
`