import React, {FC} from "react";
import styled from "styled-components";
import {FlexWrapperProps} from "../common/flexWrapper/FlexWrapper";
export const MenuItem: FC<MenuItemProps> = ({ href, children}) => {
    return (
        <StyledMenuItem>
            <StyledMenuLink href={href}>{children}</StyledMenuLink>
        </StyledMenuItem>
    )
}

const StyledMenuItem = styled.li``
const StyledMenuLink = styled.a``

type MenuProps = {
    children: React.ReactNode
} & FlexWrapperProps

type MenuItemProps = {
    href: string
    children: React.ReactNode
}