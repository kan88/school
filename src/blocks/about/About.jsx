import React from 'react'
import Title from '../../ui/title/Title'
import styles from './about.module.scss'

export default function About() {
  return (
    <section className={styles.about}>
        <Title>О спектакле</Title>
        <p className={styles.about__description}>
            Удивительный и беззаботный школьный мир, полный приключений. Где скучное дежурство превращается в путешествие в космос, где ученик Вася рассказывает страшные рассказы, и где надо сбежать от медсестры, которая внезапно пришла делать прививку для всего класса...
            Смешные, яркие, захватывающие истории! А порой и поучительные. 
            Помогающие поверить в настоящую дружбу, преодолеть  страх и с юмором встречать любое препятствие.
        </p>
    </section>
  )
}
