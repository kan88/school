import React from 'react'
import styles from './intro.module.scss'
import Button from '../../ui/button/Button'
import video from '../../assets/video/1.mp4'

export default function Intro() {
  return (
    <section className={styles.intro}>
      <video className={styles.intro__video} autoplay muted loop  controls="controls">
        <source src={video} type="video/mp4" />
      </video>
      <div className={styles.intro__content}>
        <h1 className={styles.intro__title}>Школьные <br/> истории</h1>
        <Button/>
      </div>

    </section>
  )
}
