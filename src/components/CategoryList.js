import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import Category from "./Category";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  flex-direction: column;
  align-self: flex-start;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  flex-wrap:wrap;
`;

const CategoryList = observer(() => {
  const { items } = useContext(Context);
  const { selectedCat } = items;
  return (
    <Container>
      <h1>Каталог товаров</h1>

      <Row>
        {items.data.map((category) =>
          selectedCat ? (
            category.rname === selectedCat ? (
              <Category category={category} />
            ) : null
          ) : (
            <Category category={category} />
          )
        )}
      </Row>
    </Container>
  );
});

export default CategoryList;
