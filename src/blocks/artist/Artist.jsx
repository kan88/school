import React from 'react'
import styles from './artist.module.scss'

export default function Artist() {
  return (
    <section className={styles.artist}>
        <p>В спектакле играют 
дети из детской театральной студии 
“В ожидании чуда”</p>
<a className={styles.artist__link} href="https://chudo-teatr.ru">chudo-teatr.ru</a>
    </section>
  )
}
