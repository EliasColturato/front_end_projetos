import styled from 'styled-components';
import { colors } from '../../utils/color';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  ion-icon {
    color: ${colors.icons};
  }
  p {
    font-weight: 600;
    color: ${colors.title};
  }
`;
