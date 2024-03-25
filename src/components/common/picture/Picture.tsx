import {ComponentProps, FC} from "react";
import styled from "styled-components";

export type PictureProps = {
    alt?: string
    lazy?: boolean
    srcWebp: string
    srcAvif: string
} & ComponentProps<'img'>

export const Picture: FC<PictureProps> = ({ alt, lazy, srcWebp, srcAvif, srcSet, src, ...props }) => {
    return (
        <StyledPicture>
            <source srcSet={`${process.env.PUBLIC_URL}${srcAvif}`} type="image/avif"/>
            <source srcSet={`${process.env.PUBLIC_URL}${srcWebp}`} type="image/webp"/>
            <img srcSet={`${process.env.PUBLIC_URL}${srcSet}`} src={`${process.env.PUBLIC_URL}${src}`} loading={lazy ? 'lazy' : 'eager'} alt={alt ?? ''} {...props}/>
        </StyledPicture>
    )
}

export const StyledPicture = styled.picture`
    img {
      object-fit: cover;
    }
`
