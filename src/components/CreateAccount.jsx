/*eslint-disable */
import React, { useState } from "react";

function CreateAccount() {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {/* Main Container */}
      <div className="px-8 md:px-16 lg:px-44 py-10 bg-white text-black space-y-10 -z-20">
        {/* Header Section */}
        <div className="space-y-4">
          <h1 className="lightHeading text-3xl md:text-5xl uppercase w-full lg:w-1/3">
            Create an Account
          </h1>
          <p>
            Your personal account enables you to check your watches in and
            benefit from additional exclusive features.
          </p>
          <p className="bg-slate-400 p-2">
            Already have an account?
            <a href="/login" className="underline m-2 hover:text-slate-600">
              Log in
            </a>
          </p>
        </div>

        {/* Personal Details Section */}
        <div className="space-y-6">
          <h1 className="text-lg tracking-wider font-semibold">
            Your Personal Details
          </h1>
          <div className="flex flex-wrap gap-6 w-full">
            {/* Salutation */}
            <div className="flex flex-col w-full md:w-1/3">
              <label htmlFor="sal" className="font-medium mb-1">
                Salutation
              </label>
              <select
                id="sal"
                className="border-b-2 border-gray-300 px-3 py-2 focus:ring focus:ring-blue-300"
              >
                <option>Mr</option>
                <option>Mrs</option>
                <option>Ms</option>
              </select>
            </div>

            {/* First Name */}
            <div className="flex flex-col w-full md:w-1/3">
              <label htmlFor="fname" className="font-medium mb-1">
                First Name
              </label>
              <input
                id="fname"
                className="border-b-2 border-gray-300 px-3 py-2 focus:ring focus:ring-blue-300"
                placeholder="Enter your first name"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col w-full md:w-1/3">
              <label htmlFor="lname" className="font-medium mb-1">
                Last Name
              </label>
              <input
                id="lname"
                className="border-b-2 border-gray-300 px-3 py-2 focus:ring focus:ring-blue-300"
                placeholder="Enter your last name"
              />
            </div>
          </div>
        </div>

        {/* Login Section */}
        <div className="space-y-8">
          {/* Email and Location */}
          <div className="flex flex-wrap gap-6">
            <div className="flex flex-col w-full lg:w-1/2">
              <label htmlFor="email" className="font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                className="border-b-2 border-gray-300 px-3 py-2 focus:ring focus:ring-blue-300"
                placeholder="Enter your email address"
              />
            </div>
            <div className="flex flex-col w-full lg:w-1/2">
              <label htmlFor="country" className="font-medium mb-1">
                Your Location
              </label>
              <input
                id="country"
                className="border-b-2 border-gray-300 px-3 py-2 focus:ring focus:ring-blue-300"
                placeholder="Select a country or region"
              />
            </div>
          </div>

          {/* Password Section */}
          <div className="flex flex-wrap gap-6">
            <div className="flex flex-col w-full lg:w-1/2 relative">
              <label htmlFor="create-p" className="font-medium mb-1">
                Create a Password
              </label>
              <input
                id="create-p"
                className="border-b-2 border-gray-300 px-3 py-2 focus:ring focus:ring-blue-300"
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"}
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute right-3 top-9 text-gray-600 hover:text-black"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <div className="flex flex-col w-full lg:w-1/2 relative">
              <label htmlFor="confirm-p" className="font-medium mb-1">
                Confirm Password
              </label>
              <input
                id="confirm-p"
                type="password"
                className="border-b-2 border-gray-300 px-3 py-2 focus:ring focus:ring-blue-300"
                placeholder="Confirm your password"
              />
            </div>
          </div>
        </div>

        {/* Consent Section */}
        <div className="space-y-4">
          <p className="font-light">
            I acknowledge that my personal data will be processed in accordance
            with the Hublot Privacy Notice.
          </p>
          <div className="flex justify-start items-start space-x-2">
            <input
              type="checkbox"
              id="consent"
              className="w-5 h-5 border-gray-300 rounded focus:ring focus:ring-blue-300"
            />
            <label htmlFor="consent" className="text-sm font-semibold">
              I wish to receive the latest news on Hublot brand, products and
              upcoming events tailored to my interests, by email or via post,
              telephone or any other channel I might provide Hublot with and I
              accept that my personal information will be processed for this
              purpose in compliance with Hublot
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button className="bg-black text-white w-full md:w-3/4 lg:w-1/2 py-3 rounded-md hover:bg-gray-800">
            Create an Account
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateAccount;
