import axios from 'axios';

// navigation links
export const links = [
  { id: 1, url: '/', text: 'Home' },
  { id: 2, url: '/about', text: 'About' },
  { id: 3, url: '/products', text: 'Products' },
  { id: 4, url: '/cart', text: 'Cart' },
  { id: 5, url: '/checkout', text: 'Checkout' },
  { id: 6, url: '/orders', text: 'Orders' },
];

// base URL
const URL = 'https://strapi-store-server.onrender.com/api';

// axios
export const fetchAPI = axios.create({
  baseURL: URL,
});

// loaders
export const landing = async () => {
  const url = '/products?featured=true';
  const res = await fetchAPI(url);

  const products = res.data.data;

  return { products };
};

// displaying price in dollars
export const formattedPrice = (price) => {
  const amount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100).toFixed(2));

  return amount;
};
