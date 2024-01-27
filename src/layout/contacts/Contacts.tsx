import React, {ElementRef, FormEvent, useRef, useState} from 'react';
import {Button, Container, FlexWrapper, Icon, IconWrapper, StyledTitle} from "../../components";
import {adaptiveValue, theme} from "../../styles";
import {S} from './Contacts_Style'
import emailjs from '@emailjs/browser';

type FormInfoType = {
	message: null | string,
	error: boolean
}
export const Contacts = () => {
	const defaultFormInfo = { message: null, error: false }
	const form = useRef<ElementRef<'form'>>(null);
	const [buttonIsDisabled, setButtonIsDisabled] = useState(false)
	const [formInfo, setFormInfo] = useState<FormInfoType>(defaultFormInfo)
	const sendEmail = (e: FormEvent<HTMLFormElement>) => {
		e?.preventDefault();

		if (!form.current) return
		setFormInfo(defaultFormInfo)
		setButtonIsDisabled(true)
		emailjs.sendForm('service_59nrloi', 'template_j2x0g1p', form.current, 'ZRpAqdMxMWVFZzQAv')
			.then((result) => {
				setFormInfo( { message: `${result.text}: Your message is sent. Thank you!`, error: false } )
				setButtonIsDisabled(false)
				form.current?.reset()
				setTimeout(() => {
					setFormInfo(defaultFormInfo)
				}, 5000)
			}, (error) => {
				setFormInfo( { message: error.text, error: true } )
				setTimeout(() => {
					setFormInfo(defaultFormInfo)
				}, 5000)
				setButtonIsDisabled(false)
			} );
	};

	return (
		<S.Contacts id={'contacts'} padding={'60px 0'}>
			<Container>
				<FlexWrapper justify={'space-between'} gap={'26px'}>
					<S.Content>
						<StyledTitle marginBottom={`${adaptiveValue(32, 20)}`}>
							Let's <StyledTitle marginBottom={'0'} as={'span'} color={theme.colors.orange500}>cooperate!</StyledTitle>
						</StyledTitle>
						<S.Text as={'p'}>
							If you have a question or suggestion, please submit the form and I will get back to you as soon as possible
						</S.Text>
						<S.Link href="mailto:anjbekrenewa@gmail.com" target={'_blank'}>
							<IconWrapper width={'24px'} height={'24px'}>
								<Icon width={'16'} height={'16'} viewBox={'0 0 24 24'} idIcon={'email'} fill={theme.colors.orange50} stroke={theme.colors.brown400}/>
							</IconWrapper>
							anjbekrenewa@gmail.com
						</S.Link>
						<S.Bottom as={'span'}>
							©2024 all rights reserved
						</S.Bottom>
					</S.Content>
					<S.Form action="#" ref={form} onSubmit={sendEmail}>
						<S.FormBox>
							<S.Items>
								<S.Item>
									<S.Field id="contacts-name" name="user_name" type="text" placeholder={'John'} borderRadius={'24px 4px 4px 4px'} borderRadiusMobile={'16px 16px 4px 4px'} required/>
									<S.Label htmlFor="contacts-name">Name</S.Label>
								</S.Item>
								<S.Item>
									<S.Field id="contacts-email" name="email" type="email" placeholder={'john@gmail.com'} borderRadius={'4px 24px 4px 4px'} borderRadiusMobile={'4px'}  required/>
									<S.Label htmlFor="contacts-email">E-mail</S.Label>
								</S.Item>
							</S.Items>
							<S.Item>
								<S.Textarea as={'textarea'} id="contacts-message" name="message" placeholder={" Let's cooperate! "} borderRadius={'4px 4px 24px 24px'} borderRadiusMobile={'4px 4px 16px 16px'}  />
								<S.Label htmlFor="contacts-message">Your message</S.Label>
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