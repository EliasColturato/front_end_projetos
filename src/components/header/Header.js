import React from 'react';
import BuyMenu from './buyMenu/BuyMenu';
import { Wrapper, Content } from './HeaderStyle';

import Logo from './logo/Logo';
import Search from './search/Search';

export default function Header({
  listProduct,
  handleRemoveProduct,
  totalValue,
  handleRemoveAll,
}) {
  return (
    <Wrapper>
      <Content>
        <Logo textLogo="LOGO" />
        <Search />
        <BuyMenu
          listProduct={listProduct}
          handleRemoveProduct={handleRemoveProduct}
          totalValue={totalValue}
          handleRemoveAll={handleRemoveAll}
        />
      </Content>
    </Wrapper>
  );
}
