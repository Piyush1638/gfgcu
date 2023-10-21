import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import gfgLogo from "/gfg.svg";
import menu from "/account.svg"
import close from "/close.svg"

import ThemBtn from "../ThemeBtn";


const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const [toggle, setToggle] = useState(false);

    const mobileview = (e)=>{
        setOpenMenu(!openMenu);
        setToggle(!toggle);
    }

  return (
    <nav className="p-3 dark:bg-custom-dark-2 bg-custom-grey shadow md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center">
            <Link className="flex flex-row" to='/'>
                <img src={gfgLogo} alt="GeeksforGeeks"/>
                <span className="flex flex-col mx-3">
                    <span className="sm:text-2xl md:text-xl font-bold dark:text-slate-200">GeeksforGeeks</span>
                    <span className="text-gfg-green text-xs font-medium">Chandigarh University</span>
                </span>
            </Link>            

            <span>
              {
                !openMenu ? (<img onClick={mobileview} className="h-6 w-6 md:hidden lg:hidden sm:block mx-4" name="menu" src={menu} alt="menu"/>):(<img onClick={mobileview} className="h-6 w-6 md:hidden lg:hidden sm:block mx-4" name="close" src={close} alt="close"/>)
              }
            </span>
        </div>

        <ul className={`md:flex md:items-center z=[-1] md:z-auto ${!toggle? "hidden":""} transition-all ease-in duration-500`}>
            <li className="mx-4 my-6 md:my-0">
                <NavLink to="/competitions" className="text-xl dark:text-slate-100 text-black font-semibold hover:font-bold hover:border-b-2 hover:border-black ">
                    Competitons
                </NavLink>
            </li>
            <li className="mx-4 my-6 md:my-0"> 
                <NavLink to="/events" className="text-xl dark:text-slate-100 text-black font-semibold hover:font-bold hover:border-b-2 hover:border-black ">
                    Events
                </NavLink>
            </li>
            <li className="mx-4 my-6 md:my-0">
                <NavLink to="/blogs" className="text-xl dark:text-slate-100 text-black font-semibold hover:font-bold hover:border-b-2 hover:border-black ">
                    Blogs
                </NavLink>
            </li>
            <li className="mx-4 my-6 md:my-0">
                <NavLink to="/about-us" className={`text-xl dark:text-slate-100 text-black font-semibold hover:font-bold hover:border-b-2 hover:border-black`}>
                    About Us
                </NavLink>
            </li>

            <button className="text-gfg-green mx-4 my-2 md:my-0">
                Login/SignUp
            </button>
            <ThemBtn/>
        </ul>
    </nav>
  );
};

export default Navbar;
