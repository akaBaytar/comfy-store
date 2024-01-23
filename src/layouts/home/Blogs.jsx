import { Link } from 'react-router-dom';
import { Title } from '../../components';
import { blogs } from '../../util';

const Blogs = () => {
  return (
    <section className='pt-20'>
      <Title text='from our blog' />
      <div className='grid gap-8 pt-8 sm:grid-cols-2 lg:grid-cols-3'>
        {blogs.map(({ id, img, title, comments, date }) => (
          <article key={id} className='card w-full shadow-lg'>
            <img
              src={img}
              alt={title}
              className='rounded-t-xl h-64 md:h-48 w-full object-cover'
            />
            <div className='card-body bg-base-200 rounded-b-xl'>
              <h2 className='card-title text-lg tracking-tight mx-auto'>
                {title}
              </h2>
              <div className='flex gap-3 py-3 justify-center rounded-lg text-xs'>
                <span>{`${
                  comments <= 1 ? `${comments} comment` : `${comments} comments`
                }`}</span>
                —<span>{date}</span>
              </div>
              <Link className='link mx-auto text-xs text-secondary'>
                Read More
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
