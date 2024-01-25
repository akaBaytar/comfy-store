import { useDispatch } from 'react-redux';
import { Form, Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { FormInput, SubmitButton } from '../../components';
import { login } from '../../tools/user/userSlice';
import { fetchAPI } from '../../util';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginAsDemoUser = async () => {
    try {
      const url = '/auth/local';
      const res = await fetchAPI.post(url, {
        identifier: 'test@test.com',
        password: 'secret',
      });

      dispatch(login(res.data));
      toast.success('You have logged in as a Demo User.');
      navigate('/');
    } catch (error) {
      toast.error(
        'Demo User Login Error - Please check the information you entered.'
      );
    }
  };

  return (
    <section className='h-screen grid place-items-center'>
      <Form
        method='post'
        className='card flex flex-col w-96 p-8 gap-y-4 bg-base-100 shadow-lg'>
        <h4 className='text-center text-2xl font-bold'>Login</h4>
        <FormInput
          type='email'
          label='Email'
          name='identifier'
          required={true}
        />
        <FormInput
          type='password'
          label='Password'
          name='password'
          required={true}
        />
        <div className='mt-4'>
          <SubmitButton text='Login' />
        </div>
        <p className='text-center'>
          Not a member yet?
          <Link to='/register' className='link link-hover link-primary ml-1'>
            Register
          </Link>
        </p>
        <div className='mt-4 text-xs bg-base-200 p-2 rounded-lg'>
          <p>
            If you&apos;d like, you can log in as a demo user with the following
            information;
          </p>
          <p className='mt-2'>
            <strong>Email: </strong>
            <code>test@test.com</code>
          </p>
          <p>
            <strong>Password: </strong>
            <code>secret</code>
          </p>
          <button
            type='button'
            className='btn btn-neutral btn-xs mt-2'
            onClick={loginAsDemoUser}>
            Log in as a Demo User
          </button>
        </div>
      </Form>
    </section>
  );
};

export default Login;
