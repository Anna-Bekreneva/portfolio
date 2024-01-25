import styled from "styled-components";
import {theme} from "../../styles";

const SocialItem = styled.li`
  width: 36px;
  height: 36px;`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  fill: ${theme.colors.brown400};
`

export const S = {
    SocialItem, SocialLink
}