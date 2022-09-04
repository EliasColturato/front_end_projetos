import React from 'react';
import {
  Wrapper,
  FinalCompra,
  Content,
  CheckoutCard,
  WrapperCart,
  ItemsInfo,
  CheckoutButton,
} from './CartStyle';
import { CartCard } from '../../components/cartCard/CartCard';
import { Form } from './form/Form';

export const Cart = ({ listProduct, handleRemoveProduct, totalValue }) => {
  function alerta() {
    alert('Compra finalizada!');
  }
  return (
    <Wrapper>
      <FinalCompra>
        <h1>Finalizar Compra:</h1>
      </FinalCompra>
      <Content>
        <Form />{' '}
        <div>
          <CheckoutCard>
            {listProduct &&
              listProduct.map(item => {
                return (
                  <WrapperCart>
                    <CartCard
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      price={item.price}
                      poster_path={item.poster_path}
                      handleRemoveProduct={handleRemoveProduct}
                    />
                  </WrapperCart>
                );
              })}
          </CheckoutCard>
          <ItemsInfo>
            <p>Total</p>
            <h1>R$ {totalValue}</h1>
          </ItemsInfo>
          <CheckoutButton>
            <button onClick={() => alerta()}>Finalizar</button>
          </CheckoutButton>
        </div>
      </Content>
    </Wrapper>
  );
};
