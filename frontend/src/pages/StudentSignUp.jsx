import OnboardingNavbar from "../components/OnboardingNavbar";
import React from "react";

import { Link } from "react-router-dom";
const StudentSignUp = () => {
  return (
    <>
      <div className="w-screen h-screen bg-[#12161D] flex flex-col items-center">
        <OnboardingNavbar />
        <div className=" flex flex-col  p-5  rounded-2xl overflow-hidden w-[425px] bg-[#1A222B]">
          <h1 className="text-white text-2xl font-bold  mb-1">Sign Up</h1>
          <span className="text-white text-sm mb-5">
            Enter your following details to create an account:
          </span>

          <div className="w-full flex ">
            <div className="relative w-1/2 mb-4 mr-3">
              <label
                className="absolute top-1 left-2 text-slate-500 text-sm"
                htmlFor="username"
              >
                First name
              </label>
              <input
                id="username"
                className="bg-[#212529] border-2 border-slate-500 w-[100%] h-[50px] px-2 pt-3 text-white   rounded-md"
                type="text"
              />
            </div>

            <div className="relative w-1/2 mb-4">
              <label
                className="absolute top-1 left-2 text-slate-500 text-sm"
                htmlFor="username"
              >
                Last Name
              </label>
              <input
                id="username"
                className="bg-[#212529] border-2 border-slate-500 w-[100%] h-[50px] px-2 pt-3 text-white   rounded-md"
                type="text"
              />
            </div>
          </div>

          <div className="relative w-[100%] mb-4">
            <label
              className="absolute top-1 left-2 text-slate-500 text-sm"
              htmlFor="username"
            >
              Email
            </label>
            <input
              id="username"
              className="bg-[#212529] border-2 border-slate-500 w-[100%] h-[50px] px-2 pt-3 text-white rounded-md "
              type="email"
            />
          </div>

          <div className="relative w-[100%] mb-4">
            <label
              className="absolute top-1 left-2 text-slate-500 text-sm"
              htmlFor="username"
            >
              Contact Number
            </label>
            <input
              id="username"
              className="bg-[#212529] border-2 border-slate-500 w-[100%] h-[50px] px-2 pt-3 text-white rounded-md "
              type="text"
            />
          </div>

          <div className="relative w-[100%] mb-4">
            <label
              className="absolute top-1 left-2 text-slate-500 text-sm"
              htmlFor="username"
            >
              University/Organization
            </label>
            <input
              id="username"
              className="bg-[#212529] border-2 border-slate-500 w-[100%] h-[50px] px-2 pt-3 text-white rounded-md "
              type="text"
            />
          </div>

          <div className="relative w-[100%] mb-4">
            <label
              className="absolute top-1 left-2 text-slate-500 text-sm"
              htmlFor="username"
            >
              ID Number
            </label>
            <input
              id="username"
              className="bg-[#212529] border-2 border-slate-500 w-[100%] h-[50px] px-2 pt-3 text-white rounded-md "
              type="text"
            />
          </div>

          <div className="relative w-[100%] mb-4">
            <label
              className="absolute top-1 left-2 text-slate-500 text-sm"
              htmlFor="username"
            >
              Username
            </label>
            <input
              id="username"
              className="bg-[#212529] border-2 border-slate-500 w-[100%] h-[50px] px-2 pt-3 text-white rounded-md "
              type="text"
            />
          </div>

          <div className="w-[100%] flex ">
            <div className="relative w-1/2 mb-4 mr-3">
              <label
                className="absolute top-1 left-2 text-slate-500 text-sm"
                htmlFor="username"
              >
                Password
              </label>
              <input
                id="username"
                className="bg-[#212529] border-2 border-slate-500 w-[100%] h-[50px] px-2 pt-3 text-white   rounded-md"
                type="password"
              />
            </div>

            <div className="relative w-1/2 mb-4">
              <label
                className="absolute top-1 left-2 text-slate-500 text-sm"
                htmlFor="username"
              >
                Confirm Password
              </label>
              <input
                id="username"
                className="bg-[#212529] border-2 border-slate-500 w-[100%] h-[50px] px-2 pt-3 text-white   rounded-md"
                type="password"
              />
            </div>
          </div>

          <div className="flex w-[100%] justify-between mb-3">
            <div className="flex">
              <input type="checkbox" className="w-[18px]" />
              <span className=" ml-3 mr-1 text-white">I agree with APyro</span>
              <button className="text-blue-500">terms and condition</button>
            </div>
          </div>

          <Link to="/faceregistration">
            <button className="bg-blue-500 active:bg-blue-600  text-xl text-white py-2 font-bold w-[100%] rounded-lg mb-3">
              Save
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default StudentSignUp;
