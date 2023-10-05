import React from 'react'

export const About = () => {
    return (
        <div className="container mx-auto px-4 py-8 mt-16">
            <div className="flex items-center justify-center lg:justify-start">
                <div className="w-full lg:w-2/3 flex items-center">
                    <div className="mr-8">
                        <h2 className="text-3xl font-bold mb-4 text-left underline">About me</h2>
                        <p className="text-gray-700 mb-4">
                            I'm a Software Engineer with 12+ years of experience developing web
                            application with AngularJS, Angular 2+ and React.
                            I have experience develop in the backend API's Rest
                            with
                            Java8+, Kotlin, using Spring Boot with Hibernate, .Net and using PostgreSQL
                            and SQL Server as a database. (I also used MySQL and MongoDB but only in my
                            local machine to test it) </p>
                        <p className="text-gray-700 mb-4">
                            I consider myself a self-taught person, I love learning and trying new
                            technologies and
                            I am a person who likes to learn something new every day,
                        </p>
                        <p className="text-gray-700 mb-4">
                            I really enjoy solving problems through technology.
                        </p>
                        <p className="text-gray-700 mb-4">
                            If you like my profile and you want to know more about me, please contact me to
                            <span className="text-blue-500 cursor-pointer hover:underline"> <a
                                href="mailto:hi@karlasequen.com?subject=contact">hi@karlasequen.com</a>
                            </span>
                        </p>
                        <p className="text-gray-700 mb-4">
                            <a
                                href={'/assets/certificates/CVKarlaSequen.pdf'}
                                className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
                                download
                            >
                                Download my CV
                            </a>
                        </p>
                    </div>
                    <div className="rounded-full overflow-hidden mx-auto lg:ml-auto">
                        <img
                            src={'/assets/images/profil.jpg'}
                            alt="Imagen"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
