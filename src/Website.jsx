import React, { useState } from 'react'
import Contact from './Contact';
import Footer from './Footer';
import Navbar from './Navbar';

const Website = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    return (

        <div className="min-h-screen bg-gray-100">


            {/* MODAL */}
            {
                showModal && (

                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-5">

                        {/* Modal Box */}
                        <div className="bg-white rounded-3xl p-10 max-w-md w-full text-center shadow-2xl">

                            {/* Icon */}
                            <div className="text-6xl mb-5">
                                🚀
                            </div>

                            {/* Title */}
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">
                                Coming Soon
                            </h2>

                            {/* Line */}
                            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6"></div>

                            {/* Description */}
                            <p className="text-gray-500 mb-8 text-lg">
                                We are working on something amazing.
                                Stay tuned for updates!
                            </p>

                            {/* Button */}
                            <button
                                onClick={() => setShowModal(false)}
                                className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-300 cursor-pointer"
                            >
                                Close
                            </button>

                        </div>

                    </div>

                )
            }

            {/* NAVBAR */}
            <Navbar />

            {/* HERO SECTION */}
            <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-16 gap-10">

                {/* LEFT */}
                <div className="flex-1 text-center md:text-left">

                    <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">

                        Build Modern Websites with

                        <span className="text-blue-600">
                            {" "}React & Tailwind CSS
                        </span>

                    </h1>

                    <p className="text-gray-500 mb-8 text-lg">

                        Learn how to create stunning responsive websites using modern frontend technologies.

                    </p>

                    <button onClick={() => setShowModal(true)} className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 cursor-pointer transition-all duration-300 shadow-lg hover:scale-105">

                        Get Started

                    </button>

                </div>

                {/* RIGHT */}
                <div className="flex-1">

                    <img
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                        alt="Hero"
                        className="w-full rounded-2xl shadow-2xl hover:scale-105 transition-all duration-500"
                    />

                </div>

            </section>

            {/* FEATURES */}
            <section className="px-6 md:px-16 py-16 bg-white">

                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-5xl font-bold text-center text-gray-800 ">
                        Our Features
                    </h2>

                    {/* Baseline */}
                    <div className="w-32 h-1 bg-linear-to-r from-blue-500 to-purple-600 rounded-full mt-3 mb-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* CARD 1 */}
                    <div className="bg-gray-100 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

                        <div className="text-5xl mb-5">
                            ⚡
                        </div>

                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            Fast Performance
                        </h3>

                        <p className="text-gray-500">
                            Optimized UI with modern frontend technologies and best practices.
                        </p>

                    </div>

                    {/* CARD 2 */}
                    <div className="bg-gray-100 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

                        <div className="text-5xl mb-5">
                            📱
                        </div>

                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            Responsive Design
                        </h3>

                        <p className="text-gray-500">
                            Works perfectly on mobile, tablet, and desktop devices.
                        </p>

                    </div>

                    {/* CARD 3 */}
                    <div className="bg-gray-100 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

                        <div className="text-5xl mb-5">
                            🎨
                        </div>

                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            Clean UI
                        </h3>

                        <p className="text-gray-500">
                            Beautiful modern interface with smooth user experience.
                        </p>

                    </div>

                </div>

            </section>



            {/* FOOTER */}
            <Footer />

        </div>
    )
}

export default Website