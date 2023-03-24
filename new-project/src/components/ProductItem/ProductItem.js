import React from 'react';
import s from './style.module.css';
import { Link } from 'react-router-dom';
import { basketAddAction } from '../../store/reducer/basketReducer';
import { useDispatch } from 'react-redux';

export default function ProductItem({title, image, id}) {
  const dispatch = useDispatch();
  return (
    <div className={s.item}>
      <Link to={`/product/${id}`}>
        <img src={image} alt={title}/>
        <p>{title}</p>
      </Link>
      <button onClick={() => dispatch(basketAddAction(id))} className={s.bth}>Hinzufügen</button>
    </div>
  )
}
