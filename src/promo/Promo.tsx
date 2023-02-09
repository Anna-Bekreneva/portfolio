import React from 'react';
import s from './Promo.module.css';

export const Promo = () => {
	return (
		<div className={s.promo + " section"}>
			<div className="container container--flex">
				<span className="title">
					Рассматриваю варианты удаленной работы
				</span>
				<a className={s.button + " button"} href="#">Нанять меня</a>
			</div>
		</div>
	)
}