import React, { memo } from 'react'
import { compose } from 'redux'
import { useSelector } from 'react-redux'

import { Card } from '../Card/Card'
import styles from './ProductPage.module.scss'


const ProductPage = ({ ...props }) => {
    const { catFoodList } = useSelector((state) => state.app)


    return (
        <section className={styles.ProductPage}>
            <h2 className={`visually-hidden`}>Каталог корма для кошек</h2>
            <p className={styles.lead}>Ты сегодня покормил кота?</p>
            <ul className={`${styles.productList}`}>
                {catFoodList.map((item) => <Card className={styles.item} key={item.id} {...item} />)}
            </ul>
        </section>
    )
}


const Container = compose(
    memo
)(ProductPage)

export { Container as ProductPage }