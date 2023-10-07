import wallpaper from "../assets/wallpaper.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import profilePic from "../assets/jc-pic.png";

const Home = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id='home' className='relative pt-50'>
      {/* Wallpaper */}
      <img
        className='w-full md:h-screen object-cover'
        src={wallpaper}
        alt='Wallpaper'
      />

      {/* Content */}
      <div className='absolute top-1/2 transform-500 -translate-y-1/2 text-center w-full'>
        {isAboveMediumScreens && (
          <div className=''>
            <img
              className='hover:filter hover:saturate-50 transition duration-500 z-10 w-full max-w-[250px] md:max-w-[450px]'
              alt='profile-pic'
              src={profilePic}
            />
          </div>
        )}
        <motion.div
          className='mx-auto'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: 0 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div
            className={` font-playfair text-center absolute md:top-10 w-full ${
              isAboveMediumScreens ? "left-[30%]" : "left-0 h-full"
            } w-full md:w-[40%]`}
          >
            <h1 className='text-4xl pt-10 pb-5'>Theatre Professional</h1>
            <p className='text-lg md:text-2xl pr-3 pl-3 pb-5'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
              pariatur a reiciendis saepe qui dignissimos aliquam facere
              officiis iusto minus nam velit ratione fugiat natus harum itaque
              inventore, sequi neque?
            </p>

            <p className='text-lg md:text-2xl pr-3 pl-3 pb-5'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
              pariatur a reiciendis saepe qui dignissimos aliquam facere
              officiis iusto minus nam velit ratione fugiat natus harum itaque
              inventore, sequi neque?
            </p>
            <motion.div
              className='flex mt-10 justify-center text-lg md:text-2xl'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <AnchorLink
                className=''
                onClick={() => setSelectedPage("contact")}
                href='#contact'
              >
                <div className='font-semibold hover:text-white transition duration-500 w-full h-full flex items-cent-dark-piner justify-center px-8 border border-yellow'>
                  Contact Me
                </div>
              </AnchorLink>
              <AnchorLink
                className='rounded-r-sm bg-yellow py-0.5 pr-0.5'
                onClick={() => setSelectedPage("contact")}
                href='#contact'
              >
                <div className='font-semibold hover:text-white transition duration-500 w-full h-full flex items-center justify-center px-10 text-black'>
                  Let&apos;s talk
                </div>
              </AnchorLink>
            </motion.div>
            <motion.div
              className='flex mt-5 justify-center md:justify-start'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
