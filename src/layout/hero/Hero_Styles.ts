import styled from "styled-components";
import {FlexWrapper, StyledTitle} from "../../components";
import {adaptive, adaptiveValue, theme} from "../../styles";

const Subtext = styled(StyledTitle)`
  line-height: 1.4;
  display: block;
  margin-bottom: 0;
`
const Hero = styled.section`
  background-color: ${theme.colors.orange50};
  min-height: calc(100vh - 68px);
  padding: 50px 0;
  display: flex;
  align-items: center;
}
  
  ${FlexWrapper} {
    gap: ${adaptiveValue(80, 40)};
    
    ${adaptive(theme.breakpoints.md, "max", "width", theme.breakpoints.md)} {
      flex-direction: column;
    }
  }
  
  ${StyledTitle} {
    font-size: ${adaptiveValue(68, 40)};
  }
  
  ${Subtext} {
    font-size: ${adaptiveValue(26, 20)};
  }
`

export const S = { Subtext, Hero }