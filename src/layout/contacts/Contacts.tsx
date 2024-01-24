import React from 'react';
import styled, {css} from "styled-components";
import {Button, Container, FlexWrapper, Icon, StyledTitle} from "../../components";
import {adaptive, adaptiveValue, theme} from "../../styles";

export const Contacts = () => {
	return (
		<StyledContacts>
			<Container>
				<FlexWrapper justify={'space-between'} gap={'26px'}>
					<StyledContent>
						<StyledTitle marginBottom={`${adaptiveValue(32, 20)}`}>
							Let's <StyledTitle marginBottom={'0'} as={'span'} color={theme.colors.orange500}>cooperate!</StyledTitle>
						</StyledTitle>
						<StyledText as={'p'}>
							If you have a question or suggestion, please submit the form and I will get back to you as soon as possible
						</StyledText>
						<StyledLink href="mailto:anjbekrenewa@gmail.com">
							<StyledIcon>
								<Icon width={'16'} height={'16'} viewBox={'0 0 24 24'} id={'email'} fill={theme.colors.orange50} stroke={theme.colors.orange500}/>
							</StyledIcon>
							anjbekrenewa@gmail.com
						</StyledLink>
						<StyledBottom as={'span'}>
							©2024 Все права защищены
						</StyledBottom>
					</StyledContent>
					<StyledForm action="#">
						<StyledFormBox>
							<StyledItems>
								<StyledItem>
									<StyledField id="contacts-name" name="name" type="text" placeholder={'John'} borderRadius={'24px 4px 4px 4px'} borderRadiusMobile={'16px 16px 4px 4px'} required/>
									<StyledLabel htmlFor="contacts-name">Name</StyledLabel>
								</StyledItem>
								<StyledItem>
									<StyledField id="contacts-email" name="name" type="email" placeholder={'john@gmail.com'} borderRadius={'4px 24px 4px 4px'} borderRadiusMobile={'4px'}  required/>
									<StyledLabel htmlFor="contacts-email">E-mail</StyledLabel>
								</StyledItem>
							</StyledItems>
							<StyledItem>
								<StyledTextarea as={'textarea'} id="contacts-message" name="message" placeholder={" Let's cooperate! "} borderRadius={'4px 4px 24px 24px'} borderRadiusMobile={'4px 4px 16px 16px'}  />
								<StyledLabel className="sr-only" htmlFor="contacts-message">Your message</StyledLabel>
							</StyledItem>
						</StyledFormBox>
						<Button type="submit">Отправить</Button>
					</StyledForm>
					<StyledBottom as={'span'} mobile>
						©2024 Все права защищены
					</StyledBottom>
				</FlexWrapper>
			</Container>
		</StyledContacts>
	)
}

const StyledContacts = styled.section`
	background-color: ${theme.colors.white} !important;
	// todo: i want to remove important
	padding: 60px 0 60px !important;
	
	${FlexWrapper} {
		${adaptive(theme.breakpoints.md, "max", "width", theme.breakpoints.md)} {
			flex-direction: column;
		}
	}

	${adaptive(theme.breakpoints.md, "max", "width", theme.breakpoints.md)} {
		background-color: ${theme.colors.orange50} !important;
	}
`

const StyledContent = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;

	${adaptive(theme.breakpoints.md, "min", "width", theme.breakpoints.md)} {
		max-width: 460px;
		padding-right: 24px;
		z-index: 2;
		position: relative;
	}
	
	&::before {
		${adaptive(theme.breakpoints.md, "min", "width", theme.breakpoints.md)} {
			position: absolute;
			content: '';
			height: calc(100% + 120px);
			width: 100vw;
			right: 0;
			top: -60px;
			background-color: ${theme.colors.orange50};
			z-index: -1;
			border-radius: 0 40px 40px 0;
		}
	}
`

const StyledText = styled.div`
	font-size: 18px;

	${adaptive(theme.breakpoints.lg, "max", "width", theme.breakpoints.lg)} {
		font-size: 15px;
	}

	&:not(:last-child) {
		margin-bottom: 24px;

		${adaptive(theme.breakpoints.md, "max", "width", theme.breakpoints.md)} {
			margin-bottom: 16px;
		}
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
	align-self: flex-start;
	gap: 8px;

	${adaptive(theme.breakpoints.lg, "max", "width", theme.breakpoints.lg)} {
		font-size: 15px;
	}
`
const StyledIcon = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 24px;height: 24px;
	border-radius: 50%;
	background-color: ${theme.colors.orange500};
`

const StyledBottom = styled(FlexWrapper)<{mobile?: boolean}>`
	margin-top: auto;
	justify-content: space-between;
	font-size: 14px;
	
	${props => {
		if (props.mobile) {
			return css`
				${adaptive(theme.breakpoints.sm, "max", "width", theme.breakpoints.sm)} {
					text-align: center;
				}
				
				${adaptive(theme.breakpoints.md, "min", "width", theme.breakpoints.md)} {
					display: none;
				}
			`
		} else {
			return css`
				${adaptive(theme.breakpoints.md, "max", "width", theme.breakpoints.md)} {
					display: none;
				}
			`
		}
	}}
`

const StyledForm = styled.form`
	width: 100%;

	${adaptive(theme.breakpoints.md, "min", "width", theme.breakpoints.md)} {
		max-width: 680px;
	}
	
	${Button} {
		${adaptive(theme.breakpoints.sm, "max", "width", theme.breakpoints.sm)} {
			width: 100%;
		}
	}
`

const StyledFormBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;

	${adaptive(theme.breakpoints.lg, "max", "width", theme.breakpoints.lg)} {
		gap: 12px;
	}
	
	&:not(:last-child) {
		margin-bottom: 20px;

		${adaptive(theme.breakpoints.md, "max", "width", theme.breakpoints.md)} {
			margin-bottom: 16px;
		}
	}
`

const StyledItems = styled.div`
	display: flex;
	gap: 20px;

	${adaptive(theme.breakpoints.lg, "max", "width", theme.breakpoints.lg)} {
		gap: 12px;
	}

	${adaptive(theme.breakpoints.sm, "max", "width", theme.breakpoints.sm)} {
		flex-direction: column;
	}
`

const StyledItem = styled.div`
	position: relative;
	flex-grow: 1;
	width: 100%;
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

	${adaptive(theme.breakpoints.md, "max", "width", theme.breakpoints.md)} {
		background-color: ${theme.colors.orange50};
	}
`
const StyledField = styled.input<{ borderRadius: string, borderRadiusMobile: string }>`
	width: 100%;
	padding: 12px 16px;
	border-radius: ${props => props.borderRadius};
	border: 1px solid ${theme.colors.orange300};
	transition: border-color 0.3s;
	color: ${theme.colors.dark900};

	${adaptive(theme.breakpoints.lg, "max", "width", theme.breakpoints.lg)} {
		padding: 12px;
		font-size: 14px;
	}

	${adaptive(theme.breakpoints.sm, "max", "width", theme.breakpoints.sm)} {
		border-radius: ${props => props.borderRadiusMobile};
	}
	
	&:focus,
	&:not(:placeholder-shown) {
		& + ${StyledLabel} {
			top: 1px;
		}
	}
	
	&::placeholder {
		color: transparent;
	}
	
	&:focus {
		outline: 0;
		border-color: ${theme.colors.orange500};
	}
`

const StyledTextarea = styled(StyledField)`
	height: 150px;
	resize: none;
`