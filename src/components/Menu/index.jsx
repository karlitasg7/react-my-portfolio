import React from 'react'
import styles from "./styles.module.css"

export const Menu = () => {
    return (
        <nav className={styles["menu-section"]}>
            <a href="">About</a>
            <a href="">Experience</a>
            <a href="">Education</a>
            <a href="">Projects</a>
            <a href="">Contact Me</a>
        </nav>
    )
}
