import linkedinPic from "../assets/linkedin_icon.png";
import InstagramPic from "../assets/instagram-icon.png";

const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center my-5 gap-7 md:pl-5'>
      <a
        className='hover:opacity-80 transition duration-500'
        href='https://www.linkedin.com/in/john-clarke-john-klark-7782701b9/'
        target='_blank'
        rel='noreferrer'
      >
        <img alt='linkedin-link' src={linkedinPic} className='w-8 h-8' />
      </a>
      <a
        className='hover:opacity-80 transition duration-500'
        href='https://www.instagram.com/johnnkklarkk/'
        target='_blank'
        rel='noreferrer'
      >
        <img alt='instagram-link' src={InstagramPic} className='w-10 h-10' />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
