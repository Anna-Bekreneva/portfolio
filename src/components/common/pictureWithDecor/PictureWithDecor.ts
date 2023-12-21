import styled from "styled-components";
import {theme} from "../../../styles";
import {Picture} from "../picture";

export const StyledWrapperPictureWithDecor = styled.div`
  max-width: 460px;
  width: 100%;
  height: 460px;
  position: relative;
  z-index: 1;
  border-radius: 20px;

  &::before {
    width: 100%;
    height: 100%;
    position: absolute;
    content: "";
    background-color: ${theme.colors.orange200};
    opacity: 0.8;
    top: -6%;
    left: -6%;
    z-index: -1;
    border-radius: inherit;
  }
`

export const StyledPictureWithDecor = styled(Picture)`
  width: 100%;
  border-radius: 20px;
  
  img {
    width: 100%;
    height: 100%;
    border: 2px solid ${theme.colors.orange200};
  }
`