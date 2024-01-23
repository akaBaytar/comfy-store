import { Link } from 'react-router-dom';

import { Title } from '../../components';
import { categories } from '../../util';

const Categories = () => {
  return (
    <section className='pt-20'>
      <Title text={'all categories'} />
      <div className='pt-8 grid gap-8 grid-cols-2 md:grid-cols-3'>
        {categories.map(({ id, img, text, count }) => (
          <Link
            key={id}
            to='/products'
            className='py-1 flex items-center gap-4 lg:gap-8 group'>
            <div className='bg-base-300 rounded-full w-24 h-24 md:w-28 md:h-28 grid place-items-center'>
              <img
                src={img}
                alt={text}
                className='h-20 md:h-24 object-cover group-hover:scale-125 duration-200'
              />
            </div>
            <div className=''>
              <h2 className='font-bold text-lg md:text-xl'>{text}</h2>
              <span className='text-xs md:text-sm text-secondary'>{`${count} products`}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
