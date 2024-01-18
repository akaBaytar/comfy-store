import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import { links } from '../../data';

const NavLinks = () => {
  return (
    <Fragment>
      {links.map(({ id, url, text }) => (
        <li key={id}>
          <NavLink to={url}>{text}</NavLink>
        </li>
      ))}
    </Fragment>
  );
};

export default NavLinks;
