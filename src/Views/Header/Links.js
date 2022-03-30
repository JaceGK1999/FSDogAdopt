import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Links() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to={'/create'}>Create your dog!!!</NavLink>
        </li>
        <li>
          <NavLink to={'/'}>Back to all dogs!</NavLink>
        </li>
      </ul>
    </div>
  );
}
