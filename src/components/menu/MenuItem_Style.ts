import {focusVisible, theme} from "../../styles";
import styled from "styled-components";
import {Link} from "react-scroll";

const MenuItem = styled.li`
  font-weight: 500;
  font-size: 18px;
  color: ${theme.colors.blue500};
`

const MenuLink = styled(Link)`
  transition: color 0.3s, box-shadow 0.3s;
  ${focusVisible()};
  
  &:hover {
      color: ${theme.colors.orange500};
  }
`


export const S = {MenuItem, MenuLink}