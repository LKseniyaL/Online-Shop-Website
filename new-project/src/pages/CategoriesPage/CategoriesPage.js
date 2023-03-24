import React from 'react';
import { useSelector } from 'react-redux';
import s from './style.module.css';
import CategoryCard from '../../components/CategoryCard/CategoryCard';

export default function CategoriesPage() {

  const categories = useSelector(state => state.categories);

  return (
    <div className={s.container}>
      
      <div className={s.cardsContainer}>
      {
        categories.map(item => {
          return <CategoryCard key={item} title={item}/>
        })
      }
      </div>
    </div>
  )
}
