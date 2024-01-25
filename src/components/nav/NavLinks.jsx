import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { links } from '../../util';

const NavLinks = () => {
  const user = useSelector((state) => state.userState.user);

  return (
    <Fragment>
      {links.map(({ id, url, text }) => {
        if ((url === '/checkout' || url === '/orders') && !user) return null;

        return (
          <li key={id}>
            <NavLink to={url}>{text}</NavLink>
          </li>
        );
      })}
    </Fragment>
  );
};

export default NavLinks;
