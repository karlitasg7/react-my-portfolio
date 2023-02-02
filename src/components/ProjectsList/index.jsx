import React from 'react'
import styles from "./styles.module.css"
import {Project} from "../Project";

export const ProjectsList = () => {
    return (
        <section className={styles["projects-list-section"]}>
            <h1>The next list are some personal projects to learn and practice</h1>

            <Project
                name="Todo App"
                description="Simple Todo App"
                url="https://karlasequen.com/todoapp/"
                git="https://github.com/karlitasg7/react-todo-app"
                stack="React"
            />

            <Project
                name="Advent Of Code"
                description="This project is my solutions to Advent Of Code and Advent Of Code JS"
                git="https://github.com/karlitasg7/AdventOfCode"
                stack="Java, JavaScript"
            />

            <Project
                name="My Portfolio with Python and Flask"
                description="This is a simple project using python and flask to make my portfolio"
                git="https://github.com/karlitasg7/my-portfolio"
                stack="Python, Flask"
            />

        </section>
    )
}
