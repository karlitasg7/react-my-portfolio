import React from 'react'
import styles from "./styles.module.css"

export const Project = ({name, url, stack, description, git}) => {
    return (
        <section className={styles["project-section"]}>

            <h2>{name}</h2>
            <p>{description}</p>

            {url && (
                <p>URL: <a href={url} target="_blank" rel="noreferrer">{url} </a></p>
            )}

            <p>Stack: {stack}</p>

            <p>Source Code: <a href={git} target="_blank" rel="noreferrer">{git}</a></p>

        </section>
    )
}
