import React from 'react';
import s from './style.module.css';
import { useDispatch } from 'react-redux';
import { basketDecAction, basketDeleteItem, basketIncAction } from '../../store/reducer/basketReducer';

export default function BasketItem({id, image, title, count, price}) {
  const dispatch = useDispatch();
  return (
    <div className={s.item}>
        <img src={image} alt={title} />
        <p>{title}</p>
        <p>{price}$ x {count} = {(price * count).toFixed(2)}$</p>
        <div className={s.bth_container}>
            <button className={s.bth} onClick={() => dispatch(basketIncAction(id))}>+</button>
            <button className={s.bth} onClick={() => dispatch(basketDecAction(id))}>-</button>
            <button className={s.deleteItem} onClick={()=> dispatch(basketDeleteItem(+id))}>X</button>
        </div>
    </div>
  )
}
