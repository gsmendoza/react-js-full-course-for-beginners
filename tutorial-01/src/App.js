import { useState } from 'react';
import ItemsLocalStorage from './ItemsLocalStorage';
import Content from './Content';
import Header from './Header';
import AddItemForm from './AddItemForm';
import Footer from './Footer';

function App() {
  const defaultItems = ItemsLocalStorage.load();

  const [items, setItems] = useState(defaultItems);

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItemForm items={items} setItems={setItems} />
      <Content items={items} setItems={setItems} />
      <Footer itemCount={items.length}/>
    </div>
  );
}

export default App;
