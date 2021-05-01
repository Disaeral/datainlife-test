import React from 'react';
import Product from './Product';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

const ProductListHeader = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-around;

`

const ProductListContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
`
const ListHeaderElement = styled.div`
  //flex:1;
`
const Row = styled.div`
  display: flex;
  width: 100%;
  flex-direction:column;
`;

const ProductList = observer(({products}) => {
  return (
    <Row>
      <br/>
      <ProductListHeader>
      <ListHeaderElement>id: </ListHeaderElement>
      <ListHeaderElement>Название: </ListHeaderElement>
      <ListHeaderElement>Цена: </ListHeaderElement>
      <ListHeaderElement>Количество: </ListHeaderElement>
      <ListHeaderElement>Сумма: </ListHeaderElement>
      </ProductListHeader> 
      <ProductListContainer>     
      {products.map(product=><Product productProp={product}/>)}
      </ProductListContainer>
      <br/>
    </Row>
  );
});

export default ProductList;