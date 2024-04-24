const setAndSaveItems = ({ setItems, updatedItems }) => {
  setItems(updatedItems);
  localStorage.setItem('groceriesList', JSON.stringify(updatedItems));
}

export default setAndSaveItems;
