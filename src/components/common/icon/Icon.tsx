import {FC} from "react";
import sprite from '../../../assets/images/sprite.svg'

export type IconProps = {
    id: string
    width?: string
    height?: string
    viewBox?: string
}
export const Icon: FC<IconProps> = ({id, width, height, viewBox}) => {
    return (
        <svg width={width || '36'} height={ height || '36' } viewBox={viewBox || '0 0 36 36'} xmlns="http://www.w3.org/2000/svg">
             <use xlinkHref={`${sprite}#${id}`}></use>
         </svg>
    )
}