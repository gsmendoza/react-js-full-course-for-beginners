import { useState, useEffect } from 'react';
import ITEMS_API_URL from './items_api_url';
import ItemsLocalStorage from './ItemsLocalStorage';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import AddItemForm from './AddItemForm';
import SearchItemsForm from './SearchItemsForm';

function App() {
  const defaultItems = [];
  const [items, setItems] = useState(defaultItems);
  const [searchParam, setSearchParam] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const filteredItems = () => {
    return items.filter(
      item => item.description.toLowerCase().includes(searchParam.toLowerCase())
    );
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(ITEMS_API_URL);

        if (!response.ok) {
          throw Error("Wasn't able to fetch the items. Please refresh your browser.");
        }

        const downloadedItems = await response.json();
        setItems(downloadedItems);
      }
      catch (error) {
        setError(error.message);
      }
      finally {
        setIsLoading(false);
      }
    }

    fetchItems();
  }, [])

  return (
    <div className="App">
      <Header title="Grocery List" />

      <main>
        <AddItemForm items={items} setItems={setItems} setError={setError} />
        <SearchItemsForm searchParam={searchParam} setSearchParam={setSearchParam} />

        {
          isLoading ?
          (
            <p>Loading items...</p>
          ) :
          (
            error ?
              (
                <p style={{ color: 'red' }}>{`Error: ${error}`}</p>
              ) :
              (
                <Content
                  items={filteredItems()}
                  setItems={setItems}
                  searchParam={searchParam}
                  setSearchParam={setSearchParam}
                  setError={setError}
                />
              )
            )
        }
      </main>

      <Footer itemCount={filteredItems().length}/>
    </div>
  );
}

export default App;
