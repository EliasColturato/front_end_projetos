import React from 'react';
import { Wrapper } from './BuyButtonStyle';

export default function BuyButton({
  handleAddProduct,
  id,
  title,
  price,
  poster_path,
  vote_average,
}) {
  return (
    <>
      <Wrapper>
        <button
          onClick={() =>
            handleAddProduct({
              id: id,
              title: title,
              price: price,
              poster_path: poster_path,
              vote_average: vote_average,
            })
          }
        >
          <h3>Adicionar</h3>
        </button>
      </Wrapper>
    </>
  );
}
