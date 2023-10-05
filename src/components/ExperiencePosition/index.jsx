import React from 'react';

const ExperiencePosition = ({position}) => {
    const {title, startDate, endDate, tasks, totalTime, stack} = position;

    return (
        <div className="bg-white shadow p-4 rounded mb-4">
            <h3 className="text-lg font-bold mb-2">{title} ({totalTime})</h3>
            <p className="mb-2">
                <strong>Start Date:</strong> {startDate}
            </p>
            <p className="mb-2">
                <strong>End Date:</strong> {endDate}
            </p>
            <p className="mb-2">
                <strong>Stack:</strong> {stack}
            </p>

            {tasks.length > 0 && (
                <>
                    <p className="mb-2">
                        <strong>Tasks:</strong>
                    </p>
                    <ul className="list-disc ml-6">
                        {tasks.map((task, index) => (
                            <li key={index}>{task}</li>
                        ))}
                    </ul>
                </>
            )}

        </div>
    );
};

export default ExperiencePosition;
