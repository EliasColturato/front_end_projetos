import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import { Cart } from './pages/cart/Cart';
import Details from './pages/details/Details';
import Home from './pages/Home';
import Search from './pages/search/Search';

export default function MyRoutes() {
  const [listProduct, setListProduct] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

  const handleAddProduct = product => {
    const produtoslista = listProduct.map(item => item);
    const isDuplicate = listProduct.filter(item => item.id === product.id);
    if (isDuplicate.length <= 0) {
      setListProduct([
        ...produtoslista,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          poster_path: product.poster_path,
          vote_average: product.vote_average,
        },
      ]);
    }
  };
  const handleRemoveProduct = id => {
    const produtoslista = listProduct.filter(item => item.id !== id);
    setListProduct([...produtoslista]);
  };
  const handleRemoveAll = () => {
    setListProduct([]);
  };
  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < listProduct.length; i++) {
      sum += listProduct[i].price;
    }
    setTotalValue(sum.toFixed(2));
  }, [listProduct]);
  return (
    <>
      <Router>
        <Header
          listProduct={listProduct}
          handleRemoveProduct={handleRemoveProduct}
          handleRemoveAll={handleRemoveAll}
          totalValue={totalValue}
        />
        <Routes>
          <Route
            path="/"
            element={<Home handleAddProduct={handleAddProduct} />}
          />
          <Route
            path="/details/:id"
            element={<Details handleAddProduct={handleAddProduct} />}
          />
          <Route
            path="/search"
            element={
              <Search
                listProduct={listProduct}
                handleAddProduct={handleAddProduct}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                listProduct={listProduct}
                handleRemoveProduct={handleRemoveProduct}
                totalValue={totalValue}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}
