import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  margin: 6rem auto;
  display: none;
  justify-content: center;
  @media (max-width: 800px) {
    display: flex;
  }
`;

export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 4rem;
  margin: 6rem auto;
  row-gap: 4rem;
  @media (max-width: 800px) {
    margin: 0;
  }
`;
