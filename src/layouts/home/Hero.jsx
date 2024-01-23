import { Link } from 'react-router-dom';
import { Carousel } from '../../components';

const Hero = () => {
  return (
    <section className='grid lg:grid-cols-2 items-center gap-y-20'>
      <div className='text-center lg:text-start mx-auto'>
        <h1 className='max-w-2xl text-4xl sm:text-6xl font-bold tracking-tight'>
          We are changing the way people shop
        </h1>
        <p className='mx-auto mt-8 max-w-xl text-lg sm:text-xl leading-8'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          praesentium, incidunt explicabo inventore vero voluptates minus
          provident labore laudantium quae.
        </p>
        <div className='mt-8'>
          <Link to='/products' className='btn btn-primary'>
            Our Products
          </Link>
        </div>
      </div>
      <div className='h-[30rem] lg:mx-0 min-w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-96 p-4 bg-neutral rounded-box lg:justify-self-end'>
        <Carousel />
      </div>
    </section>
  );
};

export default Hero;
