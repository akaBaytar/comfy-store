import { Link } from 'react-router-dom';
import { FaXTwitter, FaLinkedin, FaGithub } from 'react-icons/fa6';

const date = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className='bg-base-200'>
      <div className='footer footer-center md:footer py-8 px-6 sm:px-12 lg:aligning'>
        <aside>
          <Link
            to='/'
            className='text-2xl font-bold btn btn-active'>
            C
          </Link>
          <p className='font-semibold'>Comfy Store Ltd.</p>
          <p className='font-semibold'>
            Elevating comfort, redefining style since 1992
          </p>
          <div className='grid grid-flow-col gap-4 text-2xl mt-8 md:mt-0'>
            <Link
              to='https://twitter.com/akaBaytar'
              target='_blank'
              rel='noreferrer'>
              <FaXTwitter />
            </Link>
            <Link
              to='https://github.com/akaBaytar'
              target='_blank'
              rel='noreferrer'>
              <FaGithub />
            </Link>
            <Link
              to='https://www.linkedin.com/in/akabaytar/'
              target='_blank'
              rel='noreferrer'>
              <FaLinkedin />
            </Link>
          </div>
        </aside>
        <nav>
          <header className='footer-title'>Services</header>
          <a className='link link-hover'>Branding</a>
          <a className='link link-hover'>Design</a>
          <a className='link link-hover'>Marketing</a>
          <a className='link link-hover'>Advertisement</a>
        </nav>
        <nav>
          <header className='footer-title'>Company</header>
          <a className='link link-hover'>About us</a>
          <a className='link link-hover'>Contact</a>
          <a className='link link-hover'>Jobs</a>
          <a className='link link-hover'>Press kit</a>
        </nav>
        <nav>
          <header className='footer-title'>Legal</header>
          <a className='link link-hover'>Terms of use</a>
          <a className='link link-hover'>Privacy policy</a>
          <a className='link link-hover'>Cookie policy</a>
        </nav>
      </div>{' '}
      <div className='text-center text-xs bg-base-300 py-2'>
        <p>Copyright © {date} - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
