import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import gfgLogo from "/gfg.svg";
import menu from "/account.svg";
import close from "/close.svg";

import ThemBtn from "../ThemeBtn";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [auth, setAuth] = useState(false);

  const mobileview = () => {
    setOpenMenu(!openMenu);
    setToggle(!toggle);
  };

  // const handleAuth = ()=>{
  //   setAuth(!auth);
  // }

  const navLinks = [
    {
      id: 1,
      path: "/competitions",
      text: "Competitions",
    },
    {
      id: 2,
      path: "/events",
      text: "Events",
    },
    {
      id: 3,
      path: "/blogs",
      text: "Blogs",

    },
    {
      id:4,
      path:"/about-us",
      text:"About Us"
    }
  ];

  return (
    <nav className="p-3 dark:bg-custom-dark-2 bg-custom-grey shadow md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center">
        <Link className="flex flex-row" to="/">
          <img src={gfgLogo} alt="GeeksforGeeks" />
          <span className="flex flex-col mx-3">
            <span className="sm:text-2xl md:text-xl font-bold dark:text-slate-200">
              GeeksforGeeks
            </span>
            <span className="text-gfg-green text-xs font-medium">
              Chandigarh University
            </span>
          </span>
        </Link>

        <span>
          {!openMenu ? (
            <img
              onClick={mobileview}
              className="h-6 w-6 md:hidden lg:hidden sm:block mx-4 cursor-pointer"
              name="menu"
              src={menu}
              alt="menu"
            />
          ) : (
            <img
              onClick={mobileview}
              className="h-6 w-6 md:hidden lg:hidden sm:block mx-4 cursor-pointer"
              name="close"
              src={close}
              alt="close"
            />
          )}
        </span>
      </div>

      <ul
        className={`md:flex md:items-center z=[-1] md:z-auto ${
          !toggle ? "hidden" : ""
        } transition-all ease-in duration-500`}
      >
        {navLinks.map((links) => {
          return (
            <li className="mx-4 my-6 md:my-0" key={links.id}>
              <NavLink
                to={links.path}
                className="text-xl dark:text-slate-100 text-black font-semibold hover:font-bold hover:border-b-2 hover:border-black dark:hover:border-slate-200 "
              >
                {links.text}
              </NavLink>
            </li>
          );
        })}

        {!auth ? (
          <Link to="/login"  className="text-slate-100 bg-gfg-green p-3 rounded-md font-semibold mx-4 my-2 md:my-2">
            Login/SignUp
          </Link>
        ) : (
          <button className="text-slate-100 bg-gfg-green p-3 rounded-md font-semibold mx-4 my-2 md:my-2">
            Logout
          </button>
        )}
        <ThemBtn />
      </ul>
    </nav>
  );
};

export default Navbar;
