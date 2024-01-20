import { Fragment } from 'react';
import { Hero, Categories, Featured, Banner } from '../layouts';

const Landing = () => {
  return (
    <Fragment>
      <Hero />
      <Categories />
      <Featured />
      <Banner />
    </Fragment>
  );
};

export default Landing;
