import styled from 'styled-components';
import { colors } from '../../../utils/color';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  ion-icon {
    font-size: 30px;
    color: #fff;
  }
`;
export const ButtonWrapper = styled.div`
  margin-top: 5px;
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
  p {
    font-size: 10px;
    position: absolute;
    top: 0;
    height: 15px;
    width: 15px;
    z-index: 1;
    background-color: ${colors.yellow};
    padding: 0.15rem;
    border-radius: 1rem;
  }
`;
