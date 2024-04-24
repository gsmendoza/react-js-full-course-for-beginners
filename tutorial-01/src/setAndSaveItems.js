import ItemsLocalStorage from './ItemsLocalStorage';

const setAndSaveItems = ({ setItems, updatedItems }) => {
  setItems(updatedItems);
  ItemsLocalStorage.save(updatedItems);
}

export default setAndSaveItems;
