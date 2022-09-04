import styled from 'styled-components';
import { colors } from '../../../utils/color';

export const Wrapper = styled.div`
  form {
    width: 350px;
    height: 30px;
    border-radius: 0.5rem;
    padding: 0.5rem;
    background-color: #fff;
    align-items: center;
    display: flex;
    justify-content: space-between;
    border: 2px solid ${colors.blueBorder};
    @media (max-width: 800px) {
      padding: 0;
      width: 200px;
    }
  }
  input {
    border: none;
    width: 200px;

    height: 25px;
  }
  input::placeholder {
    color: ${colors.blue50};
  }
  input:focus {
    outline: none;
  }
  button {
    align-items: center;
    border: none;
    background: none;
    transition: all 0.1s;
    border-radius: 0.5rem;
    cursor: pointer;
  }
  ion-icon {
    color: ${colors.icons};
    font-size: 25px;
  }
  @media (max-width: 740px) {
    width: min-content;
    input {
      width: 300px;
    }
  }
`;
