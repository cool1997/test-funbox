import React, { memo } from 'react'
import { compose } from 'redux'

import styles from './App.module.scss'
import { ProductPage } from '../component/ProductPage/ProductPage'


const App = ({ ...props }) => {
	return (
		<>
			<header>
				<h1 className={`visually-hidden`}>cats food</h1>
			</header>
			<main className={`${styles.app}`}>
				<ProductPage/>
			</main>
		</>
	)
}


export default compose(
	memo
)(App)