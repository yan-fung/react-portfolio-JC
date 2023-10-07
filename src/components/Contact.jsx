import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id='contact' className='pb-20 md:pr-80 md:pl-80 pr-3 pl-3'>
      <motion.div
        className='basis-1/2 mt-10 md:mt-0'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className='text-center'>
          <h1 className='font-playfair text-4xl pb-10 pt-40'>CONTACT ME</h1>
        </div>
      </motion.div>

      <motion.div
        className='basis-1/2 mt-10 md:mt-0'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <form
          target='_blank'
          onSubmit={onSubmit}
          action='https://formsubmit.co/a253f70d1ac95bae1b961f1611a7ac1b'
          method='POST'
          className=''
        >
          <input
            className='w-full bg-slate-100 rounded-sm font-semibold font-opensans placeholder-opaque-black p-3 text-black'
            type='text'
            placeholder='NAME'
            {...register("name", {
              required: true,
              maxLength: 100,
            })}
          />
          {errors.name && (
            <p className='text-rose-600 mt-1'>
              {errors.name.type === "required" && "This field is required."}
              {errors.name.type === "maxLength" &&
                "The maximum length is 100 character."}
            </p>
          )}
          <input
            className='w-full bg-slate-100 rounded-sm font-semibold font-opensans placeholder-opaque-black p-3 mt-5 text-black'
            type='text'
            placeholder='EMAIL'
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          {errors.email && (
            <p className='text-rose-600 mt-1'>
              {errors.email.type === "required" && "This field is required."}
              {errors.email.type === "pattern" && "Invalid email address."}
            </p>
          )}
          <textarea
            className='w-full bg-slate-100 rounded-sm font-semibold font-opensans placeholder-opaque-black p-3 mt-5 text-black'
            type='text'
            placeholder='MESSAGE'
            rows='10'
            cols='50'
            {...register("message", {
              required: true,
              maxLength: 2000,
            })}
          />
          {errors.message && (
            <p className='text-rose-600 mt-1'>
              {errors.email.type === "required" && "This field is required."}
              {errors.email.type === "maxLength" &&
                "Max length is 2000 character."}
            </p>
          )}
          <div className='text-center'>
            <button
              type='submit'
              className='pr-20 pl-20 pt-5 pb-5 bg-yellow font-semibold text-zinc-950 mt-5 hover:text-white transition duration-500 rounded-sm'
            >
              SEND ME A MESSAGE
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
