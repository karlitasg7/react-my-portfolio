import React from 'react'

export const Menu = ({selectedOption, setSelectedOption}) => {
    return (
        <nav className="bg-blue-500 fixed top-0 left-0 right-0 z-10">
            <div className="container mx-auto px-4 py-2 flex items-center justify-between">
                <div className="text-white font-bold text-xl"></div>
                <ul className="flex space-x-4">

                    <li className="text-white hover:text-blue-200 cursor-pointer"
                        onClick={() => setSelectedOption('about')}>About
                    </li>
                    <li className="text-white hover:text-blue-200 cursor-pointer"
                        onClick={() => setSelectedOption('projects')}>Projects
                    </li>
                    <li className="text-white hover:text-blue-200 cursor-pointer"
                        onClick={() => setSelectedOption('experience')}>Experience
                    </li>
                    <li className="text-white hover:text-blue-200 cursor-pointer"
                        onClick={() => setSelectedOption('education')}>Education
                    </li>
                    <li className="text-white hover:text-blue-200 cursor-pointer"
                        onClick={() => setSelectedOption('contact')}>Contact Me
                    </li>
                </ul>
            </div>
        </nav>
    )
}
