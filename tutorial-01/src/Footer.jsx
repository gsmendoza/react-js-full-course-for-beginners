const Footer = ({ itemCount }) => {
  return (
    <footer>
      <p>{itemCount} list { itemCount === 1 ? 'item' : 'items' }</p>
    </footer>
  )
}

export default Footer
