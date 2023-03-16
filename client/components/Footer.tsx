import { useState } from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const [colour, setColour] = useState('black')

  const colourHandler = () => {
    setColour(
      colour +
        `#${Math.floor(Math.random() * 0x1000000)
          .toString(16)
          .padStart(6, '0')}`
    )
  }

  return (
    <footer>
      <p onMouseEnter={colourHandler} style={{ color: { colour } }}>
        made by JAIL
      </p>
      <Link to={'/Level1'}>to Level1</Link>
      <Link to={'/Test'}>to Test</Link>
    </footer>
  )
}

export default Footer
