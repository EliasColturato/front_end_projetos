import React from 'react';
import GoBack from '../../../components/goBack/GoBack';
import { Wrapper } from './ResultsStyle';

export default function ResultsTitle({ query }) {
  return (
    <Wrapper>
      <h2>
        Os resultados para:
        <span>{query}</span>
      </h2>
      <GoBack />
    </Wrapper>
  );
}
