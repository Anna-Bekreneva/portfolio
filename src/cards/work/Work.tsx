import React from 'react';
import s from './Work.module.css';

type SkillPropsType = {
	title: string
	text: string
}

export const Work: React.FC<SkillPropsType> = (props) => {
	return (
		<article className={s.work}>
			<a className={s.link} href="#" target="_blank">
				<span className="sr-only">Посмотреть работу</span>
				<div className={s.img}></div>
			</a>
			<div className={s.content}>
				<h3 className={s.title + ' subtitle'}>{props.title}</h3>
				<p className={s.text}>{props.text}</p>
			</div>
		</article>
	)
}