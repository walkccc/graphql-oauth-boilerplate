import React from 'react';

import { NavLink } from 'react-router-dom';

export const AppHeader = () => {
  return (
    <header>
      <NavLink to="/">Go to '/'</NavLink>
      <br />
      <NavLink to="/login">Go to '/login'</NavLink>
    </header>
  );
};
