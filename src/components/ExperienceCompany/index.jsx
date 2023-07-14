import React from 'react';
import ExperiencePosition from '../ExperiencePosition';

const ExperienceCompany = ({company}) => {
    const {company: companyName, positions} = company;

    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{companyName}</h2>
            {positions.map((position, index) => (
                <ExperiencePosition key={index} position={position}/>
            ))}
        </div>
    );
};

export default ExperienceCompany;
