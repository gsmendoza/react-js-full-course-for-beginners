import { FaTrashAlt } from 'react-icons/fa';
import ITEMS_API_URL from './items_api_url';
import callApi from './callApi';
import setAndSaveItems from './setAndSaveItems';

const ItemListItem = ({ items, setItems, item, setError }) => {
  const handleCheck = async (id) => {
    const updateParams = { checked: !item.checked };

    const updatedItems = items.map(
      (item) => item.id === id ? { ...item, ...updateParams } : item
    );

    setAndSaveItems({ setItems, updatedItems });

    const patchOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateParams)
    }

    const errorMessage = await callApi(`${ITEMS_API_URL}/${id}`, patchOptions);

    if (errorMessage) setError(errorMessage)
  }

  const handleDelete = async (id) => {
    const updatedItems = items.filter((item) => item.id !== id);

    setAndSaveItems({ setItems, updatedItems });

    const deleteOptions = { method: 'DELETE' };
    const errorMessage = await callApi(`${ITEMS_API_URL}/${id}`, deleteOptions);

    if (errorMessage) setError(errorMessage)
  }

  return (
    <li className="item">
      <input
        type="checkbox"
        onChange={() => { handleCheck(item.id)}}
        checked={item.checked}
      />

      <label
        style={ item.checked ? { textDecoration: 'line-through' } : null }
        onDoubleClick={() => { handleCheck(item.id)}}
      >
        {item.description}
      </label>

      <FaTrashAlt
        onClick={() => { handleDelete(item.id)}}
        role="button"
        tabIndex="0"
        aria-label={`Delete ${item.description}`}
      />
    </li>
  );
}

export default ItemListItem

