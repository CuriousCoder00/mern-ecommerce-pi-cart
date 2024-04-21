import Logo from "./Logo";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdOutlineShoppingCart, MdSearch } from "react-icons/md";
import { useContext, useState } from "react";

const Navbar = () => {

  // const context = useContext(Context)
  // const navigate = useNavigate()
  const searchInput = useLocation()
  const URLSearch = new URLSearchParams(searchInput?.search)
  const searchQuery = URLSearch.getAll("q")
  const [search,setSearch] = useState(searchQuery)

  const handleSearch = (e) => {
    const {value} = e.target;
    setSearch(value)
    if(value){
      console.log("searching for",value)
    } else {
      console.log("search query is empty")
    }
  }
  return (
    <div className="flex w-screen justify-between px-10 items-center bg-slate-200 gap-5 shadow-md shadow-slate-600">
      <div className="p-1">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="hidden border-t lg:flex items-center w-full bg-slate-300 shadow-sm shadow-orange-500 rounded-full p-1 max-w-xl">
        <input
          type="search"
          name="search"
          id="search" onChange={handleSearch} value={search}
          placeholder="Search for product here..."
          className=" bg-slate-300 rounded-xl w-full focus:outline-none text-slate-700 font-medium p-1"
        />
        <label
          htmlFor="search"
          className="cursor-pointer text-orange-700 rounded-full hover:bg-orange-400 p-2 hover:text-slate-100"
        >
          <MdSearch className="  text-xl font-medium" />
        </label>
      </div>
      <div className="flex gap-8 items-center ">
        <div className="flex items-center relative">
          <MdOutlineShoppingCart className="text-3xl text-slate-500 hover:text-slate-700 hover:cursor-pointer" />
          <div className="absolute -top-2 -right-2 bg-red-700 rounded-full w-5 h-5 flex justify-center items-center">
            <p className="text-xs text-white font-bold">0</p>
          </div>
        </div>
        <Link
          to="/login"
          className={` flex border-t gap-2 items-center hover:shadow-md hover:shadow-orange-500 rounded-md px-4 hover:cursor-pointer hover:bg-slate-300 text-slate-500 hover:text-slate-800 `}
        >
          <span className=" text-md font-semibold p-2 flex items-center">
            Login
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
