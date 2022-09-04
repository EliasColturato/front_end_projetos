import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './GoBackStyle';

export default function GoBack() {
  return (
    <Wrapper>
      <Link to="/">
        <button>
          <h3>Voltar</h3>
        </button>
      </Link>
    </Wrapper>
  );
}
