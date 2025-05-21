import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between items-center bg-blue-500 p-4">
      <h1 className="font-extrabold text-[30px] text-white">My shop</h1>
      <div className="text-white flex gap-4 text-[18px]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "underline text-red-500 font-bold" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/add"
          className={({ isActive }) =>
            isActive ? "underline text-red-500 font-bold" : ""
          }
        >
          Add Product
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "underline text-red-500 font-bold" : ""
          }
        >
          Cart
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
