import styled from 'styled-components';
import { colors } from '../../utils/color';

export const Wrapper = styled.div`
  button {
    background-color: ${colors.blue};
    color: ${colors.gray};
    border: none;
    width: 90px;
    border-radius: 0.2rem;
    transition: all 0.3s;
    cursor: pointer;
  }
  button:hover {
    transform: scale(1.1);
  }
`;
