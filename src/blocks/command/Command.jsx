import React from 'react'
import styles from './command.module.scss'

export default function Command({image, title, artists}) {
  return (
    <li className={styles.command}>
        <h3 className={styles.command__title}>{title}</h3>
        <div className={styles.command__wrapper}>
            <ul className={styles.command__list}>
                {artists.map((artist) => <li className={styles.command__item}>{artist}</li>)}
            </ul>
            <img alt='icon' src={image} className={styles.command__image}></img>
        </div>
    </li>
  )
}
