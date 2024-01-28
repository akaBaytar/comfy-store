import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  About,
  Cart,
  Checkout,
  Error,
  Home,
  Landing,
  Login,
  Orders,
  Product,
  Products,
  Register,
} from './pages';

import { Error as ErrorElement } from './components';

import {
  landing,
  product,
  products,
  checkout,
  registerAction,
  loginAction,
  checkoutAction,
} from './util';

import { store } from './tools/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landing,
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: products,
      },
      {
        path: 'products/:id',
        element: <Product />,
        errorElement: <ErrorElement />,
        loader: product,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
        loader: checkout(store),
        action: checkoutAction(store),
      },
      {
        path: 'orders',
        element: <Orders />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
