import { Link, Form, useLoaderData } from 'react-router-dom';
import { FormInput, FormSelect } from '../components';

const Filters = () => {
  const { meta } = useLoaderData();
  const { categories, companies } = meta;

  return (
    <Form className='bg-base-200 rounded-xl px-8 py-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 items-center'>
      <FormInput
        type='search'
        label='Search Product'
        name='search'
        size='input-sm'
      />
      <FormSelect
        label='Categories'
        name='category'
        list={categories}
        size='select-sm'
      />
      <FormSelect
        label='Companies'
        name='company'
        list={companies}
        size='select-sm'
      />
      <FormSelect
        label='Sort by'
        name='order'
        list={['A - Z', 'Z - A', 'High Price', 'Low Price']}
        size='select-sm'
      />
      <button type='submit' className='btn btn-primary btn-sm'>
        Search
      </button>
      <Link to='/products' className='btn btn-warning btn-sm'>
        Reset
      </Link>
    </Form>
  );
};

export default Filters;
