import React, {FC} from "react";
import styled from "styled-components";
import {theme} from "../../styles";
export const MenuItem: FC<MenuItemProps> = ({ href, children}) => {
    return (
        <StyledMenuItem>
            <a href={href}>{children}</a>
        </StyledMenuItem>
    )
}

const StyledMenuItem = styled.li`
  font-weight: 500;
  font-size: 18px;
  color: ${theme.colors.blue500};
`

type MenuItemProps = {
    href: string
    children: React.ReactNode
}