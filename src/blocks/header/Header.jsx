import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import styles from './header.module.scss'
import menu from '../../assets/images/menu.svg'
import close from '../../assets/images/close.svg'

export default function Header() {
  return (
    <header className={styles.header}>      
        <Menu right customCrossIcon={ <img src={close} alt='close' /> }  customBurgerIcon={ <img src={menu} alt='open'/> }>
            <a  className={styles.header__link} href="#about">О спектакле</a>
            <a  className={styles.header__link} href="#billboard">Афиша</a>
            <a  className={styles.header__link} href="#contacts">Контакты</a>
        </Menu>
    </header>
  )
}
