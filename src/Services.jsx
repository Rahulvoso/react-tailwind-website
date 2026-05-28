import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Services = () => {

    return (

        <div className="min-h-screen bg-gray-100">

            {/* NAVBAR */}
            <Navbar />

            {/* HERO SECTION */}
            <section className="py-16 px-6 md:px-16 text-center">

                <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
                    Our Services
                </h1>

                {/* BASE LINE */}
                <div className="w-32 h-1 bg-linear-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6"></div>

                <p className="text-gray-500 max-w-2xl mx-auto">
                    We provide modern web development solutions using React and Tailwind CSS.
                </p>

            </section>

            {/* SERVICES CARDS */}
            <section className="px-6 md:px-16 pb-16">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* CARD 1 */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

                        <div className="text-5xl mb-5">
                            💻
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Web Development
                        </h2>

                        <p className="text-gray-500">
                            Build fast and modern responsive websites using latest frontend technologies.
                        </p>

                    </div>

                    {/* CARD 2 */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

                        <div className="text-5xl mb-5">
                            📱
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Responsive Design
                        </h2>

                        <p className="text-gray-500">
                            Mobile-friendly layouts that work perfectly on all devices.
                        </p>

                    </div>

                    {/* CARD 3 */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

                        <div className="text-5xl mb-5">
                            🚀
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Performance Optimization
                        </h2>

                        <p className="text-gray-500">
                            Optimized websites with better speed and smooth user experience.
                        </p>

                    </div>

                </div>

            </section>

            {/* FOOTER */}
            <Footer />

        </div>

    )
}

export default Services