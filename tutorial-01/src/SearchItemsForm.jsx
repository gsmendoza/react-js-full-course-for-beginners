const SearchItemsForm = ({ searchParam, setSearchParam }) => {
  return (
    <form className='searchForm' onSubmit={ (e) => e.preventDefault() }>
      <label htmlFor='search'>Search</label>

      <input
        id='search'
        type='text'
        role='searchbox'
        placeholder='Search Items'
        value={searchParam}
        onChange={(e) => { setSearchParam(e.target.value) }}
      />
    </form>
  );
}

export default SearchItemsForm;
