/* eslint-disable react/prop-types */
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Sidenav = ({ setSelectedPage }) => {
  const [nav, setNav] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const handleNav = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(false);
  };
  return (
    //desktop
    <nav className=' z-40 w-full fixed top-0'>
      <div className='flex items-center justify-between mx-auto w-full pt-5 pb-5 bg-zinc-900'>
        <h4 className='font-playfair text-4xl pl-5 md:pl-20 font-bold text-transparent bg-clip-text bg-gradient-to-r from-stone-300 to-slate-100'>
          John Clarke
        </h4>
        {/* DESKTOP NAV */}
        {isAboveSmallScreens ? (
          <div className='flex justify-between gap-16 font-opensans text-xl font-semibold'>
            <AnchorLink onClick={() => setSelectedPage("home")} href='#home'>
              <div className='hover:text-yellow opacity-80 transition duration-500 font-playfair'>
                Home
              </div>
            </AnchorLink>
            <AnchorLink onClick={() => setSelectedPage("home")} href='#home'>
              <div className='hover:text-yellow opacity-80 transition duration-50 font-playfair'>
                About Me
              </div>
            </AnchorLink>
            <AnchorLink
              onClick={() => setSelectedPage("projects")}
              href='#projects'
            >
              <div className='hover:text-yellow opacity-80 transition duration-500 font-playfair'>
                Projects
              </div>
            </AnchorLink>
            <AnchorLink
              onClick={() => setSelectedPage("contact")}
              href='#contact'
            >
              <div className='hover:text-yellow opacity-80 transition duration-500 font-playfair'>
                Contact
              </div>
            </AnchorLink>
          </div>
        ) : (
          ""
        )}
        {/* MOBILE NAV */}
        {nav ? (
          // Close button when navigation is open
          <AiOutlineClose
            onClick={closeNav}
            className='absolute top-7 right-4 z-[99] sm:hidden text-xl cursor-pointer'
          />
        ) : (
          // Menu button when navigation is closed
          <AiOutlineMenu
            onClick={handleNav}
            className='absolute top-7 right-4 z-[99] sm:hidden text-xl cursor-pointer'
          />
        )}
        <div>
          {!isAboveSmallScreens && nav ? (
            <div className='fixed py-20 right-0 bottom-0 h-full bg-black text-white opacity-90 w-[300px] cursor-pointer sm:hidden'>
              <div className='flex flex-col gap-10 ml-[33%] text-xl font-semibold'>
                <AnchorLink
                  onClick={() => setSelectedPage("home")}
                  href='#home'
                >
                  <div className='hover:text-yellow opacity-80 transition duration-500 font-playfair'>
                    Home
                  </div>
                </AnchorLink>
                <AnchorLink
                  onClick={() => setSelectedPage("home")}
                  href='#home'
                >
                  <div className='hover:text-yellow opacity-80 transition duration-500 font-playfair'>
                    About Me
                  </div>
                </AnchorLink>
                <AnchorLink
                  onClick={() => setSelectedPage("projects")}
                  href='#projects'
                >
                  <div className='hover:text-yellow opacity-80 transition duration-500 font-playfair'>
                    Projects
                  </div>
                </AnchorLink>
                <AnchorLink
                  onClick={() => setSelectedPage("contact")}
                  href='#contact'
                >
                  <div className='hover:text-yellow opacity-80 transition duration-500 font-playfair'>
                    Contact
                  </div>
                </AnchorLink>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
};

export default Sidenav;
