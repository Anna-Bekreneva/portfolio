import styled, {css} from "styled-components";
import {adaptive, focusVisible, theme} from "../../styles";
import {Button, FlexWrapper, IconWrapper, Section} from "../../components";

const Contacts = styled(Section)`
	${FlexWrapper} {
		${adaptive(theme.breakpoints.md, "max", "width", theme.breakpoints.md)} {
			flex-direction: column;
		}
	}

	${IconWrapper} {
		border-radius: 50%;
		background-color: ${theme.colors.brown400};
		transition: background-color 0.3s;
	}
	
	${adaptive(theme.breakpoints.md, "max", "width", theme.breakpoints.md)} {
		padding: 60px 0 20px;
		background-color: ${theme.colors.orange50};
	}
`

const Content = styled.div`
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

const Text = styled.div`
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

const Link = styled.a`
	color: ${theme.colors.blue500};
	font-weight: 500;
	font-size: 18px;
	display: flex;
	align-items: center;
	align-self: flex-start;
	gap: 8px;
	transition: color 0.3s, box-shadow 0.3s;
	${focusVisible()};
	
	&:hover {
		color: ${theme.colors.orange500};
		
		${IconWrapper} {
			background-color: ${theme.colors.orange500};
		}
	}

	${adaptive(theme.breakpoints.lg, "max", "width", theme.breakpoints.lg)} {
		font-size: 15px;
	}
`

const Bottom = styled(FlexWrapper)<{mobile?: boolean}>`
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

const Form = styled.form`
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

const FormBox = styled.div`
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

const Items = styled.div`
	display: flex;
	gap: 20px;

	${adaptive(theme.breakpoints.lg, "max", "width", theme.breakpoints.lg)} {
		gap: 12px;
	}

	${adaptive(theme.breakpoints.sm, "max", "width", theme.breakpoints.sm)} {
		flex-direction: column;
	}
`

const Item = styled.div`
	position: relative;
	flex-grow: 1;
	width: 100%;
`

const Label = styled.label`
	display: block;
	position: absolute;
	top: 24px;
	transform: translateY(-50%);
	left: 16px;
	font-size: 14px;
	background-color: ${theme.colors.white};
	padding: 2px 6px;
	transition: top 0.3s, opacity 0.3s;
	opacity: 0.9;

	${adaptive(theme.breakpoints.md, "max", "width", theme.breakpoints.md)} {
		background-color: ${theme.colors.orange50};
	}
`

const Field = styled.input<{ borderRadius: string, borderRadiusMobile: string }>`
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

	&::placeholder {
		color: transparent;
	}
	
	&:focus,
	&:not(:placeholder-shown) {
		& + ${Label} {
			top: 1px;
		}
	}
	
	&:focus {
		outline: 0;
		border-color: ${theme.colors.orange500};
	}
	
	&:hover {
		& ~ label {
			opacity: 1;
		}
	}
`

const Textarea = styled(Field)`
	height: 150px;
	resize: none;
`

export const S = {
    Contacts, Content, Text, Link, Bottom, Form, FormBox, Items, Item, Label, Field, Textarea
}