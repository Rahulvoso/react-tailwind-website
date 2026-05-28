import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>

            {/* NAVBAR */}
            <nav className="bg-white shadow-md sticky top-0 z-50">

                <div className="flex justify-between items-center px-6 py-4">

                    {/* LOGO */}
                    <div className="flex items-center gap-3 cursor-pointer">

                        <div className="w-12 h-12 rounded-xl bg-linear-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300">

                            <span className="text-white text-2xl">
                                <Link to="/">🚀</Link>
                            </span>

                        </div>

                        <h2 className="text-2xl font-bold text-gray-800">
                            My Website
                        </h2>

                    </div>

                    {/* DESKTOP MENU */}
                    <ul className="hidden md:flex gap-8 text-gray-700 font-medium">

                        <li className="hover:text-blue-500 cursor-pointer transition-all duration-300">
                            <Link to="/">
                                Home
                            </Link>
                        </li>

                        <li className="hover:text-blue-500 cursor-pointer transition-all duration-300">
                            <Link to="/">
                                About
                            </Link>
                        </li>

                        <li className="hover:text-blue-500 cursor-pointer transition-all duration-300">
                            <Link to="/">
                                Services
                            </Link>
                        </li>

                        <li className="hover:text-blue-500 cursor-pointer transition-all duration-300">
                            <Link to="/contact">
                                Contact
                            </Link>
                        </li>

                    </ul>

                    {/* MOBILE BUTTON */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
                    >
                        {isOpen ? "✖" : "☰"}
                    </button>

                </div>

                {/* MOBILE MENU */}
                {
                    isOpen && (

                        <div className="md:hidden px-6 pb-5 bg-white border-t">

                            <ul className="flex flex-col gap-4 text-gray-700 font-medium pt-4">

                                <li className="hover:text-blue-500 cursor-pointer">
                                    <Link to="/">Home</Link>
                                </li>

                                <li className="hover:text-blue-500 cursor-pointer">
                                    <Link to="/">About</Link>
                                </li>

                                <li className="hover:text-blue-500 cursor-pointer">
                                    <Link to="/">
                                        Services
                                    </Link>
                                </li>

                                <li className="hover:text-blue-500 cursor-pointer">
                                    <Link to="/contact">
                                        Contact
                                    </Link>
                                </li>

                            </ul>

                        </div>

                    )
                }

            </nav>
        </>
    )
}

export default Navbar
