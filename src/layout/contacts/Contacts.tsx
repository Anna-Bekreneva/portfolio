import React from 'react';
import styled from "styled-components";
import {Button, Container, FlexWrapper, Icon, StyledTitle} from "../../components";
import {theme} from "../../styles";

export const Contacts = () => {
	return (
		<StyledContacts>
			<Container>
				<FlexWrapper justify={'space-between'}>
					<StyledContent>
						<StyledTitle>
							Let's <StyledTitle marginBottom={'0'} as={'span'} color={theme.colors.orange500}>cooperate!</StyledTitle>
						</StyledTitle>
						<StyledText>
							<p>
								If you have a question or suggestion, please submit the form and I will get back to you as soon as possible
							</p>
						</StyledText>
						<StyledLink href="mailto:anjbekrenewa@gmail.com">
							<Icon width={'20'} height={'20'} id={'gitHubIcon'} fill={theme.colors.orange500}/>
							anjbekrenewa@gmail.com
						</StyledLink>
						<StyledBottom>
							<span>©2024 Все права защищены </span>
						</StyledBottom>
					</StyledContent>
					<StyledForm action="#">
						<StyledItems>
							<StyledItem>
								<StyledField id="contacts-name" name="name" type="text" placeholder={'John'} required/>
								<StyledLabel htmlFor="contacts-name">Name</StyledLabel>
							</StyledItem>
							<StyledItem>
								<StyledField id="contacts-email" name="name" type="email" placeholder={'john@gmail.com'} required/>
								<StyledLabel htmlFor="contacts-email">E-mail</StyledLabel>
							</StyledItem>
							<StyledItem>
								<StyledTextarea as={'textarea'} id="contacts-message" name="message" placeholder={" Let's cooperate! "}/>
								<StyledLabel className="sr-only" htmlFor="contacts-message">Your message</StyledLabel>
							</StyledItem>
						</StyledItems>
						<Button type="submit">Отправить</Button>
					</StyledForm>
				</FlexWrapper>
			</Container>
		</StyledContacts>
	)
}

const StyledContacts = styled.section`
	background-color: ${theme.colors.white} !important;
	padding: 60px 0 20px !important;
	position: relative;
	z-index: 2;
	
	&::before {
		position: absolute;
		content: '';
		height: 100%;
		width: 43%;
		left: 0;
		top: 0;
		background-color: ${theme.colors.orange50};
		z-index: -1;
		border-radius: 0 40px 40px 0;
	}
`

const StyledContent = styled.div`
	max-width: 460px;
	width: 100%;
	display: flex;
	flex-direction: column;
`

const StyledText = styled.div`
	font-size: 18px;

	&:not(:last-child) {
		margin-bottom: 24px;
	}
	
	p {
		&:not(:last-child) {
			margin-bottom: 8px;
		}
	}
`

const StyledLink = styled.a`
	color: ${theme.colors.blue500};
	font-weight: 500;
	font-size: 18px;
	display: flex;
	align-items: center;
	gap: 8px;
`

const StyledBottom = styled(FlexWrapper)`
	margin-top: auto;
	justify-content: space-between;
	font-size: 14px;
`

const StyledForm = styled.form`
	max-width: 680px;
	width: 100%;
`

const StyledItems = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 24px;
	
	&:not(:last-child) {
		margin-bottom: 20px;
	}
`
const StyledItem = styled.form`
	width: 300px;
	flex-grow: 1;
	position: relative;
`

const StyledLabel = styled.label`
	display: block;
	position: absolute;
	top: 24px;
	transform: translateY(-50%);
	left: 16px;
	font-size: 14px;
	background-color: ${theme.colors.white};
	padding: 2px 6px;
	transition: top 0.3s;
	opacity: 0.9;
`
const StyledField = styled.input`
	width: 100%;
	padding: 12px 16px;
	border-radius: 8px;
	border: 1px solid ${theme.colors.orange300};
	transition: border-color 0.3s;
	color: ${theme.colors.dark900};
	
	&:focus,
	&:not(:placeholder-shown) {
		& + label {
			top: 1px;
		}
	}
	
	&::placeholder {
		color: transparent;
	}
`

const StyledTextarea = styled(StyledField)`
	resize: vertical;
	min-height: 150px;
`