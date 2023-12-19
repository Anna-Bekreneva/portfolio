import {FC} from "react";
import sprite from '../../../assets/images/sprite.svg'

export type IconProps = {
    id: string
    width?: string
    height?: string
    viewBox?: string
    fill?: string
}
export const Icon: FC<IconProps> = ({id, width, height, viewBox, fill}) => {
    return (
        <svg width={width || '36'} height={ height || '36' } viewBox={viewBox || '0 0 36 36'} fill={fill} xmlns="http://www.w3.org/2000/svg" aria-hidden>
             <use xlinkHref={`${sprite}#${id}`}/>
         </svg>
    )
}