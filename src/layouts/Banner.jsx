import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section className='pt-20'>
      <div className='banners grid gap-4 sm:grid-cols-2'>
        <article className='rounded-2xl h-96 text-center text-white sm:col-start-2 sm:row-span-2 sm:h-full'>
          <h4 className='text-xs tracking-wider mt-4 lg:text-sm'>BIG SALE</h4>
          <h3 className='tracking-widest text-lg mt-2 lg:text-4xl lg:max-w-sm lg:mx-auto lg:mb-3'>
            Up to 40% off furniture & decor
          </h3>
          <Link
            to='/products'
            className='text-xs font-bold underline underline-offset-2'>
            SHOP NOW
          </Link>
        </article>
        <article className='rounded-2xl h-60 pl-4 pt-4 text-black sm:row-start-1'>
          <h4 className='text-xl tracking-widest lg:text-3xl'>Up to 30% off</h4>
          <h3 className='text-xl tracking-widest lg:text-3xl mb-3'>
            Top lamp brands
          </h3>
          <Link
            to='/products'
            className='text-xs font-bold underline underline-offset-2'>
            SHOP NOW
          </Link>
        </article>
        <article className='rounded-2xl h-60 pl-4 pt-4 text-black sm:row-start-2'>
          <h4 className='text-xs font-bold'>New Products</h4>
          <h3 className='text-xl lg:text-3xl font-bold mt-2 mb-4 tracking-wide'>
            Up to 25% off cabinet
          </h3>
          <Link
            to='/products'
            className='text-xs font-bold underline underline-offset-2'>
            SHOP NOW
          </Link>
        </article>
        <article className='rounded-2xl h-64 text-center sm:text-start sm:flex sm:items-center sm:gap-8 sm:pl-8 text-black sm:col-span-2 sm:row-span-1 sm:h-40'>
          <h4 className='mt-4 font-bold text-5xl sm:text-6xl'>10%</h4>
          <div className='sm:mt-3'>
            <h3 className='text-xl tracking-wide mt-2 sm:text-3xl sm:tracking-widest'>
              Get more pay less
            </h3>
            <p className='text-xs mt-1 sm:text-sm'>
              On orders $500 + use coupon code:
              <span className='font-semibold'> CMFY10</span>
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Banner;
