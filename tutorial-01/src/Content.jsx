import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
  const [items, setItems] = useState([
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
  ]);

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
    <main>
      {
        items.length ? (
          <ul>
            {
              items.map((item) => (
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
              ))
            }
          </ul>
        ) : (
          <p style={{ marginTop: '2rem'}}>Your list is empty</p>
        )
      }
    </main>
  )
}

export default Content
