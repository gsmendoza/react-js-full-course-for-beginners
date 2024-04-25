function ColorInput({colorValue, setColorValue, isDarkText, setIsDarkText}) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Enter Color Value</label>

      <input
        autoFocus
        type="text"
        placeholder="Enter Color Value"
        required
        value={colorValue}
        onChange={(e) => setColorValue(e.target.value)}
      />

      <button
        type="button"
        onClick={(e) => {setIsDarkText(!isDarkText)}}
      >
        Toggle Text Color
      </button>
    </form>
  );
}

export default ColorInput;
