import React, { memo } from 'react'
import { compose } from 'redux'

import styles from './App.module.scss'


const App = ({ ...props }) => {
	return (
		<>
			<header>
				<h1 className={`visually-hidden`}>cats food</h1>
			</header>
			<main className={`${styles.app}`}>
				
			</main>
		</>
	)
}


export default compose(
	memo
)(App)