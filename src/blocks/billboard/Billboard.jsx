import React from 'react'
import Title from '../../ui/title/Title'
import styles from './billboard.module.scss'
import Button from '../../ui/button/Button'

export default function Billboard() {
  return (
    <section className={styles.billboard}>
        <Title>Афиша</Title>
        <div className={styles.billboard__wrapper}>
          <span className={styles.billboard__date}>14 апреля 2024 г.</span>
          <span className={styles.billboard__date}>15 : 00</span>
          <Button/>
        </div>
    </section>
  )
}
