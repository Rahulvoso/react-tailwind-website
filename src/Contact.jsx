import React, { useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    // HANDLE INPUT CHANGE
    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

    };

    // HANDLE SUBMIT
    const handleSubmit = (e) => {

        e.preventDefault();

        console.log("Contact Form Data:", formData);

        // RESET FORM
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });

    };

    return (

        <div className="min-h-screen bg-gray-100">

            {/* NAVBAR */}
            <Navbar />

            {/* HERO SECTION */}
            <section className="py-16 px-6 md:px-16 text-center">

                <h1 className="text-5xl font-bold text-gray-800 mb-5">
                    Contact Us
                </h1>

                {/* BASE LINE */}
                <div className="w-32 h-1 bg-linear-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6"></div>

                <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                    Have questions or want to work with us?
                    Fill out the form below and our team will contact you soon.
                </p>

            </section>

            {/* CONTACT SECTION */}
            <section className="px-6 md:px-16 pb-16">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* CONTACT FORM */}
                    <div className="order-1 md:order-2 bg-white p-8 md:p-10 rounded-3xl shadow-xl">

                        <h2 className="text-3xl font-bold text-gray-800 mb-8">
                            Contact Form Data
                        </h2>

                        <form
                            className="space-y-6"
                            onSubmit={handleSubmit}
                        >

                            {/* NAME */}
                            <div>

                                <label className="block mb-2 font-medium text-gray-700">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                                />

                            </div>

                            {/* EMAIL */}
                            <div>

                                <label className="block mb-2 font-medium text-gray-700">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                                />

                            </div>

                            {/* SUBJECT */}
                            <div>

                                <label className="block mb-2 font-medium text-gray-700">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Enter subject"
                                    className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                                />

                            </div>

                            {/* MESSAGE */}
                            <div>

                                <label className="block mb-2 font-medium text-gray-700">
                                    Message
                                </label>

                                <textarea
                                    rows="5"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message..."
                                    className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                ></textarea>

                            </div>

                            {/* BUTTON */}
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 font-semibold cursor-pointer hover:scale-105"
                            >
                                Send Message
                            </button>

                        </form>

                    </div>

                    {/* CONTACT INFO */}
                    <div className="order-2 md:order-1 bg-white p-8 md:p-10 rounded-3xl shadow-xl">

                        <h2 className="text-3xl font-bold text-gray-800 mb-8">
                            Get In Touch
                        </h2>

                        <div className="space-y-8">

                            {/* EMAIL */}
                            <div className="flex items-start gap-4">

                                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-2xl shadow-md">
                                    📧
                                </div>

                                <div>

                                    <h3 className="font-bold text-gray-800 text-lg">
                                        Email
                                    </h3>

                                    <p className="text-gray-500">
                                        support@mywebsite.com
                                    </p>

                                </div>

                            </div>

                            {/* PHONE */}
                            <div className="flex items-start gap-4">

                                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-2xl shadow-md">
                                    📞
                                </div>

                                <div>

                                    <h3 className="font-bold text-gray-800 text-lg">
                                        Phone
                                    </h3>

                                    <p className="text-gray-500">
                                        +91 9876543210
                                    </p>

                                </div>

                            </div>

                            {/* LOCATION */}
                            <div className="flex items-start gap-4">

                                <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center text-2xl shadow-md">
                                    📍
                                </div>

                                <div>

                                    <h3 className="font-bold text-gray-800 text-lg">
                                        Location
                                    </h3>

                                    <p className="text-gray-500">
                                        India
                                    </p>

                                </div>

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

export default Contact