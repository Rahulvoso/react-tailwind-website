import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const About = () => {

    return (

        <div className="min-h-screen bg-gray-100">

            {/* NAVBAR */}
            <Navbar />

            {/* HERO SECTION */}
            <section className="py-16 px-6 md:px-16 text-center">

                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    About Us
                </h1>

                {/* BASE LINE */}
                <div className="w-32 h-1 bg-linear-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6"></div>

                <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                    Learn more about our company, our mission,
                    and how we create modern web experiences.
                </p>

            </section>

            {/* ABOUT SECTION */}
            <section className="px-6 md:px-16 pb-16">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* LEFT IMAGE */}
                    <div>

                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                            alt="About"
                            className="w-full rounded-3xl shadow-2xl hover:scale-105 transition-all duration-500"
                        />

                    </div>

                    {/* RIGHT CONTENT */}
                    <div>

                        <h2 className="text-3xl font-bold text-gray-800 mb-6">
                            We Build Modern Digital Solutions
                        </h2>

                        <p className="text-gray-500 mb-5 leading-8">
                            Our team specializes in creating beautiful,
                            responsive, and high-performance websites
                            using modern frontend technologies like React
                            and Tailwind CSS.
                        </p>

                        <p className="text-gray-500 mb-8 leading-8">
                            We focus on user experience, clean UI design,
                            scalability, and optimized performance to help
                            businesses grow online.
                        </p>

                        {/* STATS */}
                        <div className="grid grid-cols-2 gap-6">

                            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">

                                <h3 className="text-3xl font-bold text-blue-600 mb-2">
                                    50+
                                </h3>

                                <p className="text-gray-500">
                                    Projects
                                </p>

                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">

                                <h3 className="text-3xl font-bold text-purple-600 mb-2">
                                    100%
                                </h3>

                                <p className="text-gray-500">
                                    Client Satisfaction
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* FOOTER */}
            <Footer />

        </div>

    )
}

export default About