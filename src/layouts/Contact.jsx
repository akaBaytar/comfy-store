import { Link } from 'react-router-dom';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className='py-20 bg-base-300 '>
      <div className='flex flex-col md:flex-row gap-10 md:justify-between px-6 sm:px-12 lg:aligning'>
        <div>
          <h3 className='text-2xl font-semibold max-w-md'>
            Get our emails for info on new items, sales and more.
          </h3>
          <p className='text-[0.68rem] ml-1 opacity-50'>
            We&apos;ll email you a voucher worth $50 off your first order over
            $500.
          </p>
          <div className='mt-5 bg-neutral flex items-center justify-between rounded-lg max-w-md'>
            <input
              type='email'
              id='email'
              autoComplete='email'
              placeholder='Enter your e-mail address'
              className='py-4 px-8 text-sm w-full bg-neutral text-neutral-content placeholder:text-neutral-content outline-none rounded-l-lg'
            />
            <button className='bg-neutral-content text-neutral text-xs py-3.5 px-7 mr-1 active:scale-95 duration-200 rounded-r-lg'>
              Subscribe
            </button>
          </div>
          <p className='text-[0.68rem] mt-1 ml-1 opacity-50'>
            By subscribing you agree to our <Link>Terms & Conditions</Link> and
            <Link> Privacy & Cookies Policy</Link>.
          </p>
        </div>
        <div className='md:text-end'>
          <h3 className='text-2xl font-semibold'>Need Help?</h3>
          <h3 className='text-2xl font-semibold tracking-wider'>
            +(90) 212 33 44
          </h3>
          <p className='text-[0.68rem] ml-1 opacity-50'>
            We are available 8am - 7pm
          </p>
          <div className='mt-5 flex items-center gap-5 md:justify-end'>
            <Link
              to='https://play.google.com/store/games?device=windows'
              target='_blank'
              rel='noreferrer'>
              <div className='flex items-center justify-center gap-2 h-[3.25rem] w-32 text-neutral-content bg-neutral rounded-lg'>
                <FaApple className='text-2xl' />
                <div className='h-[3.25rem] flex flex-col justify-center'>
                  <small className='text-[0.5rem]'>DOWNLOAD ON THE</small>
                  <p className='text-[0.75rem] -mt-1'>App Store</p>
                </div>
              </div>
            </Link>
            <Link
              to='https://play.google.com/store/games?device=windows'
              target='_blank'
              rel='noreferrer'>
              <div className='flex items-center justify-center gap-2 h-[3.25rem] w-32 text-neutral-content bg-neutral rounded-lg'>
                <FaGooglePlay className='text-2xl' />
                <div className='h-[3.25rem] flex flex-col justify-center'>
                  <small className='text-[0.5rem]'>GET IT ON</small>
                  <p className='text-[0.75rem] -mt-1'>Google Play</p>
                </div>
              </div>
            </Link>
          </div>
          <p className='text-[0.68rem] mt-1 ml-1 opacity-50'>
            Try our View in Your Room feature, manage registries and save
            payment info.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
