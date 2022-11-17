import React, { useState } from "react";
import { ImPower } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";

import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuShow, setMenuShow] = useState(false);

  return (
    <header className="flex items-center justify-around h-8 p-3  py-9">
      <NavLink
        to="/home"
        className=" text-white font-bold text-3xl flex items-center gap-1"
      >
        woop <ImPower className=" text-base text-primary-color" />
      </NavLink>

      <nav>
        <ul
          className={`flex flex-col gap-12 sm:gap-7 fixed top-[-100vh] left-0  w-screen h-screen justify-center items-center bg-gray-bg sm:flex-row sm:relative sm:bg-transparent sm:w-full sm:h-full sm:top-[0] z-40 transition-transform ${
            menuShow ? " translate-y-full" : "translate-y-[0]"
          }`}
        >
          <li
            className={`opacity-0 ${
              menuShow ? "opacity-100" : "opacity-0"
            } transition-opacity delay-300 sm:opacity-100`}
          >
            <NavLink
              to="/home"
              className=" text-white text-md sm:text-sm hover:opacity-80 trasition-opacity"
              activeClassName="is-active"
            >
              Home
            </NavLink>
          </li>
          <li
            className={`opacity-0 ${
              menuShow ? "opacity-100" : "opacity-0"
            } transition-opacity delay-300 sm:opacity-100`}
          >
            <NavLink
              to="/category"
              className=" text-white text-md sm:text-sm hover:opacity-80 trasition-opacity"
            >
              Categorias
            </NavLink>
          </li>
          <li
            className={`opacity-0 ${
              menuShow ? "opacity-100" : "opacity-0"
            } transition-opacity delay-300 sm:opacity-100`}
          >
            <NavLink
              to="/about"
              className=" text-white text-md sm:text-sm hover:opacity-80 trasition-opacity"
              activeClassName="is-active"
            >
              Sobre
            </NavLink>
          </li>
          <li
            className={`opacity-0 ${
              menuShow ? "opacity-100" : "opacity-0"
            } transition-opacity delay-300 sm:opacity-100`}
          >
            <NavLink
              to="/contact"
              className=" text-white text-md sm:text-sm hover:opacity-80 trasition-opacity"
              activeClassName="is-active"
            >
              Contatos
            </NavLink>
          </li>
        </ul>
      </nav>
      <span
        onClick={() => setMenuShow(!menuShow)}
        className="menu-btn text-primary-color cursor-pointer text-lg hover:opacity-80 transition-opacity transition-colors flex sm:hidden z-50"
      >
        {menuShow ? <VscChromeClose /> : <GiHamburgerMenu />}
      </span>
    </header>
  );
};

export default Header;
