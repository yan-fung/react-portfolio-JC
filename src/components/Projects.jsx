import { useState } from "react";
import { motion } from "framer-motion";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Projects = () => {
  const slides = [
    {
      url: "https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_1.0,f_auto,h_460/rcv4ikhsipvot5s0rsbt",
    },
    {
      url: "https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_1.0,f_auto,h_460/pholb1ctwhomyaxwinp9",
    },
    {
      url: "https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_1.0,f_auto,h_460/cguvoafyvsun1veblq5m",
    },
    {
      url: "https://c0.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_1.0,f_auto,h_460/qubjqafwlceousutygeo",
    },
    {
      url: "https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_1.0,f_auto,h_460/ehc5oj4acncvd8ky9wbv",
    },
    {
      url: "https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_1.0,f_auto,h_460/jaeuc87gwylbgmtd8bss",
    },
    {
      url: "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_1.0,f_auto,h_460/bcji7w2llyfxegzyurqd",
    },
    {
      url: "https://c0.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_1.0,f_auto,h_460/q0jbaq7fir60srvtbssv",
    },
    {
      url: "https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_1.0,f_auto,h_460/lbzze64c16fdkqwp22ap",
    },
    {
      url: "https://c0.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_1.0,f_auto,h_460/awfeexq4trzji3admm6n",
    },
    {
      url: "https://c2.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_1.0,f_auto,h_460/mhimfijwfox3zzm0zak5",
    },
    {
      url: "https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_1.0,f_auto,h_460/okk8uhmvfz0kumbnvlxr",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentSlide === 0;
    const nextIndex = isFirstSlide ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(nextIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentSlide === slides.length - 1;
    const nextIndex = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(nextIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <section
      id='projects'
      className='w-full md:pr-60 md:pl-60 pr-3 pl-3 pb-20 bg-stone-300 text-stone-900'
    >
      <motion.div
        className=''
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h1 className='text-center font-playfair text-4xl pt-40 pb-10 md:pb-10 text-zinc-700'>
          PROJECTS
        </h1>
        <h2 className='font-playfair text-center text-2xl md:text-4xl md:pb-20 pb-10 text-zinc-700'>
          The Windrush Warriors
        </h2>
      </motion.div>
      <motion.div
        className=''
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className='h-full flex flex-col md:flex-row gap-5 justify-center relative'>
          <div className='flex flex-col gap-3 md:w-4/6'>
            <p className='text-base md:text-xl font-playfair pb-5'>
              The Windrush Warriors is a dramatic comedy exposing the injustice
              of the infamous Windrush scandal.
            </p>
            <p className='text-base md:text-xl font-playfair'>
              We invite you to join us, to laugh & cry with us as our show
              shares the story of one of the most cruel & vindictive initiatives
              ever undertaken by a government – the recent ‘hostile environment’
              leading to the outrageous Windrush scandal. The Windrush Warriors
              is a show that exposes the despicable persecution of
              African-Caribbean people that began in the UK in 2017. Perpetrated
              by the Conservative government, this is a scandal of epic
              proportions that devastated lives & shattered families. The
              Windrush Warriors is a comedy drama that highlights the resilience
              of black people in a time of crisis. The show is a life-affirming
              view of a group of survivors who imagined a peaceful retirement
              but have to deal with a serious, unexpected challenge. And how do
              they cope with the stress and anxiety generated by the
              Conservative government’s hostile environment? By fighting back!
            </p>
          </div>
          <div className='w-full relative'>
            {/* Image Container */}
            <div
              style={{ backgroundImage: `url(${slides[currentSlide].url})` }}
              className='w-full h-[550px] rounded-2xl bg-center bg-cover duration-500 relative'
            >
              {/* Left Arrow */}
              <div className='absolute top-1/2 left-1 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
              </div>
              {/* Right Arrow */}
              <div className='absolute top-1/2 right-1 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
              </div>
            </div>
            {/* Dots Container */}
            <div className='flex justify-center mt-5'>
              {slides.map((_slide, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className='text-2xl md:text-4xl cursor-pointer text-zinc-600'
                >
                  <RxDotFilled />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
