import React from 'react';
import ExperienceCompany from '../ExperienceCompany';

const experience = [
    {
        company: 'MEGAPACA, Guatemala',
        positions: [
            {
                title: 'Lead Software Engineer',
                startDate: 'January 2018',
                endDate: 'Present',
                totalTime: '12 Years',
                tasks: [
                    'Implement GitLab CI/CD, reducing by 90% the time required to publish new application changes from development to production, as well as reducing code conflicts that could occur between developers when integrating new code',
                    'Implement hexagonal architecture allowing the source code to be more readable, scalable and testable, making it easier for developers to make new changes to understand the code and be able to test it',
                    'Integrate the point of sale system with different suppliers and payment methods, reducing manual processes and increasing sales by 15%.',
                    'Perform code reviews, to guide Junior programmers on how to improve their code.'
                ],
                stack: 'Java 8, Java 11, Kotlin, Angular JS, Angular 2+, Spring Boot, Hibernate, JPA, PostgreSQL, SQL Server, GitLab'
            },
            {
                title: 'Senior Programming Analyst',
                startDate: 'January 2015',
                endDate: 'January 2018',
                totalTime: '3 Years',
                tasks: [
                    'Participated in the development and implementation of purchasing management systems and budget control, reducing by 90% the processes that were carried out manually.',
                    'Reduced the number of errors by implementing docker.',
                    'Reduced by 95% the time users took to enter documents into the ERP (SAP Business One), integrating the company\'s systems to the ERP so that the information would be sent automatically.',
                ],
                stack: 'Java 8, Java 11 Kotlin, Spring Boot, Hibernate, JPA, Vb.net, C#, Angular 2+, SAP DI API, SAP DI Server'
            },
            {
                title: 'Junior Programmer',
                startDate: 'October 2010',
                endDate: 'January 2015',
                totalTime: '4 Years 4 Months',
                tasks: [
                    'Developed the WMS system, improving by 70% the processes to control the entry and exit of merchandise in the warehouse.',
                    'Made reports using Jasper Reports and Crystal Reports to reduce by 80% the time it took for users to generate reports manually.',
                    'Reduced the number of manual processes developing the point of sale system.',
                ],
                stack: 'VB.Net, C#, Java 8, Angular JS, HTML, CSS, Jasper Reports, Crystal Reports'
            },
        ]
    },
    {
        company: 'Gubiz, Guatemala',
        positions: [
            {
                title: 'Junior Software Developer',
                startDate: 'February 2008',
                endDate: 'July 2010',
                totalTime: '2 Years 5 Months',
                tasks: [
                    'Developed desktop applications and  SOAP Web Services using .Net and Delphi for the applications that were used to manage the company\'s online store.'
                ],
                stack: 'Delphi,C#,Vb.net'
            },
        ]
    },
];

const ExperienceList = () => {
    return (
        <div className="max-w-2xl mx-auto px-4 py-20">
            <h2 className="text-3xl font-bold mb-4 text-left underline">My Experience</h2>

            {experience.map((company, index) => (
                <ExperienceCompany key={index} company={company}/>
            ))}
        </div>
    );
};

export default ExperienceList;
