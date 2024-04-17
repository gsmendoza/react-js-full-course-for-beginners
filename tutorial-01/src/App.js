import logo from './logo.svg';
import './App.css';

function App() {
  const names = ["Coleen", "George", "Leela", "Len"];

  const randomName = () => {
    const index = Math.floor(Math.random() * names.length);

    return names[index];
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {randomName()}!
        </p>
      </header>

    </div>
  );
}

export default App;
