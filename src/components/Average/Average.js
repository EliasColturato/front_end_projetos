import React from 'react';
import { Wrapper } from './AverageStyle';

export default function Average({ vote_average }) {
  return (
    <Wrapper>
      <ion-icon name="star" style={{ fontSize: '25px' }}></ion-icon>
      <p>{vote_average}</p>
    </Wrapper>
  );
}
