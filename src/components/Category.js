import React from 'react';
import ProductList from './ProductList';
import styled from 'styled-components'

const Container = styled.div`
  display:flex;
  width:100%;
  align-items:center;
  justify-items:center;
  flex-direction:column;
`
const Row = styled.div`
  display: flex;
  width: 100%;
`;

const Category =({category}) => {
  return (
    <Container>
      <h1>{category.rname}</h1>
      <Row>
      <ProductList products={category.goods}/>
      </Row>
    </Container>
  );
};

export default Category;