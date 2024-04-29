import ItemListItem from './ItemListItem';

const Content = ({ items, setItems, searchParam, setSearchParam }) => {
  return (
    <>
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
    </>
  )
}

export default Content
