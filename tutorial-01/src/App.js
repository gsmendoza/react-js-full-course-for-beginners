import { useState } from 'react';
import Content from './Content';
import Header from './Header';
import AddItemForm from './AddItemForm';
import Footer from './Footer';

function App() {
  const defaultItems = [
    {
      id: 1,
      checked: false,
      description: 'Nova'

    },
    {
      id: 2,
      checked: false,
      description: 'Nissin Ramen'

    },
    {
      id: 3,
      checked: false,
      description: 'Sprite'
    }
  ];

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
