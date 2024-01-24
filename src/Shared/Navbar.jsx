import { useState } from "react";

const Navbar = () => {

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={toggleDropdown}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>
            <li>
              <a>Company Info</a>
              <ul className="p-2">
                <li><a>About Us</a></li>
                <li><a>Board Of Directors</a></li>
                <li><a>Executives</a></li>
                <li><a>CEO Profile</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Home</a></li>
          <li>
            <details>
              <summary>Company Info</summary>
              <ul className="p-2 z-10 w-56">
              <li><a>About Us</a></li>
                <li><a>Board Of Directors</a></li>
                <li><a>Executives</a></li>
                <li><a>CEO Profile</a></li>
              </ul>
            </details>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>

  );
};

export default Navbar;
