import ItemListItem from './ItemListItem';

const Content = ({ items, setItems, searchParam, setSearchParam, setError }) => {
  return (
    <>
      {
        items.length ? (
          <ul>
            {
              items.map((item) => (
                <ItemListItem items={items} setItems={setItems} item={item} key={item.id} setError={setError} />
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
