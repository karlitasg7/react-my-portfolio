import React from 'react'

export const Project = ({project}) => {
    const {name, description, stack, gitUrl, projectUrl} = project;

    return (
        <div className="bg-white shadow p-4 rounded mb-4">
            <h2 className="text-lg font-bold mb-2">{name}</h2>
            <p className="text-gray-600 mb-2">{description}</p>
            <p className="mb-2">
                <strong>Stack Utilizado:</strong> {stack}
            </p>

            {gitUrl && (
                <p className="mb-2">
                    <strong>Source Code:</strong>{' '}
                    <a
                        href={gitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        {gitUrl}
                    </a>
                </p>
            )}

            {projectUrl && (
                <p className="mb-2">
                    <strong>URL:</strong>{' '}
                    <a
                        href={projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        {projectUrl}
                    </a>
                </p>
            )}
        </div>
    )
}
