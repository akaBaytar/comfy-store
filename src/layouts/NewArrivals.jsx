import { Grid } from '../layouts';
import { Title } from '../components';

const Featured = () => {
  return (
    <section className='pt-20 '>
      <Title text={'new arrivals'} />
      <Grid title='new arrivals'/>
    </section>
  );
};

export default Featured;
