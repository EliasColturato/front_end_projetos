import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { APIKey } from '../../configs/key';
import {
  Wrapper,
  Container,
  Overview,
  InfoFilm,
  ControllButton,
} from './DetailsStyle';
import BuyButton from '../../components/buyButton/BuyButton';
import GoBack from '../../components/goBack/GoBack';

export default function Details({ handleAddProduct }) {
  const image_path = 'https://image.tmdb.org/t/p/w500';
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=pt-BR&page=1`
    )
      .then(response => response.json())
      .then(data => {
        const { title, poster_path, overview, release_date, vote_average } =
          data;
        const movie = {
          id,
          title: title,
          descricao: overview,
          image: `${image_path}${poster_path}`,
          releaseDate: release_date,
          voteAverage: vote_average,
        };
        setMovie(movie);
      });
  }, [id]);

  return (
    <>
      <Wrapper>
        <Container>
          <img src={movie.image} alt={movie.id} />
          <Overview>
            <h1>{movie.title}</h1>
            <p>{movie.descricao}</p>
            <InfoFilm>
              <span>{movie.voteAverage}</span>
              <GoBack />
              <span>{movie.releaseDate}</span>
            </InfoFilm>
          </Overview>
        </Container>
        <ControllButton>
          <BuyButton
            buttonText="Adicionar"
            handleAddProduct={handleAddProduct}
          />
        </ControllButton>
      </Wrapper>
    </>
  );
}
