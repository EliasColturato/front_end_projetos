import styled from 'styled-components';
import { colors } from '../../utils/color';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  color: ${colors.gray};
  h2 {
    font-weight: 300;
  }
  button {
    color: ${colors.purple};
    font-size: 16px;
    font-weight: 300;
    cursor: pointer;
    background: none;
    border: none;
    border-bottom: 2px solid ${colors.purple};
  }
`;
