import { Form } from 'react-router-dom';
import { FormInput, SubmitButton } from '../../components';

const Checkout = () => {
  return (
    <Form method='POST' className='flex flex-col'>
      <h4 className='font-medium text-xl mb-4'>Shipping Information</h4>
      <FormInput label='Full Name:' name='name' type='text' required={true} />
      <FormInput label='Address:' name='address' type='text' required={true} />
      <div className='mt-8'>
        <SubmitButton text='Place Your Order' />
      </div>
    </Form>
  );
};

export default Checkout;
