import { useState } from 'react';

const Content = () => {
  const NAMES = ["Coleen", "George", "Leela", "Len"];

  const [name, setName] = useState('User');
  const [count, setCount] = useState(0);

  const randomName = () => {
    const index = Math.floor(Math.random() * NAMES.length);

    return NAMES[index];
  }

  const handleNameChange = () => {
    setName(randomName());
  }

  const handleCountIncrement = () => {
    setCount(count + 1);
    console.log(count);
  }

  return (
    <main>
      <p>
        Hello {name}!
      </p>

      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleCountIncrement}>Increment count {count}</button>
    </main>
  )
}

export default Content
