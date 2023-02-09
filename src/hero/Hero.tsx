import React from 'react';
import s from './Hero.module.css';

export const Hero = () => {
	return (
		<section className={s.hero + ' section'}>
			<div className="container">
				<div className={s.box}>
					<h1 className={s.title}>
						Бекренева Анна — frontend разработчик
					</h1>
					<div className={s.img}></div>
				</div>
			</div>
		</section>
	)
}