import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/ProductItem/ProductItem';
import s from './style.module.css';

export default function CategoryProductsPage() {
  const { category } = useParams();
  const products = useSelector(({products}) => products.filter (item => item.category === category));

    return (
    <div>
     {
      products.length === 0
      ? <p>Nicht gefunden</p>
      : <>
       <h1>{category}</h1>
      <div className={s.container}>
        {
          products.map((product) => <ProductItem key={product.id} {...product}/>)
        }
      </div>
     </>
     }
    </div>
  )
}

