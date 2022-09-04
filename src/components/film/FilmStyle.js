import styled from 'styled-components';
import { colors } from '../../utils/color';

export const Wrapper = styled.div`
  border: 1px solid ${colors.blue50};
`;

export const FilmInfo = styled.div`
  line-height: 0;
  margin: auto;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  h4 {
    color: ${colors.title};
  }
`;
