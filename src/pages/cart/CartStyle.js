import styled from 'styled-components';
import { colors } from '../../utils/color';

export const Wrapper = styled.div`
  margin: 6rem auto;
  justify-content: center;
  display: flex;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
export const FinalCompra = styled.div`
  width: 60%;
  h1 {
    font-weight: 300;
    text-align: left;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  @media (max-width: 1000px) {
    row-gap: 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-items: center;
  }
`;

export const CheckoutCard = styled.div`
  overflow: scroll;
  width: 400px;
  height: 200px;
  @media (max-width: 1000px) {
    width: 350px;
    height: 180px;
  }
  &::-webkit-scrollbar {
    width: 7px;
    border-radius: 1rem;
    background-color: #eee;
  }
  &::-webkit-scrollbar-thumb {
    background: ${colors.blue};
    border-radius: 1rem;
  }
`;

export const WrapperCart = styled.div`
  border-bottom: 1px solid ${colors.blueBorder};
`;

export const ItemsInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.gray};
  h1 {
    font-weight: 400;
  }
`;

export const CheckoutButton = styled.div`
  justify-content: center;
  button {
    cursor: pointer;
    border-radius: 0.25rem;
    background-color: ${colors.purple};
    width: 100%;
    border: none;
    user-select: none;
    color: #fff;
    font-size: 20px;
  }
`;
