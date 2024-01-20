import { Fragment } from 'react';
import { Hero, Categories, Featured, Banner, NewArrivals } from '../layouts';

const Landing = () => {
  return (
    <Fragment>
      <Hero />
      <Categories />
      <Featured />
      <Banner />
      <NewArrivals />
    </Fragment>
  );
};

export default Landing;
