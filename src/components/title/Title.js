import React from 'react';
import { Wrapper, Content } from './TitleStyle';

export const Title = ({ text, handleRemoveAll }) => {
  return (
    <Wrapper>
      <Content>
        <h2>{text}</h2>
        <button onClick={() => handleRemoveAll()}>Esvaziar</button>
      </Content>
    </Wrapper>
  );
};
