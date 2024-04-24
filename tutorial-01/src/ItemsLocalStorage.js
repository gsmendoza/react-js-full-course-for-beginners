const GROCERIES_LIST = 'groceriesList';

const loadItems = () => {
  return JSON.parse(localStorage.getItem(GROCERIES_LIST));
}

const saveItems = (items) => {
  localStorage.setItem(GROCERIES_LIST, JSON.stringify(items));
}

export default { load: loadItems, save: saveItems };
