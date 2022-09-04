import React, { useState } from 'react';
import { Wrapper } from './SearchStyle';
import { useNavigate } from 'react-router-dom';

export default function Search() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if (!search) return;

    navigate(`/search?q=${search}`);
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          type={'text'}
          placeholder="Pesquisar"
          onChange={e => setSearch(e.target.value)}
          value={search}
        ></input>
        <button
          type="submit"
          onChange={e => setSearch(e.target.value)}
          value={search}
        >
          <ion-icon name="search-outline"></ion-icon>
        </button>
      </form>
    </Wrapper>
  );
}
