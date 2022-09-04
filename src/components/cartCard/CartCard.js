import React from 'react';
import { Wrapper } from './CartCardStyle';

export const CartCard = ({
  id,
  title,
  price,
  handleRemoveProduct,
  poster_path,
}) => {
  const image_path = 'https://image.tmdb.org/t/p/w500';
  return (
    <>
      <Wrapper>
        <img src={`${image_path}${poster_path}`} alt={id} />
        <p>{title}</p>
        <p>1</p>
        <p>{price}</p>

        <button onClick={() => handleRemoveProduct(id)}>
          <ion-icon name="trash"></ion-icon>
        </button>
      </Wrapper>
    </>
  );
};
