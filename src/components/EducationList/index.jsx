import React from 'react'
import {Certification} from "../Certification";

export const EducationList = () => {
    const education = [
        {
            type: '',
            items: [
                {
                    name: 'Engineer’s degree, Information Technology',
                    institution: 'Universidad Mariano Galvez de Guatemala',
                    date: 'April 2014',
                },
            ]
        },
        {
            type: 'Certifications',
            items: [
                {
                    name: 'AZ 900, Azure Fundamentals',
                    institution: 'Microsoft',
                    date: '2022',
                    link: 'https://www.credly.com/badges/4966805b-47f0-419a-b067-dede229c43ac'
                },
                {
                    name: 'Scrum Foundation',
                    institution: 'CertiProf',
                    date: '2022',
                    credential: '73756906',
                    link: 'https://www.credly.com/badges/7cf597be-800e-45fe-b61a-896c30e9adf9'
                },
                {
                    name: 'Full Stack Observability Practitioner Exam',
                    institution: 'New Relic, Inc.',
                    date: '2022',
                    credential: '53502376',
                    link: 'https://www.credential.net/94ccd70d-b035-4fbe-8fd2-1cd4af64873e'
                },
            ]
        },
        {
            type: 'Courses',
            items: [
                {
                    name: 'Data Structures + Algorithms',
                    platform: 'Zero To Mastery in Udemy"',
                    date: 'July 2022',
                    credential: 'UC-28ce59e9-1179-4af3-876b-57f44bacf25d',
                    link: 'https://www.udemy.com/certificate/UC-28ce59e9-1179-4af3-876b-57f44bacf25d'
                },
                {
                    name: 'Automation con Selenium y Java',
                    platform: 'Cool Testers"',
                    date: 'April 2021',
                    credential: '2104SESAMR07',
                    link: '/assets/certificates/CoolTesters_AutomationSeleniumJava.pdf'
                },
            ]
        }
    ];

    return (
        <div className="max-w-2xl mx-auto px-4 py-20">
            <h2 className="text-3xl font-bold mb-4 text-left underline">My Education</h2>

            {education.map((category, index) => (
                <div key={index} className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">{category.type}</h2>
                    {category.items.map((item, index) => (
                        <Certification key={index} item={item}/>
                    ))}
                </div>
            ))}
        </div>
    )
}
