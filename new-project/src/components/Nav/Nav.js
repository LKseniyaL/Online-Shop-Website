import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './style.module.css';


export default function Nav() {
  
  const classActive = ({isActive}) => isActive ? s.active : '';

  return (
    <nav className={s.nav}>
      <NavLink className={classActive} to='/'>Kategorien</NavLink>
      <NavLink className={classActive} to='/products'>Alle Waren</NavLink>
      <NavLink className={classActive} to='/basket'>Einkaufstasche</NavLink>
    </nav>
  )
}

