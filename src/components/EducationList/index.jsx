import React from 'react'
import styles from "./styles.module.css"
import {Certification} from "../Certification";

export const EducationList = () => {
    return (
        <section className={styles["education-section"]}>

            <h1>My Education</h1>

            <Certification
                title="Engineer’s degree, Information Technology"
                school="Universidad Mariano Galvez de Guatemala"
                date="April 2013"
            />

            <h2>CERTIFICATIONS</h2>

            <Certification
                title="AZ 900, Azure Fundamentals"
                school="Microsoft"
                date="2022"
                link="https://www.credly.com/badges/4966805b-47f0-419a-b067-dede229c43ac"
            />

            <Certification
                title="Scrum Foundation"
                school="CertiProf"
                date="2022"
                credential="73756906"
                link="https://www.credly.com/badges/7cf597be-800e-45fe-b61a-896c30e9adf9"
            />

            <Certification
                title="Full Stack Observability Practitioner Exam"
                school="New Relic, Inc."
                date="2022"
                credential="53502376"
                link="https://www.credential.net/94ccd70d-b035-4fbe-8fd2-1cd4af64873e"
            />

            <h2>Courses</h2>

            <Certification
                title="Data Structures + Algorithms"
                school="Zero To Mastery in Udemy"
                date="July 2022"
                credential="UC-28ce59e9-1179-4af3-876b-57f44bacf25d"
                link="https://www.udemy.com/certificate/UC-28ce59e9-1179-4af3-876b-57f44bacf25d"
            />

            <Certification
                title="Automation con Selenium y Java"
                school="Cool Testers"
                date="April 2021"
                credential="2104SESAMR07"
                link={'/assets/certificates/CoolTesters_AutomationSeleniumJava.pdf'}
            />

        </section>
    )
}
