import React from 'react';
import { CartCard } from '../cartCard/CartCard';
import {
  Container,
  ItemsCart,
  FooterCheckout,
  TotalValue,
} from './SideBarStyle';
import { Title } from '../title/Title';
import { EndBuy } from './endBuy/EndBuy';

const Sidebar = ({
  active,
  listProduct,
  handleRemoveProduct,
  totalValue,
  handleRemoveAll,
}) => {
  return (
    <Container sidebar={active} role="sidebar">
      <div>
        <Title text="Meu Carrinho:" handleRemoveAll={handleRemoveAll} />
        <ItemsCart>
          {listProduct &&
            listProduct.map(item => {
              return (
                <div key={item.id}>
                  <CartCard
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    poster_path={item.poster_path}
                    handleRemoveProduct={handleRemoveProduct}
                  />
                </div>
              );
            })}
        </ItemsCart>
        <FooterCheckout>
          <TotalValue>
            <h3>Total:</h3>
            <h2>R$ {totalValue}</h2>
          </TotalValue>
          <EndBuy />
        </FooterCheckout>
      </div>
    </Container>
  );
};

export default Sidebar;
