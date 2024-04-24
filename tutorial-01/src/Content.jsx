import AddItemForm from './AddItemForm';
import ItemListItem from './ItemListItem';

const Content = ({ items, setItems }) => {
  return (
    <main>
      <AddItemForm items={items} setItems={setItems} />

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
