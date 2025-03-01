import {
  FacebookIcon,Heart,InstagramIcon,Menu,Phone,TwitterIcon,User,
  UserRound,ShoppingCart,
  Search} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import flag from "../assets/images/bd.png";
import logo from "../assets/images/logo.png"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // user toggle
  const handleUser = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-white shadow-md ">
      <>
        <div className="py-2 shadow-md">
          <ul className="container m-auto flex flex-wrap justify-between md:flex-row px-4 md:px-2 items-center relative">
            {/* <Menu className="" /> */}

            <div className=" flex gap-2 text-sm text-gray-500 ">
              <div class="hidden lg:block">
                Free Shipping on Orders Over ৳ 1000
              </div>
              <div class="text-sm lg:hidden">
                Free Shipping ! 
              </div>
              
            </div>
            {/* <div className="flex gap-4">
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
            </div> */}
            <div className="flex gap-3">
                <div className="hidden lg:flex gap-4 mr-5">
                <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">FAQs</Link>
              </li>
                </div>
            <img src={flag} alt="lang" className="h-3 w-4 mt-1.5" />
            BDT
              <div className="flex my-auto gap-2">
                <FacebookIcon size={18} />
                <TwitterIcon size={18} />
                <InstagramIcon size={18} />
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
              {/* <User
              size={40}
              className="bg-gray-200 p-2 text-black rounded cursor-pointer"
              onClick={handleUser}
            /> */}
            </div>
          </ul>
        </div>
        <nav className="flex justify-between items-center container mx-auto md:py-6 py-6 px-2">
          <div className="flex ml-2 items-center">
          <Menu className="lg:hidden" />
            <Link to="/">
            <img src={logo} alt="" className="h-[31px] w-[80px] lg:h-[40px] lg:w-[95px] ml-2" />
            </Link>
          </div>
          <div className=" flex items-center">
          <input type="text" placeholder="Search" className="hidden lg:block border border-gray-200 rounded-l-2xl mx-auto w-[500px] p-2 relative"/>

          <Search size={40} className="hidden lg:block lg:h-11 lg:w-8 lg:right-0 lg:items-center lg:m-auto lg:bg-zinc-200  lg:rounded-r-2xl lg:cursor-pointer " />
          </div>

          <div className="flex items-center gap-4">
          <Phone size={25} className="hidden lg:block" />
          <div className="font-bold hidden lg:block">
            <div className="text-xs">CALL US NOW</div>
            <div className="text-lg">+01795018150</div>
          </div>
          <div className="flex gap-3 mr-4">
            <Link><UserRound size={28} /></Link>
            <Link><Heart size={28} /></Link>
            <Link to={"/cart"}><ShoppingCart size={28} /></Link>
          </div>
          </div>
        </nav>
      </>
    </header>
  );
}

export default Navbar;
