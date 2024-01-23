import { Link } from 'react-router-dom';
import { Navbar } from '../../components';

const Header = () => {
  return (
    <header>
      <div className='py-2 text-xs text-center text-base-300 bg-primary'>
        <p className='text-balance text-white leading-5'>
          FREE EXPRESS INTERNATIONAL DELIVERY - OFF 50%!
          <Link
            to='/products'
            className='text-xs ml-1 px-1 py-0.5 bg-secondary rounded-md'>
            SHOP NOW
          </Link>
        </p>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
