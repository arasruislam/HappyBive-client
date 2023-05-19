import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active_Items" : "default_Items"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allToys"
          className={({ isActive }) =>
            isActive ? "active_Items" : "default_Items"
          }
        >
          All Toys
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myToys"
          className={({ isActive }) =>
            isActive ? "active_Items" : "default_Items"
          }
        >
          My Toys
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addToy"
          className={({ isActive }) =>
            isActive ? "active_Items" : "default_Items"
          }
        >
          Add Toy
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? "active_Items" : "default_Items"
          }
        >
          Blogs
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="absolute left-0 right-0 top-0 shadow-md">
      <div className="navbar custom-container">
        <div className="navbar-start">
          {/* Toggle NavBar */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        {/* Desktop navbar */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end space-x-2">
          {/* User Profile */}
          {/* <div className="avatar">
            <div className="w-24 mask mask-hexagon">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div> */}
          {/* If User profile not available */}
          <div>
            <FaUser className="h-6 w-6 text-[#B1D22F]" />
          </div>
          
          {/* login/ logout */}
          <div>
            <Link to="/login">
              <button className="btn btn-sm bg-[#B1D22F] accountLogin">
                Log in
              </button>
            </Link>
          </div>
          <div>
            <button className="btn btn-sm bg-[#FF6667] accountLogout">
              Log out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
