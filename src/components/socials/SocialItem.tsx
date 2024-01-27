import {Icon} from "../common";
import {FC} from "react";
import {S} from './SocialItem_Style'

export const SocialItem: FC<Props> = ({ariaLabel, id, href}) => {
    return (
        <S.SocialItem>
            <S.SocialLink aria-label={ariaLabel} href={href} target={'_blank'}>
                <Icon width={'32'} height={'32'} idIcon={id}/>
            </S.SocialLink>
        </S.SocialItem>
    )
}

type Props = {
    ariaLabel: string
    id: string
    href: string
}