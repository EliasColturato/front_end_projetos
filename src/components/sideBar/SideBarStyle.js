import styled from 'styled-components';
import { colors } from '../../utils/color';

export const Container = styled.div`
  background-color: #fff;
  border: 1px solid ${colors.blue50};
  position: fixed;
  height: 100vh;
  overflow: hidden;
  width: 500px;
  top: 65px;
  right: 0px;
  z-index: 4;
`;

export const ItemsCart = styled.div`
  overflow: auto;
  height: 70vh;
  @media (max-height: 740px) {
    height: 62vh;
  }
  @media (max-height: 600px) {
    height: 56vh;
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

export const FooterCheckout = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 500px;
  background-color: #fff;
  align-items: center;
`;

export const TotalValue = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  h3 {
    font-weight: 300;
  }
`;
