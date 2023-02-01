import React from 'react'
import styles from "./styles.module.css"

export const Menu = ({selectedOption, setSelectedOption}) => {
    return (
        <nav className={styles["navbar"]}>
            <ul className={styles["nav-links"]}>
                <div className={styles["menu"]}>
                    <li onClick={() => setSelectedOption('about')}>About</li>
                    <li onClick={() => setSelectedOption('experience')}>My Experience</li>
                    <li onClick={() => setSelectedOption('education')}>Education</li>
                    <li onClick={() => setSelectedOption('projects')}>Projects</li>
                    <li onClick={() => setSelectedOption('contact')}>Contact Me</li>
                </div>
            </ul>
        </nav>
    )
}
