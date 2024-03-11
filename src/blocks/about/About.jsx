import React from 'react'
import Title from '../../ui/title/Title'
import styles from './about.module.scss'

export default function About() {
  return (
    <section id="about" className={styles.about}>
        <Title>О спектакле</Title>
        <p className={styles.about__description}>
          Удивительный и беззаботный школьный мир, полный приключений. Где скучное дежурство превращается в путешествие в космос, 
          где новый ученик Петя оказывается зазнайкой, которого не собирается терпеть 
          весь класс и где дети решают, что им ближе по душе первобытный образ жизни 
          вместо учебы... <br/>
          Смешные, яркие, захватывающие истории! А порой и поучительные.
          Помогающие поверить в настоящую дружбу, преодолеть  страх и с юмором встречать любое препятствие.    
        </p>
</section>
  )
}
