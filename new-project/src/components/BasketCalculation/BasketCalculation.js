import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import s from './style.module.css';
import { basketDelete } from '../../store/reducer/basketReducer';


export default function BasketCalculation() {
    const dispatch = useDispatch();
    const {basket, products} = useSelector(state => state);
    const productsInBasket = basket.map((item) => {
        const product = products.find(({id}) => id === item.id);
        return {...item, ...product};
    })
    const totalCount = basket.reduce((acc, {count}) => acc + count, 0);
    const totalSum = productsInBasket.reduce((acc, {count, price}) => acc + count * price, 0);
  return (
    <div className={s.item}>
        <p>{totalCount} Stück</p>  <br/>
        <p>Gesamtsumme: {totalSum}$</p>
        <button className={s.bth_delete} onClick={()=> dispatch(basketDelete())}>X</button>
    </div>
  )
}
