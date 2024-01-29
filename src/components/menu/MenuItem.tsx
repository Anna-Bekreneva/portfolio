import React, {FC, memo} from "react";
import {S} from './MenuItem_Style'

export const MenuItem: FC<MenuItemProps> = memo(({ to, callback, children}) => {
    return (
        <S.MenuItem>
            <S.MenuLink href={'#'} to={to} onClick={callback} smooth>{children}</S.MenuLink>
        </S.MenuItem>
    )
})

type MenuItemProps = {
    to: string
    callback: () => void
    children: React.ReactNode
}