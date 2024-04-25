import { useState } from 'react';
import ItemsLocalStorage from './ItemsLocalStorage';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';

function App() {
  const defaultItems = ItemsLocalStorage.load();

  const [items, setItems] = useState(defaultItems);

  const [searchParam, setSearchParam] = useState('');

  const filteredItems = () => {
    return items.filter(
      item => item.description.toLowerCase().includes(searchParam.toLowerCase())
    );
  };

  return (
    <div className="App">
      <Header title="Grocery List" />

      <Content
        items={filteredItems()}
        setItems={setItems}
        searchParam={searchParam}
        setSearchParam={setSearchParam}
      />

      <Footer itemCount={filteredItems().length}/>
    </div>
  );
}

export default App;
