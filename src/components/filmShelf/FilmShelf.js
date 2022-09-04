import React, { useState, useEffect } from 'react';
import { APIKey } from '../../configs/key';
import Film from '../film/Film';
import { Container, Wrapper, Content } from './FilmShelfStyle';
import { price } from '../../data/data';
import { EndBuy } from '../sideBar/endBuy/EndBuy';

export default function FilmShelf({ handleAddProduct }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(`
      https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=pt-BR&page=1`)
      .then(response => response.json())
      .then(data => setMovie(data.results));
  }, []);

  return (
    <Container>
      <Content>
        <EndBuy />
      </Content>
      <Wrapper>
        {movie.map(movie => {
          return (
            <Film
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              vote_average={movie.vote_average}
              release_date={movie.release_date}
              handleAddProduct={handleAddProduct}
              price={price}
            />
          );
        })}
      </Wrapper>
    </Container>
  );
}
