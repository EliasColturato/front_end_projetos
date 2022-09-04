import styled from 'styled-components';
import { colors } from '../../utils/color';

export const Wrapper = styled.div`
  background-color: ${colors.blue};
  top: 0;
  justify-content: center;
  display: flex;
  position: fixed;
  width: 100%;
  z-index: 1;
`;

export const Content = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  height: 65px;
  width: 90%;
`;
