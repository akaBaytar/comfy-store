import { Fragment, useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';

import Spinner from '../shared/Spinner';
import { Grid, List } from '../../layouts';
import { BsGrid, BsListUl } from 'react-icons/bs';

const Products = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  const { meta } = useLoaderData();
  const { total } = meta.pagination;

  const [layout, setLayout] = useState('grid');

  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? 'btn-primary text-primary-content'
        : 'text-base-content'
    }`;
  };

  if (isLoading) return <Spinner />;

  return (
    <Fragment>
      <div className='flex justify-between items-center mt-8 pb-4 border-b border-base-300'>
        <h4 className='font-medium'>
          {total <= 1 ? `${total} product` : `${total} products`}
        </h4>
        <div className='flex gap-x-2'>
          <button
            type='button'
            onClick={() => setLayout('grid')}
            className={setActiveStyles('grid')}>
            <BsGrid />
          </button>
          <button
            type='button'
            onClick={() => setLayout('list')}
            className={setActiveStyles('list')}>
            <BsListUl />
          </button>
        </div>
      </div>
      <div className='lg:width'>
        {total === 0 ? (
          <h5 className='text-xl mt-8'>
            We&apos;re sorry, no products matching your criteria were found.
          </h5>
        ) : layout === 'grid' ? (
          <Grid title='featured' />
        ) : (
          <List title='featured' />
        )}
      </div>
    </Fragment>
  );
};

export default Products;
