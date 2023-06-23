import { NavLink } from 'react-router-dom';

import clasess from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={clasess.header}>
      <nav>
        <ul className={clasess.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? clasess.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? clasess.active : undefined
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
