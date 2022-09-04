import React from 'react';
import { ButtonBuy } from './EndBuyStyle';
import { Link } from 'react-router-dom';

export const EndBuy = () => {
  return (
    <ButtonBuy>
      <Link
        to="/cart"
        style={{
          textDecoration: 'none',
        }}
      >
        <h3>Finalizar Compra</h3>
      </Link>
    </ButtonBuy>
  );
};
