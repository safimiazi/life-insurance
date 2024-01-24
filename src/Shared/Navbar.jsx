import { useState } from "react";
import logo from "../assets/logo (1).png"
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

            <li>
              <a>Products</a>
              <ul className="p-2">
                <li><a>Individual (Akok Bima)</a></li>
                <li><a>Islami Takaful</a></li>
                <li><a>Janabima</a></li>
                <li><a>NPDI</a></li>
                <li><a>Group Insurance</a></li>
              </ul>
            </li>

            <li>
              <a>Financial</a>
              <ul className="p-2">
                <li><a>Quarterly Financial Statement</a></li>
                <li><a>Annual Report</a></li>
                <li><a>Investment</a></li>
              </ul>
            </li>

            <li>
              <a>E-Service</a>
              <ul className="p-2">
                <li><a>Premium Calculator</a></li>
                <li><a>Online Payment</a></li>
                <li><a>Claim Status</a></li>
                <li><a>Apply For Policy</a></li>
              </ul>
            </li>
            <li><a>Home</a></li>

            <li>
              <a>Customer Care</a>
              <ul className="p-2">
                <li><a>Life Insurance</a></li>
                <li><a>Service Center</a></li>
                <li><a>Area Office</a></li>
                <li><a>Zonal Office</a></li>
                <li><a>Discount Facility</a></li>
                <li><a>DownLoad</a></li>
              </ul>
            </li>

            <li><a>Contact Us</a></li>

          </ul>
        </div>
        <img src={logo} alt="" />
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
          <li>
            <details>
              <summary>Products</summary>
              <ul className="p-2 z-10 w-56">
                <li><a>Individual (Akok Bima)</a></li>
                <li><a>Islami Takaful</a></li>
                <li><a>Janabima</a></li>
                <li><a>NPDI</a></li>
                <li><a>Group Insurance</a></li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Financial</summary>
              <ul className="p-2 z-10 w-56">
              <li><a>Quarterly Financial Statement</a></li>
                <li><a>Annual Report</a></li>
                <li><a>Investment</a></li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>E-Service</summary>
              <ul className="p-2 z-10 w-56">
              <li><a>Premium Calculator</a></li>
                <li><a>Online Payment</a></li>
                <li><a>Claim Status</a></li>
                <li><a>Apply For Policy</a></li>
              </ul>
            </details>
          </li>
         
          <li><a>Media</a></li>

          <li>
            <details>
              <summary>Customer Care</summary>
              <ul className="p-2 z-10 w-56">
              <li><a>Life Insurance</a></li>
                <li><a>Service Center</a></li>
                <li><a>Area Office</a></li>
                <li><a>Zonal Office</a></li>
                <li><a>Discount Facility</a></li>
                <li><a>DownLoad</a></li>
              </ul>
            </details>
          </li>

          <li><a>Contact Us</a></li>

        </ul>
      </div>
      <div className="navbar-end ml-3">
        <a className="btn rounded-full bg-amber-400">Buy Now</a>
      </div>
    </div>

  );
};

export default Navbar;
