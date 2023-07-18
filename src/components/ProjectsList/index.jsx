import React from 'react'
import {Project} from "../Project";

export const ProjectsList = () => {

    const projects = [
        {
            name: 'Todo App',
            description: 'Simple Todo App',
            stack: 'React',
            gitUrl: 'https://github.com/karlitasg7/react-todo-app',
            projectUrl: 'https://karlasequen.com/todoapp/'
        },
        {
            name: 'Adventure Project',
            description: 'This project is a CRUD for employees using the database Adventure Works, including the API and Web application',
            stack: 'Java, Angular',
            gitUrl: 'https://github.com/karlitasg7/AdventureProject',
        },
        {
            name: 'Payments Project',
            description: 'This project is a test using microservices, implementing Eureka Server, Config Server, API Gateway, Docker.',
            stack: 'Java, Spring',
            gitUrl: 'https://github.com/karlitasg7/PaymentsProject',
        },
        {
            name: 'Advent Of Code',
            description: 'This project is my solutions to Advent Of Code and Advent Of Code JS',
            stack: 'Java, JavaScript',
            gitUrl: 'https://github.com/karlitasg7/AdventOfCode',
        },
        {
            name: 'My Portfolio with Python and Flask',
            description: 'This is a simple project using python and flask to make my portfolio',
            stack: 'Python, Flask',
            gitUrl: 'https://github.com/karlitasg7/my-portfolio',
        },
    ];

    return (
        <div className="max-w-2xl mx-auto px-4 py-20">
            <h2 className="text-3xl font-bold mb-4 text-left underline">My projects</h2>
            <p className="text-lg text-gray-600 mb-4">
                The next list are some personal projects to learn and practice
            </p>

            {projects.map((project, index) => (
                <Project key={index} project={project}/>
            ))}
        </div>
    )
}
