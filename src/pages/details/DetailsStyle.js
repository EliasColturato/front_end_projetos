import styled from 'styled-components';
import { colors } from '../../utils/color';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  column-gap: 2rem;
  justify-content: center;
  margin: 4rem auto;
  img {
    user-select: none;
    width: 300px;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  } ;
`;

export const Overview = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  user-select: none;
`;

export const InfoFilm = styled.div`
  justify-content: space-between;
  width: 400px;
  display: flex;
  align-items: center;
  padding: 1rem;
  span {
    background-color: ${colors.purple};
    padding: 0.5rem;
    border-radius: 0.2rem;
    color: #fff;
  }
`;

export const ControllButton = styled.div`
  width: 300px;
`;
