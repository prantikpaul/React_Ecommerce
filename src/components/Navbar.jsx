import {
  FacebookIcon,
  Heart,
  InstagramIcon,
  Menu,
  Phone,
  TwitterIcon,
  UserRound,
  ShoppingCart,
  Search,
  ChevronDown,
  X
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import flag from "../assets/images/bd.png";
import logo from "../assets/images/logo.png";

const categories = [
  "Home",
  "Categories",
  "Blog",
  "About Us",
  "Contact Us",
  "Signup"
];

const categoryItems = [
  "Electronics",
  "Clothing",
  "Home & Kitchen",
  "Books",
  "Beauty",
  "Toys"
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCategoryOpen, setIsSidebarCategoryOpen] = useState(false);

  // User toggle
  const handleUser = () => {
    setIsOpen(!isOpen);
  };

  // Category hover
  const handleCategoryMouseEnter = () => {
    setIsCategoryOpen(true);
  };

  const handleCategoryMouseLeave = () => {
    setIsCategoryOpen(false);
  };

  // Sidebar toggle
  const handleMenuClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Sidebar category toggle
  const handleSidebarCategoryToggle = () => {
    setIsSidebarCategoryOpen(!isSidebarCategoryOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="py-2 shadow-md">
        <ul className="container m-auto flex flex-wrap justify-between md:flex-row px-4 md:px-2 items-center relative">
          <div className="flex gap-2 text-sm text-gray-500">
            <div className="hidden lg:block">
              Free Shipping on Orders Over ৳ 1000
            </div>
            <div className="text-sm lg:hidden">
              Free Shipping!
            </div>
          </div>
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
          </div>
        </ul>
      </div>
      <nav className="flex justify-between items-center container mx-auto md:py-6 py-6 px-2">
        <div className="flex ml-2 items-center">
          <Menu className="lg:hidden" onClick={handleMenuClick} />
          <Link to="/">
            <img src={logo} alt="" className="h-[31px] w-[80px] lg:h-[40px] lg:w-[95px] ml-2" />
          </Link>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="hidden lg:block border border-gray-200 rounded-l-2xl mx-auto w-[500px] p-2 relative"
          />
          <Search
            size={40}
            className="hidden lg:block lg:h-11 lg:w-8 lg:right-0 lg:items-center lg:m-auto lg:bg-zinc-200 lg:rounded-r-2xl lg:cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-4">
          <Phone size={25} className="hidden lg:block" />
          <div className="font-bold hidden lg:block">
            <div className="text-xs">CALL US NOW</div>
            <div className="text-lg">+01795018150</div>
          </div>
          <div className="flex gap-3 mr-4">
            <Link>
              <UserRound size={28} />
            </Link>
            <Link>
              <Heart size={28} />
            </Link>
            <Link to="/cart">
              <ShoppingCart size={28} />
            </Link>
          </div>
        </div>
      </nav>
      <hr className="lg:mx-48" />

      <div className="hidden lg:block container mx-auto py-3 px-4 font-bold ">
        <div className="flex gap-4">
          {categories.map((cat) => {
            if (cat === "Categories") {
              return (
                <div
                  key={cat}
                  className="relative py-2 px-4 rounded-md active:scale-105 hover:bg-zinc-200 hover:text-blue-600 transition-all ease-in text-gray-700"
                  onMouseEnter={handleCategoryMouseEnter}
                  onMouseLeave={handleCategoryMouseLeave}
                >
                  <div className="flex items-center">
                    {cat}
                    <ChevronDown size={16} className="ml-1" />
                  </div>
                  {isCategoryOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                      {categoryItems.map((item) => (
                        <Link
                          key={item}
                          to={`/category/${item.toLowerCase()}`}
                          className="block px-4 py-2 text-gray-800 hover:bg-zinc-200"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                className="py-2 px-4 rounded-md active:scale-105 hover:bg-zinc-200 hover:text-blue-600 transition-all ease-in text-gray-700"
                key={cat}
                to={`/${cat.toLowerCase().replace(" ", "-")}`}
              >
                {cat}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Sidebar for small view */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 ${
          isSidebarOpen ? "block" : "hidden"
        }`}
        onClick={handleMenuClick}
      ></div>
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white z-30 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <X size={24} onClick={handleMenuClick} />
        </div>
        <div className="flex flex-col gap-4 p-4">
          {categories.map((cat) => {
            if (cat === "Categories") {
              return (
                <div key={cat} className="relative">
                  <div
                    className="flex items-center justify-between py-2 px-4 rounded-md hover:bg-zinc-200 hover:text-blue-600 transition-all ease-in text-gray-700"
                    onClick={handleSidebarCategoryToggle}
                  >
                    {cat}
                    <ChevronDown size={16} className="ml-1" />
                  </div>
                  {isSidebarCategoryOpen && (
                    <div className="pl-4">
                      {categoryItems.map((item) => (
                        <Link
                          key={item}
                          to={`/category/${item.toLowerCase()}`}
                          className="block px-4 py-2 text-gray-800 hover:bg-zinc-200"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                className="py-2 px-4 rounded-md hover:bg-zinc-200 hover:text-blue-600 transition-all ease-in text-gray-700"
                key={cat}
                to={`/${cat.toLowerCase().replace(" ", "-")}`}
              >
                {cat}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
