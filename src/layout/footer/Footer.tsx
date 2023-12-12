import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components";

export const Footer = () => {
	return (
		<StyledFooter>
				<FlexWrapper>
					<FlexWrapper as={'ul'}>
						<li>
							<StyledLink href="tel:+79853879297">+79853879297</StyledLink>
						</li>
						<li>
							<StyledLink href="mailto:anjbekrenewa@gmail.com">anjbekrenewa@gmail.com</StyledLink>
						</li>
					</FlexWrapper>
					<span>Бекренева Анна</span>
					<span>©2023 Все права защищены </span>
				</FlexWrapper>
		</StyledFooter>
	)
}

const StyledFooter = styled.footer``
const StyledLink = styled.a``