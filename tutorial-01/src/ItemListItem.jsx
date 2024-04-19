import { FaTrashAlt } from 'react-icons/fa';

const ItemListItem = ({ items, setItems, item }) => {
  const handleItemCheck = (id) => {
    const updatedItems = items.map(
      (item) => item.id === id ? { ...item, checked: !item.checked } : item
    );

    setItems(updatedItems);
    localStorage.setItem('groceriesList', JSON.stringify(updatedItems));
  }

  const handleItemDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);

    setItems(updatedItems);
    localStorage.setItem('groceriesList', JSON.stringify(updatedItems));
  }

  return (
    <li key={item.id} className="item">
      <input
        type="checkbox"
        onChange={() => { handleItemCheck(item.id)}}
        checked={item.checked}
      />

      <label
        style={ item.checked ? { textDecoration: 'line-through' } : null }
        onDoubleClick={() => { handleItemCheck(item.id)}}
      >
        {item.description}
      </label>

      <FaTrashAlt
        onClick={() => { handleItemDelete(item.id)}}
        role="button"
        tabIndex="0"
      />
    </li>
  );
}

export default ItemListItem

