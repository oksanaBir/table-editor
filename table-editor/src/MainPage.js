import {Container} from "@mui/material";
import React, {useState} from "react";
import initialItems from "./initialItems.json";
import Form from "./components/Form";
import ItemsList from './components/ItemsList';

const MainPage = () => {
  const [items, setItems] = useState(initialItems);
  console.log(items);

  return (
    <Container sx={{ pt: 5, textAlign: 'left' }}>
      <h2>Добавить строку</h2>
      <Form setItems={setItems} />
      <h2>Список</h2>
      <ItemsList setItems={setItems} items={items} />
    </Container>
  )
};

export default MainPage;