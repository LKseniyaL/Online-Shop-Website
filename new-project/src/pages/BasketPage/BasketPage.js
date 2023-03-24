import React from 'react';
import { useSelector } from 'react-redux';
import BasketCalculation from '../../components/BasketCalculation/BasketCalculation';
import BasketItem from '../../components/BasketItem/BasketItem';
import s from './style.module.css';

export default function BasketPage() {
  const {basket, products} = useSelector(state => state);
  const data = basket.map((item) => ({...item, ...products.find(({id}) => id === item.id)}))
  return (
    <div className={s.container}>
      {
         data.length === 0
         ?
         <p>Einkaufswagen ist leer</p> 
         :<>
       <div>
        {
        data.map(item => <BasketItem key={item.id} {...item} />)
        }
        </div>
        <BasketCalculation/>
        </>
      }
    </div>
  )
}
