import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Context } from ".";
import CategoryList from "./components/CategoryList";
import { getItems, postToBasket } from "./http/itemsAPI";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
const TotalCountBar = styled.div`
  position: sticky;
  bottom: 0;
  width: 100%;
  height: 4rem;
  background-color: black;
  color: white;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-around;
  & > button {
    cursor: pointer;
    border: 1px solid white;
    color: white;
    background-color: black;
    height: 1.5rem;
    border-radius: 2px;
  }
`;
const CategorySelect = styled.ul`
  list-style: none;
  max-width: 200px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  z-index: 9;
  align-self:flex-start;
`;
const CategoryElement = styled.li`
  width: 100%;
  background-color: black;
  color: white;
  padding: 0 1rem;

  cursor: pointer;
  transition: all 0.4s ease;
  &:hover {
    color: black;
    background-color: white;
  }
`;

const App = observer(() => {
  const handleSubmit = () => {
    const { product } = items;
    const postData = new FormData();
    console.log(JSON.stringify(product));
    Object.entries(product).forEach((array) => {
      postData.append(array[0], array[1]);
    });
    postToBasket(postData);
  };

  const { items } = useContext(Context);

  const categories = items.data
    .map((elem) => elem.rname)
    .filter((elem) => elem !== undefined);
  
  useEffect(() => {
    try {
      getItems().then((data) => items.setData(data));
      
    } catch (e) {
      console.log(e);
    }
  }, []);
  
  return (
    <React.Fragment>
      <Container>
        <CategorySelect>
          {categories.map((cat) => (
            <CategoryElement
              onClick={() => {
                items.setSelectedCat(cat);
              }}
            >
              {cat}
            </CategoryElement>
          ))}
        </CategorySelect>
        
        <CategoryList />
        
      </Container>

      <TotalCountBar>
        <div>Итого: ----({items.sum.reduce((acc, el)=>Number(acc)+Number(el))})-----</div>
        <button onClick={handleSubmit}>В корзину</button>
      </TotalCountBar>
    </React.Fragment>
  );
});

export default App;
