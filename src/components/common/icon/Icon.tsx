import {FC} from "react";
import sprite from '../../../assets/images/sprite.svg'

export type IconProps = {
    id: string
    width?: string
    height?: string
    viewBox?: string
    fill?: string
    stroke?: string
}
export const Icon: FC<IconProps> = ({id, width, height, viewBox, fill, stroke}) => {
    return (
        <svg width={width || '36'} height={ height || '36' } viewBox={viewBox || '0 0 36 36'} fill={fill} stroke={stroke} xmlns="http://www.w3.org/2000/svg" aria-hidden>
             <use width={width} height={height} xlinkHref={`${sprite}#${id}`}/>
         </svg>
    )
}