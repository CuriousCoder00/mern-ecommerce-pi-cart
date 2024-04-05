import Logo from "../components/Logo";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center mt-10 ">
      <div className="flex justify-center border-t align-center p-2 flex-col rounded bg-slate-500 w-full max-w-96 shadow-lg shadow-sky-500">
        <div className="flex justify-center">
          <Logo className="" />
        </div>
        <div className="flex justify-center align-center p-2 flex-col  ">
          <div className="text-xl text-center text-white font-bold">
            Register your account
          </div>
          <form className="flex flex-col gap-2 p-2">
            <div className="flex flex-col gap-2 p-2">
              <label htmlFor="name" className="text-white">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="bg-slate-800 p-2 rounded-md text-white focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 p-2">
              <label htmlFor="email" className="text-white">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="bg-slate-800 p-2 rounded-md text-white focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 p-2">
              <label htmlFor="password" className="text-white">
                Password
              </label>
              <div className="flex justify-center items-center w-full bg-slate-800 gap-2 rounded-md">
                <input
                  type={showPassword === true ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="bg-slate-800 p-2 rounded-md text-white focus:outline-none w-full"
                />
                {showPassword === true ? (
                  <BsEyeSlash
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-white text-xl mx-2 hover:cursor-pointer"
                  />
                ) : (
                  <BsEye
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-white text-xl mx-2 hover:cursor-pointer"
                  />
                )}
              </div>
            </div>
            <div className="flex p-2 justify-center mt-4">
              <button className="bg-sky-800 shadow-md shadow-sky-500 hover:bg-sky-600 p-2 w-full rounded-md text-white font-bold">
                Sign Up
              </button>
            </div>
          </form>
          <div className="text-sm text-center text-slate-200">
            New here?{" "}
            <span className="underline text-sky-200 hover:text-sky-400">
              <Link to="/login">Login</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
