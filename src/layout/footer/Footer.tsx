import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components";

export const Footer = () => {
	return (
		<StyledFooter>
			<StyledLink href="mailto:anjbekrenewa@gmail.com">anjbekrenewa@gmail.com</StyledLink>
			<span>Бекренева Анна</span>
			<span>©2023 Все права защищены </span>
		</StyledFooter>
	)
}

const StyledFooter = styled.footer``
const StyledLink = styled.a``