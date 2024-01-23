import { Link, Form, useLoaderData } from 'react-router-dom';
import { FormInput, FormSelect, FormRange, FormCheckbox } from '..';

const Filters = () => {
  const { meta, params } = useLoaderData();
  const { categories, companies } = meta;
  const { search, company, category, shipping, order, price } = params;

  return (
    <Form className='bg-base-200 rounded-xl -mx-1 px-8 py-4 grid gap-y-4 gap-x-8 sm:grid-cols-2 lg:grid-cols-4 items-center lg:width'>
      <FormInput
        type='search'
        label='Search Product'
        name='search'
        size='input-sm'
        defaultValue={search}
      />
      <FormSelect
        label='Categories'
        name='category'
        list={categories}
        size='select-sm'
        defaultValue={category}
      />
      <FormSelect
        label='Companies'
        name='company'
        list={companies}
        size='select-sm'
        defaultValue={company}
      />
      <FormSelect
        label='Sort by'
        name='order'
        list={['A - Z', 'Z - A', 'High Price', 'Low Price']}
        size='select-sm'
        defaultValue={order}
      />
      <FormRange name='price' label='Price' size='range-sm' price={price} />
      <FormCheckbox
        name='shipping'
        label='Free Shipping'
        size='checkbox-sm'
        defaultValue={shipping}
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
