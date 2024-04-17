const Content = () => {
  const names = ["Coleen", "George", "Leela", "Len"];

  const randomName = () => {
    const index = Math.floor(Math.random() * names.length);

    return names[index];
  }

  return (
    <main>
      Hello {randomName()}!
    </main>
  )
}

export default Content
