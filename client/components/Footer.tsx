import { useState } from 'react'

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
    </footer>
  )
}

export default Footer
