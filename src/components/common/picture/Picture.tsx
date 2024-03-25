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
            <source srcSet={srcAvif} type="image/avif"/>
            <source srcSet={srcWebp} type="image/webp"/>
            <img srcSet={srcSet} src={src} loading={lazy ? 'lazy' : 'eager'} alt={alt ?? ''} {...props}/>
        </StyledPicture>
    )
}

export const StyledPicture = styled.picture`
    img {
      object-fit: cover;
    }
`
