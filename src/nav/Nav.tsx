import React from 'react';
import s from './Nav.module.css'

export const Nav = () => {
	return (
		<nav className={s.nav}>
			<ul className={s.items}>
				<li className={s.item}>
					<a className={s.link} href="#">Главная</a>
				</li>
				<li className={s.item}>
					<a className={s.link} href="#">Скиллы</a>
				</li>
				<li className={s.item}>
					<a className={s.link} href="#">Работы</a>
				</li>
				<li className={s.item}>
					<a className={s.link} href="#">Контакты</a>
				</li>
			</ul>
		</nav>
	)
}