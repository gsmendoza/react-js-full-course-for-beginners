import AddItemForm from './AddItemForm';
import SearchItemsForm from './SearchItemsForm';
import ItemListItem from './ItemListItem';

const Content = ({ items, setItems, searchParam, setSearchParam }) => {
  return (
    <main>
      <AddItemForm items={items} setItems={setItems} />
      <SearchItemsForm searchParam={searchParam} setSearchParam={setSearchParam} />

      {
        items.length ? (
          <ul>
            {
              items.map((item) => (
                <ItemListItem items={items} setItems={setItems} item={item} key={item.id} />
              ))
            }
          </ul>
        ) : (
          <p style={{ marginTop: '2rem' }}>Your list is empty</p>
        )
      }
    </main>
  )
}

export default Content
