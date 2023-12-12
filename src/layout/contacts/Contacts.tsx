import React from 'react';
import styled from "styled-components";
import {FlexWrapper, StyledTitle} from "../../components";

export const Contacts = () => {
	return (
		<StyledContacts>
			<FlexWrapper>
				<div>
					<StyledTitle>Контакты</StyledTitle>
					<StyledText>
						<p>
							Если у вас есть вопрос или предложение, пожалуйста, отправьте форму и я свяжусь в вами в ближайшее время
						</p>
					</StyledText>
				</div>
				<StyledForm action="#">
					<FlexWrapper>
						<StyledItem>
							<StyledLabel htmlFor="contacts-name">Введите ваше имя</StyledLabel>
							<StyledField id="contacts-name" name="name" type="text" placeholder="Имя" required/>
						</StyledItem>
						<StyledItem>
							<StyledLabel htmlFor="contacts-email">Введите свою электронную почту</StyledLabel>
							<StyledField id="contacts-email" name="name" type="email" placeholder="Электронная почта" required/>
						</StyledItem>
					</FlexWrapper>
					<StyledItem>
						<StyledLabel className="sr-only" htmlFor="contacts-message">Введите ваше сообщение</StyledLabel>
						<StyledField as={'textarea'} id="contacts-message" name="message" placeholder="Предложение или вопрос"></StyledField>
					</StyledItem>
					<button type="submit">Отправить</button>
				</StyledForm>
			</FlexWrapper>
		</StyledContacts>
	)
}

const StyledContacts = styled.section``
const StyledText = styled.div``
const StyledForm = styled.form``
const StyledItem = styled.form``
const StyledLabel = styled.label``
const StyledField = styled.input``