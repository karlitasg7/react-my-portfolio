import React from 'react'
import styles from "./styles.module.css"

export const Certification = ({title, school, date, link, credential}) => {
    return (
        <section className={styles["certification-section"]}>

            <h3>{title}</h3>
            <p>{school}</p>
            <p>{date}</p>

            {credential && (
                <p>Credential ID {credential}</p>
            )}

            {link && (
                <a href={link} target="_blank">View</a>
            )}

        </section>
    )
}
