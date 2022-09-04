import styled from 'styled-components';
import { colors } from '../../utils/color';

export const Wrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  text-align: left;
  align-items: center;
  width: 100%;
  color: ${colors.gray};
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
  ion-icon {
    color: ${colors.gray};
    z-index: 3;
  }
  img {
    height: 50px;
  }
`;
