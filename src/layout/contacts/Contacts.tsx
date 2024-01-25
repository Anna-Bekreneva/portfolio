import React from 'react';
import {Button, Container, FlexWrapper, Icon, IconWrapper, StyledTitle} from "../../components";
import {adaptiveValue, theme} from "../../styles";
import {S} from './Contacts_Style'

export const Contacts = () => {
	return (
		<S.Contacts>
			<Container>
				<FlexWrapper justify={'space-between'} gap={'26px'}>
					<S.Content>
						<StyledTitle marginBottom={`${adaptiveValue(32, 20)}`}>
							Let's <StyledTitle marginBottom={'0'} as={'span'} color={theme.colors.orange500}>cooperate!</StyledTitle>
						</StyledTitle>
						<S.Text as={'p'}>
							If you have a question or suggestion, please submit the form and I will get back to you as soon as possible
						</S.Text>
						<S.Link href="mailto:anjbekrenewa@gmail.com">
							<IconWrapper width={'24px'} height={'24px'}>
								<Icon width={'16'} height={'16'} viewBox={'0 0 24 24'} idIcon={'email'} fill={theme.colors.orange50} stroke={theme.colors.orange500}/>
							</IconWrapper>
							anjbekrenewa@gmail.com
						</S.Link>
						<S.Bottom as={'span'}>
							©2024 Все права защищены
						</S.Bottom>
					</S.Content>
					<S.Form action="#">
						<S.FormBox>
							<S.Items>
								<S.Item>
									<S.Field id="contacts-name" name="name" type="text" placeholder={'John'} borderRadius={'24px 4px 4px 4px'} borderRadiusMobile={'16px 16px 4px 4px'} required/>
									<S.Label htmlFor="contacts-name">Name</S.Label>
								</S.Item>
								<S.Item>
									<S.Field id="contacts-email" name="name" type="email" placeholder={'john@gmail.com'} borderRadius={'4px 24px 4px 4px'} borderRadiusMobile={'4px'}  required/>
									<S.Label htmlFor="contacts-email">E-mail</S.Label>
								</S.Item>
							</S.Items>
							<S.Item>
								<S.Textarea as={'textarea'} id="contacts-message" name="message" placeholder={" Let's cooperate! "} borderRadius={'4px 4px 24px 24px'} borderRadiusMobile={'4px 4px 16px 16px'}  />
								<S.Label htmlFor="contacts-message">Your message</S.Label>
							</S.Item>
						</S.FormBox>
						<Button type="submit">Отправить</Button>
					</S.Form>
					<S.Bottom as={'span'} mobile>
						©2024 Все права защищены
					</S.Bottom>
				</FlexWrapper>
			</Container>
		</S.Contacts>
	)
}