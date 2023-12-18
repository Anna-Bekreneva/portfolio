import {Icon} from "../common";
import styled from "styled-components";
import {FC} from "react";

type SocialsItemProps = {
    ariaLabel: string
    id: string
    href: string
}
export const SocialItem: FC<SocialsItemProps> = ({ariaLabel, id, href}) => {
    return (
        <StyledSocialItem>
            <StyledSocialLink aria-label={ariaLabel}>
                <Icon id={id}></Icon>
            </StyledSocialLink>
        </StyledSocialItem>
    )
}

export const StyledSocialItem = styled.li``
export const StyledSocialLink = styled.a``
