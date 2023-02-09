import React from 'react';
import s from './Contacts.module.css';

export const Contacts = () => {
	return (
		<section className={s.contacts + " section"}>
			<div className="container container--flex">
				<h2 className={"title"}>
					Контакты
				</h2>
				<form className={s.form + " form"} action="#">
					<div className="form__item">
						<label className="sr-only" htmlFor="contacts-name">Введите ваше имя</label>
						<input className="form__field" id="contacts-name" name="name" type="text" placeholder="Представьтесь, пожалуйста" required/>
					</div>
					<div className="form__item">
						<label className="sr-only" htmlFor="contacts-email">Введите свою электронную почту</label>
						<input className="form__field" id="contacts-email" name="name" type="email" placeholder="Электронная почта" required/>
					</div>
					<div className="form__item">
						<label className="sr-only" htmlFor="contacts-message">Введите ваше сообщение</label>
						<textarea className="form__field form__field--message" id="contacts-message" name="message" placeholder="Предложение или вопрос"></textarea>
					</div>
					<button className={s.button + " button"} type="submit">Отправить</button>
				</form>
			</div>
		</section>
	)
}