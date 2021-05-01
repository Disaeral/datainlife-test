import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Context } from "..";

const ProductContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding:0;
  margin:0;
  height: 3rem;
`;
const RowCell = styled.div`
  width: 100%;
  border: 1px solid black;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const Product = observer(({ productProp }) => {
  
  const { items } = useContext(Context);
  const { product } = items;
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  
  const onInput = (e) => {
    const number = e.target.value;
    const id = productProp.gid;
    const productSum = e.target.value * productProp.gprice;
    setTotal(productSum);
    setQuantity(number);
    items.setProduct({ ...product, [id]: number });

    items.setSum([total.toString()])
    
  };
  
  return (
    <ProductContainer>
      <RowCell>{productProp.gid}</RowCell>
      <RowCell>{productProp.gname}</RowCell>
      <RowCell>{productProp.gprice}P </RowCell>
      <RowCell>
        <input
          type="number"
          step="1"
          onblur="this.focus()"
          autofocus
          onChange={(e) => {
            onInput(e);
          }}
          min="0"
          value={quantity}
        />
      </RowCell>
      <RowCell>{total}</RowCell>
    </ProductContainer>
  );
});

export default Product;
