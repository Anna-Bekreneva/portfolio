import React from 'react';
import s from './Works.module.css';
import {Work} from '../cards/work/Work';

export const Works = () => {
	return (
		<section className={s.works + " section"}>
			<div className="container container--flex">
				<h2 className="title">Мои работы</h2>
				<ul className={s.items}>
					<li className={s.item}>
						<Work title={'Соцсеть на React'} text={'Краткое описание'}></Work>
					</li>
					<li className={s.item}>
						<Work title={'Счетчик на React'} text={'Краткое описание и очень краткое описание. Краткое и' +
							' очень краткое описание'}></Work>
					</li>
				</ul>
			</div>
		</section>
	)
}