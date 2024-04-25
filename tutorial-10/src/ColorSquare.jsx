import colorNames from 'colornames'

function ColorSquare({ colorValue, isDarkText }) {
  const colorHexValue = () => {
    return colorNames(colorValue);
  };

  return (
    <div className="ColorSquare">
      <section
        className="square"
        style={{
          backgroundColor: colorValue,
          color: isDarkText ? 'black' : 'white'
        }}
      >
        <p>{colorValue || 'Empty color value'}</p>
        <p>{colorHexValue()}</p>
      </section>
    </div>
  );
}

export default ColorSquare;
