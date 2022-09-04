import React, { useState } from 'react';
import { Wrapper, ButtonWrapper } from './BuyMenuStyle.js';
import SideBar from '../../sideBar/SideBar';

export default function BuyMenu({
  listProduct,
  handleRemoveProduct,
  totalValue,
  handleRemoveAll,
}) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  for (let i = 0; i < listProduct.length; i++) {}

  return (
    <>
      <Wrapper>
        <div className="hear">
          <ion-icon name="heart"></ion-icon>
        </div>
        <ButtonWrapper>
          <button onClick={showSidebar}>
            <p>{listProduct.length}</p>
            <ion-icon name="cart"></ion-icon>
          </button>
        </ButtonWrapper>
        {sidebar && (
          <SideBar
            active={setSidebar}
            listProduct={listProduct}
            handleRemoveProduct={handleRemoveProduct}
            totalValue={totalValue}
            handleRemoveAll={handleRemoveAll}
          />
        )}
      </Wrapper>
    </>
  );
}
