import Logo from "./Logo";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart, MdLogin, MdSearch } from "react-icons/md";


const Navbar = () => {
  return (
    <div className="flex w-screen justify-between px-10 items-center bg-slate-900 gap-5 shadow-md shadow-slate-600">
      <div className="p-1">
        <Link to="/">
          <Logo/>
        </Link>
      </div>
      <div className="hidden border-t lg:flex items-center w-full bg-slate-700 shadow-sm shadow-sky-600 rounded-full p-1 max-w-xl">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for product here..."
          className=" bg-slate-700 rounded-xl w-full focus:outline-none shadow-md text-slate-200 font-medium p-1"
        />
        <label htmlFor="search" className="cursor-pointer">
          <MdSearch className="text-white text-xl font-medium bg-slate-700 hover:text-sky-300" />
        </label>
      </div>
      <div className="flex gap-8 items-center ">
      <div className="relative">
        <MdOutlineShoppingCart className="text-3xl text-white hover:text-sky-300 hover:cursor-pointer"/>
        <div className="absolute -top-2 -right-2 bg-red-700 rounded-full w-5 h-5 flex justify-center items-center">
            <p className="text-xs text-white font-bold">0</p>
        </div>
      </div>
        <Link to="/login" className={` flex border-t shadow-md gap-2 items-center shadow-sky-500 bg-slate-800 rounded-md p-2 hover:cursor-pointer hover:bg-slate-950`}>
          <span className="text-white text-md font-semibold">Login</span>
          <MdLogin className="text-white text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
