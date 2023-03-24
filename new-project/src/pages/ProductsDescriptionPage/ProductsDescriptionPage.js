import React from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { basketAddAction } from '../../store/reducer/basketReducer';
import s from './style.module.css';


export default function ProductsDescriptionPage() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {title, image, price, description} = useSelector(({products}) => products.find(item => item.id === +id));

  return (
    <div className={s.container}>
      <img src={image} alt={title} />
      <div className={s.info}>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className={s.sale_block}>
          <p>Prise: {price}$</p>
          <button onClick={() => dispatch(basketAddAction(+id))}>Hinzufügen</button>
        </div>
      </div>
    </div>
  )
}
