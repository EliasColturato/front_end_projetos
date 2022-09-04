import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, IconCover, DataCover } from './imageCoverStyle';

export default function ImageCover({ id, release_date, poster_path }) {
  const image_path = 'https://image.tmdb.org/t/p/w500';

  return (
    <>
      <Wrapper>
        <IconCover>
          <ion-icon name="heart"></ion-icon>
        </IconCover>
        <Link to={`/details/${id}`}>
          <DataCover>
            <h3>Lançado em: {release_date}</h3>
          </DataCover>
          <img
            src={`${image_path}${poster_path}`}
            alt="Não foi possível encontrar uma imagem."
          />
        </Link>
      </Wrapper>
    </>
  );
}
