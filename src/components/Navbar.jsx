import React, { useState, useContext, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);
  const location = useLocation();
  const menuRef = useRef(null);

  // Open/close menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // check if the current path is not home, cart or contact to show the search bar
  useEffect(() => {
      const showPaths = [ '/accessories', '/men', '/women', '/children', '/gifts'];
      if (showPaths.includes(location.pathname)) {
        setVisible(true);
      } else {
        setVisible(false);
      }
  }, [location]);
    
  //click outside to close menu
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <motion.header
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
      className="fixed w-full flex z-20"
    >
      <div className="relative bg-white h-18 py-4 px-4 sm:px-9 flex w-full items-center text-black justify-between">
        {/* Logo */}
        <nav className="flex items-center space-x-3 sm:space-x-5">
          {/* menu button */}
          <button
            className="text-3xl z-20 flex items-center space-x-2 cursor-pointer"
            onClick={toggleMenu}
          >
            {isOpen ? <IoIosClose className="size-6" /> : <IoIosMenu className="size-6" />}
            {isOpen ? null : <span className="text-sm hidden sm:flex"> Menu</span>}
          </button>
          {/* search button*/}
          {visible && (
            <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setShowSearch(prev => !prev)}
          >
            <CiSearch className="size-4 sm:size-6" />
            <span className="text-sm hidden sm:flex"> Search</span>
          </div>
          )}
        </nav>
        <NavLink to={'/'} className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-xl sm:text-2xl md:text-3xl tracking-wider">ESSENTIA</h1>
        </NavLink>
        <nav className="flex items-center space-x-2 sm:space-x-6">
          <a href="#contact" className="relative group text-xs sm:text-base hidden sm:flex">
            Contact us
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black/80 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </a>
          <NavLink to={'/cart'}>
            <div className="relative">
              <FaShoppingBag className="size-4 sm:size-5" />
              <p className="absolute -bottom-2 right-[-5px] w-4 text-center leading-4 bg-zinc-800 text-white aspect-square rounded-full text-[8px]">
                {getCartCount()}
              </p>
            </div>
          </NavLink>
        </nav>
      </div>
      {/* Menu */}
      {isOpen && (
        <>
          {/* blur filter */}
          <div className="fixed inset-0 backdrop-filter backdrop-blur-lg bg-black/40"></div>
          <nav
            ref={menuRef}
            className="bg-white font-medium fixed top-0 left-0 w-full md:w-1/3 h-full flex flex-col px-10 py-18 sm:py-20 space-y-6 text-black text-2xl"
          >
            <NavLink to={'/women'} className="hover:underline" onClick={() => setIsOpen(false)}>Women</NavLink>
            <NavLink to={'/men'} className="hover:underline" onClick={() => setIsOpen(false)}>Men</NavLink>
            <NavLink to={'/children'} className="hover:underline" onClick={() => setIsOpen(false)}>Children</NavLink>
            <NavLink to={'/accessories'} className="hover:underline" onClick={() => setIsOpen(false)}>Accessories</NavLink>
            <NavLink to={'/gifts'} className="hover:underline" onClick={() => setIsOpen(false)}>Gifts</NavLink>
            <NavLink to={'/contact'} className="mt-20 font-light text-base underline" onClick={() => setIsOpen(false)}>Contact us</NavLink>
          </nav>
        </>
      )}
    </motion.header>
  );
};

export default Navbar;
