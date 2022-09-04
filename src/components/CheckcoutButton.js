import React from 'react';
import { Link } from 'react-router-dom';

export const CheckcoutButton = () => {
  return (
    <>
      <Link to="/cart">
        <button>Ver o carrinho completo</button>
      </Link>
    </>
  );
};
