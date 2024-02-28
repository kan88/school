import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import styles from './header.module.scss'
import menu from '../../assets/images/menu.svg'
import close from '../../assets/images/close.svg'

export default function Header() {
  return (
    <header className={styles.header}>      
        <Menu right customCrossIcon={ <img src={close} alt='close' /> }  customBurgerIcon={ <img src={menu} alt='open'/> }>
            <a id="home" className={styles.header__link} href="/">О спектакле</a>
            <a id="about" className={styles.header__link} href="/about">Афиша</a>
            <a id="contact" className={styles.header__link} href="/contact">Контакты</a>
        </Menu>
    </header>
  )
}
