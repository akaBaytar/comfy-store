import { Fragment } from 'react';
import {
  Hero,
  Categories,
  Featured,
  Banner,
  NewArrivals,
  Blogs,
} from '../../layouts';

const Landing = () => {
  return (
    <Fragment>
      <Hero />
      <Categories />
      <Featured />
      <Banner />
      <NewArrivals />
      <Blogs />
    </Fragment>
  );
};

export default Landing;
