import React, {FC} from "react";
import {S} from './MenuItem_Style'

export const MenuItem: FC<MenuItemProps> = ({ href, children}) => {
    return (
        <S.MenuItem>
            <a href={href}>{children}</a>
        </S.MenuItem>
    )
}

type MenuItemProps = {
    href: string
    children: React.ReactNode
}