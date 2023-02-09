import React from 'react';
import s from './Footer.module.css'
import {Socials} from '../socials/Socials';

export const Footer = () => {
	return (
		<footer className={s.footer}>
			<div className="container">
				<div className={s.box}>
					<span className={s.subtitle + " subtitle"}>Бекренева Анна</span>
					<Socials></Socials>
					<span className={s.text}>©2023 Все права защищены </span>
				</div>
			</div>
		</footer>
	)
}