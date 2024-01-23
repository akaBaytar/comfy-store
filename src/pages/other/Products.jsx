import { Fragment } from 'react';
import { Filters, Pagination, Products as Container } from '../../components';

const Products = () => {
  return (
    <Fragment>
      <Filters />
      <Container />
      <Pagination />
    </Fragment>
  );
};

export default Products;
