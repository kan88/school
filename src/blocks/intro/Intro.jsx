import React from 'react'
import styles from './intro.module.scss'
import Button from '../../ui/button/Button'

export default function Intro() {
  return (
    <section className={styles.intro}>
        <h1 className={styles.intro__title}>Школьные <br/> истории</h1>
        <Button/>
    </section>
  )
}
