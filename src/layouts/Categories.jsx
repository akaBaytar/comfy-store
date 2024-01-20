import { Link } from 'react-router-dom';

import { Title } from '../components';
import { categories } from '../util';

const Categories = () => {
  return (
    <section className='pt-20'>
      <Title text={'all categories'} />
      <div className='pt-8 grid gap-8 grid-cols-2 lg:grid-cols-3'>
        {categories.map(({ id, img, text }) => (
          <Link
            key={id}
            to='/products'
            className='card card-compact shadow-lg group overflow-hidden'>
            <img
              src={img}
              alt={text}
              className='rounded-t-xl h-32 object-contain group-hover:scale-110 duration-200'
            />
            <div className='card-body items-center text-center'>
              <h2 className='card-title'>{text}</h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
