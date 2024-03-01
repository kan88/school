import React from 'react'
import styles from './intro.module.scss'
import Button from '../../ui/button/Button'
import intro from '../../assets/photos/intro.jpg'

export default function Intro() {
  return (
    <section className={styles.intro}>
      <img className={styles.intro__image} src={intro} alt="intro." />
      <div className={styles.intro__content}>
        <h1 className={styles.intro__title}>Школьные <br/> истории</h1>
        <Button/>
      </div>
    </section>
  )
}
