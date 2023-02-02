import React from 'react'
import styles from "./styles.module.css"

export const Certification = ({title, school, date, link, credential}) => {
    return (
        <section className={styles["certification-section"]}>

            <h3>{title}</h3>
            <span>{school}</span>
            <span>{date}</span>

            {credential && (
                <span>{credential}</span>
            )}

            <span>{link}</span>

        </section>
    )
}
