import { Menu, User } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // user toggle
  const handleUser = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-white shadow-md">
      <>
        <div className="py-4 shadow-md">
          <ul className="container m-auto flex flex-wrap justify-between md:flex-row px-4 md:px-2 items-center relative">
          <Menu className="" />
            <div className="flex gap-4">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">FAQs</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </div>
            <div
              className={`${
                isOpen
                  ? "flex flex-col absolute right-0 md:right-0 top-12 z-10 bg-zinc-50 p-4 gap-4"
                  : "hidden"
              }`}
            >
              <li>
                <Link to="/">Sign In</Link>
              </li>
              <li>
                <Link to="/">My Account</Link>
              </li>
            </div>
            <User
              size={40}
              className="bg-gray-200 p-2 text-black rounded cursor-pointer"
              onClick={handleUser}
            />
          </ul>
        </div>
        <nav>
          <div>
            <Link to="/"></Link>
          </div>
        </nav>
      </>
    </header>
  );
}

export default Navbar;
