import React from 'react'
import styles from "./styles.module.css"

export const About = () => {
    return (
        <section className={styles["about-section"]}>
            <div className={styles["about-description"]}>

                <h1>About me</h1>
                <p>I'm a Software Engineer with 12+ years of experience developing web
                    application with
                    AngularJS and Angular 2+. I have experience develop in the backend API's Rest
                    with
                    Java8+, Kotlin, using Spring Boot with Hibernate, and using PostgreSQL
                    and SQL Server as a database. (I also used MySQL and MongoDB but only in my
                    local machine to test it) </p>
                <p>I consider myself a self-taught person, I love learning and trying new
                    technologies and
                    I am a person who likes to learn something new every day,
                </p>
                <p>I love to solve real life problems using technology</p>
                <p>
                    If you like my profile and you want to know more about me, please contact me to
                    <span className={styles["about-description-email"]}> hi@karlasequen.com</span>
                </p>
            </div>
            <div className={styles["about-image"]}>
                <img src={'/assets/images/profil.jpg'} className="img-responsive" alt=""/>
            </div>
        </section>
    )
}
