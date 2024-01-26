import styled from "styled-components";
import {Button, Section} from "../../components";
import {adaptive, adaptiveValue, theme} from "../../styles";

const Works = styled(Section)`
  
  ${adaptive(theme.breakpoints.lg, "max", "width", theme.breakpoints.lg)} {
    padding: 60px 0;
  }
  
  ${Button} {
    margin: 0 auto;
    justify-content: center;
    
    ${adaptive(theme.breakpoints.sm, "max", "width", theme.breakpoints.sm)} {
      width: 100%;
    }
  }
`

const Items = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: ${adaptiveValue(36, 20)};
  margin-bottom: ${adaptiveValue(32, 26)};

  ${adaptive(theme.breakpoints.sm, "max", "width", theme.breakpoints.sm)} {
    grid-template-columns: 1fr;
  }
`

const Item = styled.li`
  width: 100%;
`

export const S = {
    Works, Items, Item
}