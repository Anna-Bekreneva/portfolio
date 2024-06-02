import React from 'react';
import {Button, Container, FlexWrapper, Icon, IconWrapper, StyledTitle} from "components";
import {adaptiveValue, theme} from "styles";
import {S} from './Contacts_Style'
import {useContacts} from "layout/contacts/hooks";

export const Contacts = () => {
	const {formRef, sendEmail, formInfo, buttonIsDisabled} = useContacts()

	return (
		<S.Contacts id={'contacts'} padding={'60px 0'}>
			<Container>
				<FlexWrapper justify={'space-between'} gap={'26px'}>
					<S.Content>
						<StyledTitle marginBottom={`${adaptiveValue(32, 20)}`}>
							Давайте <StyledTitle marginBottom={'0'} as={'span'} color={theme.colors.orange500}>Сотрудничать!</StyledTitle>
						</StyledTitle>
						<S.Text as={'p'}>
							Если у вас есть вопросы или предложения, пожалуйста, заполните форму, и я свяжусь с вами в ближайшее время.
						</S.Text>
						<S.Link href="mailto:anjbekrenewa@gmail.com" target={'_blank'}>
							<IconWrapper width={'24px'} height={'24px'}>
								<Icon width={'16'} height={'16'} viewBox={'0 0 24 24'} idIcon={'email'} fill={theme.colors.orange50} stroke={theme.colors.brown400}/>
							</IconWrapper>
							anjbekrenewa@gmail.com
						</S.Link>
						<S.Bottom as={'span'}>
							©2024 все права защищены
						</S.Bottom>
					</S.Content>
					<S.Form action="#" ref={formRef} onSubmit={sendEmail}>
						<S.FormBox>
							<S.Items>
								<S.Item>
									<S.Field id="contacts-name" name="user_name" type="text" placeholder={'John'} borderRadius={'24px 4px 4px 4px'} borderRadiusMobile={'16px 16px 4px 4px'} required/>
									<S.Label htmlFor="contacts-name">Ваше имя</S.Label>
								</S.Item>
								<S.Item>
									<S.Field id="contacts-email" name="email" type="email" placeholder={'john@gmail.com'} borderRadius={'4px 24px 4px 4px'} borderRadiusMobile={'4px'}  required/>
									<S.Label htmlFor="contacts-email">Эл. почта</S.Label>
								</S.Item>
							</S.Items>
							<S.Item>
								<S.Textarea as={'textarea'} id="contacts-message" name="message" placeholder={" Let's cooperate! "} borderRadius={'4px 4px 24px 24px'} borderRadiusMobile={'4px 4px 16px 16px'}  />
								<S.Label htmlFor="contacts-message">Сообщение</S.Label>
							</S.Item>
						</S.FormBox>
						{ formInfo.message && <S.FormInfo error={formInfo.error}> {formInfo.message} </S.FormInfo> }
						<Button disabled={buttonIsDisabled} type="submit">Отправить</Button>
					</S.Form>
					<S.Bottom as={'span'} mobile>
						©2024 all rights reserved
					</S.Bottom>
				</FlexWrapper>
			</Container>
		</S.Contacts>
	)
}