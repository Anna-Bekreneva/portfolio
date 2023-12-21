import {ComponentProps, FC} from "react";
import styled from "styled-components";

export type PictureProps = {
    lazy?: boolean
    srcSet: string
} & ComponentProps<'img'>

export const Picture: FC<PictureProps> = ({ lazy, srcSet,   ...props }) => {
    return (
        <StyledPicture>
            <source srcSet={srcSet} type="image/webp"/>
            <img loading={lazy ? 'lazy' : 'eager'} {...props}/>
        </StyledPicture>
    )
}

export const StyledPicture = styled.picture`
    img {
      object-fit: cover;
    }
`
