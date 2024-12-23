/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="bg-white bg-opacity-100 text-black p-5 lg:px-20 flex flex-col lg:flex-row space-y-10 lg:space-y-0 -z-20">
      {/* Login Section */}
      <div className="flex flex-col space-y-6 p-5 lg:p-10 lg:pr-32 w-full lg:w-1/2">
        <h1 className="lightHeading text-3xl lg:text-4xl">LOG IN</h1>

        {/* Email Input */}
        <div className="flex flex-col">
          <label htmlFor="email" className="font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            className="border-gray-300 bg-white border-b-2 px-3 py-2 focus:ring focus:ring-blue-300"
            placeholder="Enter your email address"
            type="email"
          />
        </div>

        {/* Password Input */}
        <div className="flex flex-col">
          <label htmlFor="password" className="font-medium mb-2">
            Password
          </label>
          <input
            id="password"
            className="border-gray-300 bg-white border-b-2 px-3 py-2 focus:ring focus:ring-blue-300"
            placeholder="Enter your password"
            type="password"
          />
        </div>

        {/* Forgot Password Link */}
        <a
          href="#"
          className="hover:underline text-sm"
        >
          Forgot your password?
        </a>

        {/* Login Button */}
        <button className="bg-black text-white w-full lg:w-1/2 py-2 rounded-sm hover:bg-gray-800">
          Login
        </button>
      </div>

      {/* Create Account Section */}
      <div className="flex flex-col space-y-6 p-5 lg:p-10 lg:pr-32 w-full lg:w-1/2">
        <h1 className="lightHeading text-4xl lg:text-6xl uppercase">
          Create an Account
        </h1>
        <p className="text-gray-700 font-light">
          Your personal account enables you to check your watches in and benefit
          from additional exclusive features.
        </p>
        <Link to="/signin">
          <button className="bg-black text-white w-full lg:w-2/3 py-2 rounded-sm hover:bg-gray-800">
            Create an Account
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
