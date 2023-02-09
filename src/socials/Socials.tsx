import React from 'react';
import s from './Socials.module.css'

export const Socials = () => {
	return (
		<ul className={s.items}>
			<li className={s.item}>
				<a className={s.link} href="#" target="_blank">
					<span className="sr-only">Вк</span>
				</a>
			</li>
			<li className={s.item}>
				<a className={s.link} href="#" target="_blank">
					<span className="sr-only">Инстаграм</span>
				</a>
			</li>
			<li className={s.item}>
				<a className={s.link} href="#" target="_blank">
					<span className="sr-only">Телеграм</span>
				</a>
			</li>
			<li className={s.item}>
				<a className={s.link} href="#" target="_blank">
					<span className="sr-only">Гит</span>
				</a>
			</li>
		</ul>
	)
}