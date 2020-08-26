import React, { memo, useState, useEffect } from 'react'
import { compose } from 'redux'

import styles from './Card.module.scss'


const Card = ({contains, portionsPerPack, gift, size, tagline, quantity, ...props}) => {
    const [checked, setChecked] = useState(false)
    const [description, setDescription] = useState(`Сказочное заморское яство`)
    const [isCheckAndFicus, setIsCheckAndFicus] = useState(false)


    useEffect(() => {
        if(checked) {
            setDescription(`Котэ не одобряет?`)
            setIsCheckAndFicus(true)
        } else {
            setDescription(`Сказочное заморское яство`)
            setIsCheckAndFicus(false)
        }
    }, [checked])

    
    let giftText
    if(gift === 1) {
        giftText = `мышь в подарок`
    } else if(gift > 1 && gift < 5) {
        giftText = `${gift} мыши в подарок`
    } else {
        giftText = `${gift} мышей в подарок`
    }


    const handleFocus = () => {
        if(checked) {
            setDescription(`Котэ не одобряет?`)
            setIsCheckAndFicus(true)
        }
    }
    const handleBlur = () => {
        setIsCheckAndFicus(false)
        if(description === `Котэ не одобряет?`) {
            setDescription(`Сказочное заморское яство`)
        }
    }
    const handleChange = () => {
        setChecked(!checked)
    }


    return (
        <li className={`${styles.Card} ${props.className} ${!quantity ? `disabled ${styles.disabled}` : ``} ${checked ? `selected` : ``}`}>
            <label className={`${styles.body} ${isCheckAndFicus ? `${styles.focus}` : ``}`} onMouseOver={handleFocus} onMouseOut={handleBlur}>
                <div className={styles.top}>
                    <span className={styles.corner}></span>
                    <span className={styles.description}>{description}</span>
                </div>
                <div className={styles.main}>
                    <h3 className={styles.title}>Нямушка</h3>
                    <p className={styles.feature}>{`c ${contains}`}</p>
                    <div className={styles.gift}>
                        <p>{`${portionsPerPack} порций`}</p> 
                        {`${giftText}`}
                    </div>
                    <img className={styles.logoImg} src={require('../../assets/img/funbox_cat-logo.png')} alt={`cat with logo`}/>
                    <div className={styles.size}>{`${size}`}
                        <p className={styles.measure}>кг</p>
                    </div>
                </div>
                <input 
                    className={`visually-hidden`}
                    type={`checkbox`}
                    placeholder={`нямушка с ${contains}`}
                    disabled={!quantity}
                    checked={checked}
                    onChange={handleChange}
                />
            </label>
            <p className={styles.footer}>
                {quantity 
                    ?checked 
                        ?<>
                            {`${tagline}`}
                        </>
                        :<>
                            {`Чего сидишь? Порадуй котэ, `}
                            <span className={styles.buy}>
                                <button className={styles.buyBtn} onClick={() => setChecked(true)}>
                                    купи
                                </button>
                                .
                            </span>
                        </>
                    :<>
                        {`Печалька, с ${contains} закончился.`}
                    </>
                }
            </p>
        </li>
    )
}


const Container = compose(
    memo
)(Card)

export {Container as Card}