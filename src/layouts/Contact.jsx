import { Link } from 'react-router-dom';
const Contact = () => {
  return (
    <section className='py-20 bg-base-300'>
      <div className='px-6 sm:px-12 lg:aligning'>
        <h3>Get our emails for info on new items, sales and more.</h3>
        <p>
          We&apos;ll email you a voucher worth $10 off your first order over
          $50.
        </p>
        <div>
          <input type='email' id='email' autoComplete='email' />
          <button>Subscribe</button>
          <p>
            By subscribing you agree to our <Link>Terms & Conditions</Link> and
            <Link>Privacy & Cookies Policy</Link>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
