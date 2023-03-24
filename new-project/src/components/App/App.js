import React, { useEffect } from "react";
import { Routes, Route} from 'react-router-dom';
import CategoriesPage from '../../pages/CategoriesPage/CategoriesPage';
import BasketPage from '../../pages/BasketPage/BasketPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import Nav from "../Nav/Nav";
import './app.css';
import { useDispatch } from 'react-redux';
import { loadCategoryAction } from '../../store/asyncAction/category';
import { loadProductsAction } from "../../store/asyncAction/products";
import ProductsPage from "../../pages/ProductsPage/ProductsPage";
import CategoryProductsPage from '../../pages/CategoryProductsPage/CategoryProductsPage';
import ProductsDescriptionPage from '../../pages/ProductsDescriptionPage/ProductsDescriptionPage';


function App() {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(loadCategoryAction);
    dispatch(loadProductsAction);
  }, []);
  return (
    <div>
      <Nav/>
       <Routes>
        <Route path="/" element={<CategoriesPage/>}/>
        <Route path="/basket" element={<BasketPage/>}/>
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/products/:category" element={<CategoryProductsPage/>}/>
        <Route path="/product/:id" element={<ProductsDescriptionPage/>}/>
        <Route path="/*" element={<NotFoundPage/>}/>
      </Routes>
   </div>
  )
}

export default App;
