import styled from 'styled-components';
import { colors } from '../../../utils/color';

export const ButtonBuy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-radius: 0.25rem;
  bottom: 0;
  width: 350px;
  height: 50px;
  background-color: ${colors.purple};
  color: #fff;
  margin-bottom: 1rem;
  user-select: none;
  h3 {
    color: #fff;
    text-decoration: none;
    font-weight: 400;
  }
`;
