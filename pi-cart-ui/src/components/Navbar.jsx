import Logo from "./Logo";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart, MdLogin } from "react-icons/md";

const items = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "Cart",
    path: "/cart",
  },
];

const Navbar = () => {
  return (
    <div className="flex w-screen justify-between items-center bg-slate-900 px-4">
      <div className="p-1">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="flex justify-start gap-4 items-center">
        <div className="flex justify-center">
          {items.map((item, index) => (
            <div key={index} className="p-4">
              <Link
                to={item.path}
                className="text-white font-semibold uppercase"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex justify-end items-center gap-4">
          <div className="flex justify-center">
            <MdOutlineShoppingCart className="text-white text-xl" />
            <span className=" bg-red-700 relative -top-2 px-1 text-xs right-2 rounded-xl text-slate-200 text-center">
              1
            </span>
          </div>
          <div className="flex border rounded-sm p-1">
            <span className="text-white text-sm font-semibold">Login</span>
            <MdLogin className="text-white text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
