import React from 'react';
import s from './Skill.module.css';

type SkillPropsType = {
	title: string
	text: string
}

export const Skill: React.FC<SkillPropsType> = (props) => {
	return (
		<article className={s.skill}>
			<div className={s.icon}></div>
			<h3 className={s.title + ' subtitle'}>{props.title}</h3>
			<p className={s.text}>{props.text}</p>
		</article>
	)
}