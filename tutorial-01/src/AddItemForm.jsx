import { useState } from 'react';
import { useRef } from 'react';
import { FaPlus } from 'react-icons/fa';
import setAndSaveItems from './setAndSaveItems';

const AddItemForm = ({ items, setItems }) => {
  const [newItemDescription, setNewItemDescription] = useState('');

  const addNewItem = () => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;

    const newItem = {
      id,
      checked: false,
      description: newItemDescription
    };

    const updatedItems = [...items, newItem];

    setAndSaveItems({ setItems, updatedItems });
  }

  const AddItemInputRef = useRef();

  const handleAdd = (e) => {
    e.preventDefault();
    addNewItem();
    setNewItemDescription('');
  }

  return (
    <form className='addForm' onSubmit={handleAdd}>
      <label htmlFor='addItem'>Add Item</label>

      <input
        autoFocus
        ref={AddItemInputRef}
        id='addItem'
        type='text'
        placeholder='Add Item'
        required
        value={newItemDescription}
        onChange={(e) => setNewItemDescription(e.target.value)}
      />

      <button
        type='submit'
        aria-label='Add Item'
        onClick={() => AddItemInputRef.current.focus()}

      >
        <FaPlus />
      </button>
    </form>
  )
}

export default AddItemForm;
