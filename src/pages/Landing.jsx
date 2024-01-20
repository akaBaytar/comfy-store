import { Fragment } from 'react';
import { Hero, Categories, Featured } from '../layouts';

const Landing = () => {
  return (
    <Fragment>
      <Hero />
      <Categories />
      <Featured />
    </Fragment>
  );
};

export default Landing;
