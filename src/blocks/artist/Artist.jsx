import React from 'react'
import Title from '../../ui/title/Title'
import styles from './artist.module.scss'
import { COMMANDS } from '../../const'
import Command from '../command/Command'

export default function Artist() {
  return (
    <section className={styles.artist}>
        <Title>В спектакле играют</Title>
        <ul className={styles.artist__list}>
          {COMMANDS.map((command) => <Command key={command.title} {...command}></Command>)}
        </ul>
    </section>
  )
}
