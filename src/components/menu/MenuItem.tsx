import React, {FC} from "react";
import styled from "styled-components";
import {FlexWrapperProps} from "../common";
import {theme} from "../../styles";
export const MenuItem: FC<MenuItemProps> = ({ href, children}) => {
    return (
        <StyledMenuItem>
            <StyledMenuLink href={href}>{children}</StyledMenuLink>
        </StyledMenuItem>
    )
}

const StyledMenuItem = styled.li`
  font-weight: 600;
  color: ${theme.colors.blue500};
`
const StyledMenuLink = styled.a``

type MenuItemProps = {
    href: string
    children: React.ReactNode
}