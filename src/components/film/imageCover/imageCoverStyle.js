import styled from 'styled-components';
import { colors } from '../../../utils/color';

export const Wrapper = styled.div`
  justify-content: center;
  position: relative;
  display: flex;
  cursor: pointer;
  img {
    border: 2px solid ${colors.blueBorder};
    width: 250px;
  }
  &:hover {
    h3 {
      transform: translateY(0px);
      opacity: 1;
      backdrop-filter: blur(4px);
    }
  }
`;

export const IconCover = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;
  font-size: 25px;
  color: ${colors.icons};
  ion-icon {
    transition: all 0.3s;
  }
  ion-icon:hover {
    transform: scale(1.1);
  }
`;

export const DataCover = styled.div`
  justify-content: center;
  display: flex;
  text-align: center;
  h3 {
    font-size: 15px;
    font-weight: 300;
    top: 85%;
    left: 0;
    right: 0%;
    position: absolute;
    color: ${colors.title};
    border-radius: 10px 10px 0 0;
    transition: all 0.3s;
    padding: 0.5rem;
    background-color: #fff;
    transform: translateY(30px);
    opacity: 0;
    user-select: none;
  }
`;
