import React from 'react';
import Average from '../Average/Average';
import BuyButton from '../buyButton/BuyButton';
import { Wrapper, FilmInfo } from './FilmStyle';
import ImageCover from './imageCover/ImageCover';

const Film = ({
  id,
  title,
  vote_average,
  release_date,
  poster_path,
  movie,
  price,
  handleAddProduct,
}) => {
  return (
    <>
      <Wrapper>
        <ImageCover
          id={id}
          release_date={release_date}
          poster_path={poster_path}
        />
        <FilmInfo>
          <h4>{title}</h4>
          <Average vote_average={vote_average} />
          <p>R$ {price}</p>
        </FilmInfo>
        <BuyButton
          id={id}
          title={title}
          price={price}
          vote_average={vote_average}
          poster_path={poster_path}
          handleAddProduct={handleAddProduct}
        />
      </Wrapper>
    </>
  );
};

export default Film;
