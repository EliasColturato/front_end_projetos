import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Film from '../../components/film/Film';
import { APIKey } from '../../configs/key';
import { price } from '../../data/data';
import ResultsTitle from './resultsTitle/ResultsTitle';
import { Wrapper, Container, Content } from './SearchStyle';

const Search = ({ listProduct, handleAddProduct }) => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('q');
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&query=${query}&language=pt-BR&page=1&include_adult=false`
    )
      .then(response => response.json())
      .then(data => setMovies(data.results));
  });

  return (
    <>
      <Wrapper>
        <Container>
          <ResultsTitle query={query} />
          <Content>
            {movies.map(movies => {
              return (
                <Film
                  key={movies.id}
                  id={movies.id}
                  title={movies.title}
                  poster_path={movies.poster_path}
                  vote_average={movies.vote_average}
                  release_date={movies.release_date}
                  listProdut={listProduct}
                  handleAddProduct={handleAddProduct}
                  price={price}
                />
              );
            })}
          </Content>
        </Container>
      </Wrapper>
    </>
  );
};

export default Search;
