import Logo from "../components/Logo";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center mt-10 ">
      <div className="flex justify-center border-t align-center p-2 flex-col rounded-lg bg-slate-200 w-full max-w-96 shadow-lg shadow-orange-500">
        <div className="flex justify-center">
          <Logo className="" />
        </div>
        <div className="flex justify-center align-center p-2 flex-col  ">
          <div className="text-xl text-center text-slate-700 font-bold">
            Register your account
          </div>
          <form className="flex flex-col gap-2 p-2">
            <div className="flex flex-col gap-2 p-2">
              <label htmlFor="name" className="text-slate-600">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name" required
                className="bg-slate-300 p-2 rounded-md text-slate-700 border-t-2 shadow-md shadow-orange-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 p-2">
              <label htmlFor="email" className="text-text-slate-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email" required
                className="bg-slate-300 p-2 rounded-md text-slate-700 border-t-2 shadow-md shadow-orange-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 p-2">
              <label htmlFor="password" className="text-text-slate-600">
                Password
              </label>
              <div className="flex justify-center items-center w-full bg-slate-300 gap-2 border-t-2 shadow-md shadow-orange-500 rounded-md">
                <input
                  type={showPassword === true ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter your password" required
                  className="p-2 text-slate-700 bg-slate-300 focus:outline-none w-full"
                />
                {showPassword === true ? (
                  <BsEyeSlash
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-slate-600 text-xl mx-2 hover:cursor-pointer"
                  />
                ) : (
                  <BsEye
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-slate-600 text-xl mx-2 hover:cursor-pointer"
                  />
                )}
              </div>
            </div>
            <div className="flex p-2 justify-center mt-4">
              <button className="bg-orange-700 shadow-md shadow-slate-500 hover:bg-orange-600 p-2 w-full rounded-md text-white font-bold">
                Sign Up
              </button>
            </div>
          </form>
          <div className="text-sm text-center text-slate-500">
            New here?{" "}
            <span className="underline text-orange-900 hover:text-orange-700">
              <Link to="/login">Login</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
