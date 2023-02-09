import React from 'react';
import s from './Header.module.css'
import {Nav} from '../nav/Nav';

export const Header = () => {
	return (
		<header className={s.header}>
			<div className="container">
				<Nav></Nav>
			</div>
		</header>
	)
}