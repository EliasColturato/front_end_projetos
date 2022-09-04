import styled from 'styled-components';
import { colors } from '../../utils/color';

export const Wrapper = styled.div`
  button {
    justify-content: center;
    display: flex;
    text-align: center;
    align-items: center;
    height: 50px;
    border-radius: 0.25rem;
    width: 100%;
    background-color: ${colors.purple};
    cursor: pointer;
    border: none;
    color: #fff;
  }
  h3 {
    font-size: 20px;
    font-weight: 400;
  }
`;
