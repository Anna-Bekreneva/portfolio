import styled from "styled-components";
import {adaptive, theme} from "../../styles";

const Items = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  gap: 24px;

  ${adaptive(theme.breakpoints.sm, "max", "width", theme.breakpoints.sm)} {
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  }
`

const Item = styled.li`
  width: 100%;

  &:first-child {
    justify-content: center;
    display: flex;
    align-items: center;
  }
`

export const S = { Items, Item }