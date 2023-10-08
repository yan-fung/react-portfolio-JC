import wallpaper from "../assets/wallpaper.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import profilePic from "../assets/jc-pic.png";
import SocialMediaIcons from "./SocialMediaIcons";

const Home = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id='home' className='relative pt-10'>
      {/* Wallpaper */}
      <div className=''>
        {" "}
        <img
          className='w-full md:h-screen object-cover'
          src={wallpaper}
          alt='Wallpaper'
        />
      </div>

      {/* Content */}
      <div className='absolute top-1/2 transform-500 -translate-y-1/2 text-center w-full'>
        {isAboveMediumScreens && (
          <div className=''>
            <img
              className='hover:filter hover:saturate-50 transition duration-500 z-10 w-full md:max-w-[450px]'
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
            className={`font-playfair text-left absolute md:top-8 w-full ${
              isAboveMediumScreens ? "left-[28%]" : "left-0 h-full"
            } w-full md:w-[40%]`}
          >
            <h1 className='text-center text-2xl md:text-4xl pt-10 md:pt-5'>
              THEATRE PROFESSIONAL
            </h1>
            <h2 className='text-center text-2xl md:text-4xl pt-5 pb-5'>
              Writer | Director | Performer
            </h2>
            <div>
              <p className='text-base md:text-2xl pr-3 pl-3 pb-5'>
                Possessing extensive experience as a theater director, my
                proficiency encompasses the domains of writing, directing, and
                performance within the United Kingdom.
              </p>
            </div>
            <div>
              <p className='text-base md:text-2xl pr-3 pl-3 pb-5'>
                Distinguished achievements involve orchestrating theatrical
                productions on a national scale, with a notable pinnacle being
                the adept direction of a touring comedy show culminating at the
                prestigious Edinburgh Fringe Festival in 2019.
              </p>
            </div>
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
              <div>
                <div className='font-semibold hover:text-white transition duration-500 w-58  h-full flex items-cent-dark-piner justify-center px-2 border border-yellow'>
                  <a
                    target='_blank'
                    href='https://media.licdn.com/dms/document/media/C562DAQGmOHyCuvSq6A/profile-treasury-document-pdf-analyzed/0/1643715605734?e=1697673600&v=beta&t=ewcQeHIL-BMDRMnthOd_eWgUaSyAwQq2paV2kaFQDOI'
                    rel='noreferrer'
                  >
                    Download my CV
                  </a>
                </div>
              </div>
              <AnchorLink
                className='rounded-r-sm bg-yellow py-0.5 pr-0.5'
                onClick={() => setSelectedPage("contact")}
                href='#contact'
              >
                <div className='font-semibold hover:text-white transition duration-500 w-58 h-full flex items-center justify-center px-12 text-black'>
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
            {/* Social Media */}
            <motion.div
              className='justify-center text-center'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <SocialMediaIcons />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
