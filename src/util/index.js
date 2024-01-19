import axios from 'axios';

export const links = [
  { id: 1, url: '/', text: 'Home' },
  { id: 2, url: '/about', text: 'About' },
  { id: 3, url: '/products', text: 'Products' },
  { id: 4, url: '/cart', text: 'Cart' },
  { id: 5, url: '/checkout', text: 'Checkout' },
  { id: 6, url: '/orders', text: 'Orders' },
];

const URL = 'https://strapi-store-server.onrender.com/api';

export const fetchAPI = axios.create({
  baseURL: URL,
});