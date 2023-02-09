import React from 'react';
import s from './Skills.module.css';
import {Skill} from '../cards/skill/Skill';

export const Skills = () => {
	return (
		<section className={s.skills + " section"}>
			<div className="container container--flex">
				<h2 className="title">Мои скиллы</h2>
				<ul className={s.items}>
					<li className={s.item}>
						<Skill title={'CSS / SCSS'} text={'Подробное описание навыка'}></Skill>
					</li>
					<li className={s.item}>
						<Skill title={'Javascript'} text={'Подробное описание навыка'}></Skill>
					</li>
					<li className={s.item}>
						<Skill title={'React'} text={'Подробное описание навыка Подробное описание навыка'}></Skill>
					</li>
				</ul>
			</div>
		</section>
	)
}