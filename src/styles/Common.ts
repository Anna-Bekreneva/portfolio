import {BreakpointsType, theme} from "./Theme";
import {css} from "styled-components";

export const adaptive = (
    breakpoint: BreakpointsType,
    type: "min" | "max" | "between" = "min",
    orientation: "width" | "height" = "width",
    breakpoint2: string = ""
) => {
    return `@media screen and (${type === "max" ? "max" : "min"}-${orientation}: ${breakpoint}) ${
        type === "between" ? `and (max-${orientation}: ${breakpoint2})` : ""}`
}

const maxWidth = 1920;
const minWidth = 320;
export const adaptiveValue = (startValue: number, minValue: number) => {
    return `calc( (100vw - ${minWidth}px) / (${maxWidth} - ${minWidth}) * (${startValue} - ${minValue}) + ${minValue}px);`
}

export const focusVisible = () => {
    return css`
      outline: 0;
      border-radius: 2px;
      
      &:focus-visible {
        box-shadow: 0 0 0 2px ${theme.colors.orange500};
      }
    `
}
