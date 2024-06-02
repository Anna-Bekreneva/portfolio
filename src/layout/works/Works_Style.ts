import styled from "styled-components";
import {Button, ButtonStyle, Section} from "components";
import {adaptive, adaptiveValue, theme} from "styles";
import {Link} from "react-scroll";

const Works = styled(Section)`
  
  ${adaptive(theme.breakpoints.lg, "max", "width", theme.breakpoints.lg)} {
    padding: 60px 0;
  }
  
  ${Button} {
    margin: 0 auto;
    width: max-content;
    justify-content: center;
    
    ${adaptive(theme.breakpoints.sm, "max", "width", theme.breakpoints.sm)} {
      width: 100%;
    }
  }
`

const Items = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(398px, 1fr));
  column-gap: ${adaptiveValue(36, 20)};
  row-gap: ${adaptiveValue(56, 20)};
  margin-bottom: ${adaptiveValue(32, 26)};

  ${adaptive(theme.breakpoints.sm, "max", "width", theme.breakpoints.sm)} {
    grid-template-columns: 1fr;
  }
`

const Item = styled.li`
  width: 100%;
`
const LinkScroll = styled(Link)`
  ${ButtonStyle};
  max-width: max-content;
  margin: 0 auto;
`


export const S = {
    Works, Items, Item, LinkScroll
}