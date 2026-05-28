import React, { useState } from "react";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        remember: false
    });

    // handle input change
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    // handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User Data:", formData);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-5">
            {/* login card */}
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">
                {/* heading */}
                <h1 className="text-3xl font-bold text-center mb-2">Welcome Back</h1>
                <p className="text-center text-gray-500 mb-8">Please login to your account</p>
                {/* form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* email */}
                    <div>
                        <label className="block mb-2 font-medium">Email</label>
                        <input name="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" type="email" placeholder="Enter your email"></input>
                    </div>

                    {/* password */}
                    <div>
                        <label className="w-full mb-2 font-medium">Password</label>
                        <input name="password" value={formData.password} onChange={handleChange} className="w-full border border-gray-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" type="password" placeholder="Enter your password"></input>
                    </div>

                    {/* remember me and forgot password */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input name="remember" type="checkbox" checked={formData.remember} onChange={handleChange} className="form-checkbox h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"></input>
                            <label className="ml-2 block text-sm text-gray-700">Remember me</label>
                        </div>
                        <a href="#" className="text-sm text-blue-500 hover:underline">Forgot your password?</a>
                    </div>

                    {/* submit button */}
                    <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-xl font-medium hover:bg-blue-600 -all duration-300">Login</button>

                </form>

                <p className="text-center text-gray-500 mt-4">Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a></p>

            </div>
        </div>
    )
}

export default LoginForm
