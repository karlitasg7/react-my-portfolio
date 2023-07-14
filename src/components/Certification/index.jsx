import React from 'react'

export const Certification = ({item}) => {
    const {name, institution, year, link, credential} = item;

    return (
        <div className="bg-white shadow p-4 rounded mb-4">
            <h3 className="text-lg font-bold mb-2">{name}</h3>
            <p className="text-gray-600 mb-2">
                <strong></strong> {institution}
            </p>
            <p className="mb-2">
                <strong>Año:</strong> {year}
            </p>
            {credential && (
                <p className="mb-2">
                    Credential ID {credential}
                </p>
            )}
            {link && (
                <p className="mb-2">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        View
                    </a>
                </p>
            )}
        </div>

    )
}
