import {Icon} from "../common";
import styled from "styled-components";
import {FC} from "react";
import {theme} from "../../styles";

type SocialsItemProps = {
    ariaLabel: string
    id: string
    href: string
}
export const SocialItem: FC<SocialsItemProps> = ({ariaLabel, id, href}) => {
    return (
        <StyledSocialItem>
            <StyledSocialLink aria-label={ariaLabel} href={href}>
                <Icon width={'32'} height={'32'} id={id}/>
            </StyledSocialLink>
        </StyledSocialItem>
    )
}

export const StyledSocialItem = styled.li`
  width: 36px;
  height: 36px;`
export const StyledSocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  fill: ${theme.colors.brown400};
`
