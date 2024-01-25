import styled from "styled-components";
import {FlexWrapper, StyledTitle, StyledWrapperPictureWithDecor, Section} from "../../components";
import {adaptive, adaptiveValue, theme} from "../../styles";

const WrapperTitle = styled(StyledTitle)`
  margin-bottom: ${adaptiveValue(48, 24)};

  ${adaptive(theme.breakpoints.md, "min", "width", theme.breakpoints.md)} {
    visibility: hidden;
  }
`
const Education = styled(Section)`
  ${StyledWrapperPictureWithDecor} {
    align-self: flex-start;
    margin-left:20px;

    ${adaptive(theme.breakpoints.md, "max", "width", theme.breakpoints.md)} {
      display: none;
    }
  }
`

const Items = styled(FlexWrapper)`
  flex-direction: column;
  gap: ${adaptiveValue(48, 24)};
  width: 100%;

  ${adaptive(theme.breakpoints.md, "min", "width", theme.breakpoints.md)} {
    max-width: 600px;
  }
`

const Step = styled.li`
  position: relative;

  &::before {

    ${adaptive(theme.breakpoints.lg, "min", "width", theme.breakpoints.lg)} {
      position: absolute;
      content: "";
      width: 1px;
      background-color: ${theme.colors.brown400};
      opacity: 0.2;
      left: 50px;
      top: 0;
      z-index: 0;
      height: calc(100% + 28px);
    }
  }

  &:last-child {
    &::before {
      opacity: 0;
    }
  }
`

export const S = { WrapperTitle,  Education,  Items,  Step}