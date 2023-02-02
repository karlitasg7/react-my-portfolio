import React from 'react'
import styles from "./styles.module.css"
import {Certification} from "../Certification";

export const EducationList = () => {
    return (
        <section className={styles["education-section"]}>

            <h1>My Education</h1>
            <p>Engineer’s degree, Information Technology</p>
            <p>Universidad Mariano Galvez de Guatemala, April 2013.</p>

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
                credential="Credential ID 73756906"
                link="https://www.credly.com/badges/7cf597be-800e-45fe-b61a-896c30e9adf9"
            />

            <Certification
                title="Full Stack Observability Practitioner Exam"
                school="New Relic, Inc."
                date="2022"
                credential="Credential ID 53502376"
                link="https://www.credential.net/94ccd70d-b035-4fbe-8fd2-1cd4af64873e"
            />

            Courses
        </section>
    )
}
