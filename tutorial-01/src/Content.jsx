import ItemListItem from './ItemListItem';

const Content = ({ items, setItems }) => {
  return (
    <main>
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
