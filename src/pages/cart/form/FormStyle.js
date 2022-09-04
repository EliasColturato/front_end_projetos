import styled from 'styled-components';
import { colors } from '../../../utils/color';

export const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  width: 400px;
  margin: 0.25rem auto;
  @media (max-width: 1000px) {
    width: 250px;
  }
  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 1.5rem;
  }
  input {
    border: 2px solid ${colors.blueBorder};
    padding: 0.5rem;
    border-radius: 0.25rem;
  }
  .Name {
    width: 100%;
  }
  .email {
    width: 100%;
  }
  .cpf {
    width: 40%;
  }
  .celular {
    width: 40%;
  }
  .cidade {
    width: 45%;
  }
  .estado {
    width: 35%;
  }
  .cep {
    width: 40%;
  }
  .endereco {
    width: 40%;
  }
`;
