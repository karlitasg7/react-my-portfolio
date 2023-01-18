import React from 'react'
import styles from "./styles.module.css"

export const Menu = () => {
    return (
        <nav className={styles["navbar"]}>
            <ul className={styles["nav-links"]}>
                <div className={styles["menu"]}>
                    <li><a href="/">About</a></li>
                    <li><a href="/">My Experience</a></li>
                    <li><a href="/">Education</a></li>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/">Contact Me</a></li>
                </div>
            </ul>
        </nav>
    )
}
